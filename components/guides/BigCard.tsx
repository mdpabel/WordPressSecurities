import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/common/Card";
import { parseContentFulImage } from "@/lib/contentful";
import { cn } from "@/lib/utils";
import { PostType } from "@/lib/posts";

export type PostCardType = {
  blog: PostType;
  className?: string;
};

export const BigCard = ({ blog, className }: PostCardType) => {
  return (
    <Link href={"/guides/" + blog?.slug}>
      <Card className={cn("h-[350px]", className)}>
        <CardContent className="row-span-3">
          <Image
            width={400}
            height={400}
            className="object-cover object-center w-full h-full"
            src={blog?.featuredImage}
            alt={blog?.featuredImageAlt}
          />
        </CardContent>
        <CardFooter className="flex flex-col justify-between space-y-4 h-1/2 items-start">
          <div className="space-y-1">
            <span className="font-medium text-gray-700">{blog?.date}</span>
            <h2 className="text-lg font-semibold tracking-wide">
              {blog?.title?.slice(0, 45)}{" "}
              {blog?.title?.length > 45 ? "..." : ""}
            </h2>
            <p className="text-sm tracking-wide">
              {blog?.excerpt?.slice(0, 100)}
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
