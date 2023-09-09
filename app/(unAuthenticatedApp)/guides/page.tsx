import ComponentWrapper from "@/components/common/ComponentWrapper";
import React, { HTMLAttributes } from "react";
import { BigCard } from "@/components/guides/BigCard";
import { Asset, UnresolvedLink } from "contentful";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import { SmallCard } from "@/components/guides/SmallCard";
import Newsletter from "@/components/guides/Newsletter";
import { PostType, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

// export const dynamic = "force-static";
// export const revalidate = 100;

export type BigCardType = HTMLAttributes<HTMLDivElement> & {
  blog: {
    title: string;
    slug: string;
    content: Document | any;
    coverImage: UnresolvedLink<"Asset"> | Asset<undefined, string>;
    lastUpdated:
      | `${number}-${number}-${number}T${number}:${number}:${number}Z`
      | undefined;
    previewDescription: string;
  };
};

const Blog = async () => {
  const blogs: PostType[] = await getPosts();

  if (!blogs) {
    return notFound();
  }

  const moreBlogs = blogs?.slice(3);

  return (
    <ComponentWrapper className="pt-8 space-y-8">
      <SectionTitleWithSubTitle
        title="Read, Learn, and Secure Your Website"
        subTitle="Explore Our Informative Blog for Actionable WordPress Security Insights and Tips."
      />
      <div className="grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BigCard blog={blogs[0]} />

        <div className="space-y-[20px]">
          <div>
            <SmallCard blog={blogs[1]} />
          </div>
          <div>
            <SmallCard blog={blogs[2]} />
          </div>
        </div>
        <Newsletter />
      </div>

      <div className="grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {moreBlogs.map((blog) => (
          <BigCard key={blog?.slug} blog={blog} />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Blog;
