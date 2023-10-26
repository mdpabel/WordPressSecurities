import ComponentWrapper from "@/components/common/ComponentWrapper";
import React from "react";
import { BigCard } from "@/components/guides/BigCard";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import { SmallCard } from "@/components/guides/SmallCard";
import Newsletter from "@/components/guides/Newsletter";
import { PostType, getMostViewedPosts, getPosts } from "@/lib/posts";
import { PostDataType } from "@/types/posts";

export const dynamic = "force-static";
export const revalidate = 1;

const getPostsv2 = async () => {
  try {
    const response = await fetch(
      "https://pabel.xyz/blog/wp-json/wp/v2/posts?_embed"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data[0]);

    return [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const Blog = async () => {
  await getPostsv2();
  const mostViewedBlogs = await getMostViewedPosts(3);
  const blogs: PostType[] = await getPosts();

  return (
    <ComponentWrapper className="pt-8 space-y-8">
      <SectionTitleWithSubTitle
        title="Read, Learn, and Secure Your Website"
        subTitle="Explore Our Informative Blog for Actionable WordPress Security Insights and Tips."
      />
      <div className="grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BigCard blog={mostViewedBlogs[0]} />

        <div className="space-y-[20px]">
          <div>
            <SmallCard blog={mostViewedBlogs[1]} />
          </div>
          <div>
            <SmallCard blog={mostViewedBlogs[2]} />
          </div>
        </div>
        <Newsletter />
      </div>

      <div className="grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BigCard key={blog?.slug} blog={blog} />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Blog;
