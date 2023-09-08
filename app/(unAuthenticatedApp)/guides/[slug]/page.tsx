import ComponentWrapper from "@/components/common/ComponentWrapper";
import BlogSidebar from "@/components/guides/BlogSidebar";
import Popular from "@/components/guides/Popular";
import RichTextRender from "@/components/guides/RichTextRender";
import SocialShare from "@/components/guides/SocialShare";
import { contentfulClient } from "@/lib/contentful";
import { TypePostsSkeleton } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

type GuideType = {
  params: {
    slug: string;
  };
};

const Guide = async ({ params }: GuideType) => {
  const { items } = await contentfulClient.getEntries<TypePostsSkeleton>({
    content_type: "posts",
    "fields.slug": params?.slug,
  });

  if (!items) {
    return notFound();
  }

  const item = items[0];

  const data = {
    title: item.fields.title,
    slug: item.fields.slug,
    content: item.fields.content,
    coverImage: item.fields.coverImage,
    lastUpdated: item.fields.lastUpdated,
    previewDescription: item.fields.previewDescription,
  };

  return (
    <ComponentWrapper className="flex flex-col mt-10 space-y-8 lg:space-x-8 lg:flex-row lg:space-y-0">
      <div className="w-full space-y-10 lg:w-2/3">
        <div className="p-2 md:p-8 space-y-4 bg-white rounded ">
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          {/* <div>Last updated on {formateDate(data?.updatedAt)}</div> */}
          <SocialShare
            id={"1"}
            url={`https://wordpresssecurites.com/${params?.slug}`}
          />
          <RichTextRender content={data.content} />
        </div>

        <Popular />
      </div>
      <div className="w-full lg:w-1/3">
        <BlogSidebar />
      </div>
    </ComponentWrapper>
  );
};

export default Guide;
