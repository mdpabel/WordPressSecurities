import { client } from "./client";
import { JSDOM } from "jsdom";
import { formatDate } from "./utils";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT!;

function getPlainTextFromHTML(html: string) {
  const { window } = new JSDOM(html);
  const plainText = window.document.body.textContent;
  return plainText;
}

export async function fetchAPI(
  query = "",
  { variables }: Record<string, any> = {}
) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

interface SeoMeta {
  canonical: string;
  cornerstone: boolean;
  focuskw: string;
  fullHead: string;
  metaDesc: string;
  metaKeywords: string;
  metaRobotsNofollow: string;
  metaRobotsNoindex: string;
  opengraphAuthor: string;
  opengraphDescription: string;
  opengraphModifiedTime: string;
  opengraphPublishedTime: string;
  opengraphPublisher: string;
  opengraphSiteName: string;
  opengraphTitle: string;
  opengraphType: string;
  opengraphUrl: string;
  readingTime: number;
  title: string;
  twitterDescription: string;
  twitterTitle: string;
}

export type PostType = {
  id: any;
  excerpt: string | null;
  content: string;
  slug: string;
  featuredImage: string;
  title: string;
  featuredImageAlt: string;
  date: string;
  seo: SeoMeta;
};

export async function getPosts(first = 10) {
  try {
    const data = await client(API_URL, {
      method: "POST",
      data: {
        query: `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
            nodes {
            excerpt
            content
            date
            featuredImage {
                node {
                sourceUrl
                altText
                }
            }
            slug
            title
            }
        }
        }`,

        variables: {
          first,
        },
      },
    });

    const output = data?.data?.posts?.nodes;

    return output.map((post: any) => ({
      title: post.title,
      excerpt: getPlainTextFromHTML(post?.excerpt),
      content: post?.content,
      slug: post?.slug,
      featuredImage: post?.featuredImage?.node?.sourceUrl,
      featuredImageAlt: post?.featuredImage?.node?.altText,
      date: formatDate(post?.date),
    }));
  } catch (error) {
    console.log(error);
  }
}

export async function getPostBySlug(slug: string): Promise<PostType | null> {
  try {
    const data = await client(API_URL, {
      method: "POST",
      data: {
        query: `query FetchPostBySlug($slug: String!) {
          postBy(slug: $slug) {
            title
          id
          excerpt
          content
          date
          seo {
            canonical
            cornerstone
            focuskw
            fullHead
            metaDesc
            metaKeywords
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphSiteName
            opengraphTitle
            opengraphType
            opengraphUrl
            readingTime
            title
            twitterDescription
            twitterTitle
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          slug
          }
        }`,
        variables: {
          slug,
        },
      },
    });

    const post = data?.data?.postBy;

    if (!post) {
      return null; // Post not found
    }

    return {
      id: post.id,
      title: post.title,
      excerpt: getPlainTextFromHTML(post?.excerpt),
      content: post?.content,
      slug: post?.slug,
      featuredImage: post?.featuredImage?.node?.sourceUrl,
      featuredImageAlt: post?.featuredImage?.node?.altText,
      date: formatDate(post?.date),
      seo: post?.seo,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return null; // Handle errors as needed
  }
}
