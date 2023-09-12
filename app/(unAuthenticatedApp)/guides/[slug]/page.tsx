import ComponentWrapper from "@/components/common/ComponentWrapper";
import BlogSidebar from "@/components/guides/BlogSidebar";
import Popular from "@/components/guides/Popular";
import SocialShare from "@/components/guides/SocialShare";
import { PostType, getPostBySlug, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { formatDate } from "@/lib/utils";
import { CalenderIcon } from "@/components/common/icons";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/Avatar";

export const dynamic = "force-static";
export const revalidate = 1;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post?.seo?.title,
    description: post?.seo?.metaDesc,
    keywords: post?.seo?.metaKeywords,
    openGraph: {
      images: [post?.featuredImage, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const posts: PostType[] = await getPosts();

  return posts.map((post) => ({
    slug: post?.slug,
  }));
}

type GuideType = {
  params: {
    slug: string;
  };
};

const Guide = async ({ params }: GuideType) => {
  const blog = await getPostBySlug(params?.slug);

  if (!blog) return notFound();

  return (
    <ComponentWrapper className="flex flex-col mt-10 space-y-8 lg:space-x-8 lg:flex-row lg:space-y-0">
      <div className="w-full space-y-10 lg:w-[70%]">
        <div className="p-2 md:px-0 md:py-8 space-y-4 bg-white rounded ">
          <h1 className="text-3xl font-bold">{blog?.title}</h1>
          <div className="flex space-x-8">
            <div className="flex space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={blog.author?.avatarUrl!}
                  alt={blog?.author?.avatarUrlAlt!}
                />
                <AvatarFallback>{blog?.author?.firstName}</AvatarFallback>
              </Avatar>
              <span>
                By {blog?.author?.firstName + " " + blog?.author?.lastName}
              </span>
            </div>
            <div className="flex space-x-2">
              <CalenderIcon />
              <span>{blog?.date}</span>
            </div>
          </div>
          <SocialShare
            id={blog?.id}
            url={`https://wordpresssecurites.com/${params?.slug}`}
          />

          <div
            className="prose max-w-full"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </div>
        <Suspense fallback="Loading...">
          <Popular />
        </Suspense>
      </div>
      <div className="w-full lg:w-1/3 lg:pt-12">
        <BlogSidebar />
      </div>
    </ComponentWrapper>
  );
};

export default Guide;
