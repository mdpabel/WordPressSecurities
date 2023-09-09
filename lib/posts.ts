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

export type PostType = {
  excerpt: string;
  content: string;
  slug: string;
  featuredImage: string;
  title: string;
  featuredImageAlt: string;
  date: string;
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

export async function getPostBySlug(slug: string) {
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

    console.log("GraphQL Response:", data);

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
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return null; // Handle errors as needed
  }
}
