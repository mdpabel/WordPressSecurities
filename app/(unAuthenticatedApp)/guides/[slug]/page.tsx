import ComponentWrapper from "@/components/common/ComponentWrapper";
import BlogSidebar from "@/components/guides/BlogSidebar";
import Popular from "@/components/guides/Popular";
import RichTextRender from "@/components/guides/RichTextRender";
import SocialShare from "@/components/guides/SocialShare";
import { contentfulClient } from "@/lib/contentful";
import { getPostBySlug } from "@/lib/posts";
import { TypePostsSkeleton } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

// export const dynamic = "force-static";
// export const revalidate = 86400;

// export async function generateStaticParams() {
//   const { items } = await contentfulClient.getEntries<TypePostsSkeleton>({
//     content_type: "posts",
//   });

//   return items.map((item) => ({
//     slug: item.fields.slug,
//   }));
// }

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
      <div className="w-full space-y-10 lg:w-2/3">
        <div className="p-2 md:p-8 space-y-4 bg-white rounded ">
          <h1 className="text-3xl font-bold">{blog?.title}</h1>
          {/* <div>Last updated on {formatDate(data?.updatedAt)}</div> */}
          <SocialShare
            id={blog?.id}
            url={`https://wordpresssecurites.com/${params?.slug}`}
          />

          <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
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
