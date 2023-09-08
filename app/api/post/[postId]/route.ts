import prisma from "@/db/mongo";
import { contentfulClient } from "@/lib/contentful";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, context: any) => {
  const { params } = context;
  const { postId } = params;

  const postView = await prisma.postView.findFirst({
    where: {
      postId,
    },
  });

  return NextResponse.json({
    success: true,
    data: postView?.views ?? 0,
  });
};

export const POST = async (req: NextRequest, context: any) => {
  const { params } = context;
  const { postId } = params;

  const entry = await contentfulClient.getEntry(postId);

  if (!entry || !postId) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 401,
      }
    );
  }

  let post = await prisma.postView.findFirst({
    where: {
      postId,
    },
  });

  if (!post) {
    post = await prisma.postView.create({
      data: {
        postId,
        views: 1,
      },
    });
  } else {
    post = await prisma.postView.update({
      where: {
        id: post.id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  }

  // await prisma.postView.upsert({
  //   where: {
  //     id: post?.id,
  //   },
  //   create: {
  //     views: 1,
  //     postId: postId as string,
  //   },
  //   update: {
  //     views: {
  //       increment: 1,
  //     },
  //   },
  // });

  return NextResponse.json({
    success: true,
    data: "",
  });
};
