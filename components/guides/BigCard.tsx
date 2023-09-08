import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/common/Card";
import { parseContentFulImage } from "@/lib/contentful";
import { cn } from "@/lib/utils";
import { BigCardType } from "../../app/(unAuthenticatedApp)/guides/page";

export const BigCard = ({ blog, className }: BigCardType) => {
  const image = parseContentFulImage(blog.coverImage);

  return (
    <Link href={"/guides/" + blog?.slug}>
      <Card className={cn("h-[350px]", className)}>
        <CardContent className="row-span-3">
          <Image
            width={image?.width ?? 400}
            height={image?.height ?? 400}
            className="object-cover object-center w-full h-full"
            src={image?.src ?? ""}
            alt={image?.alt ?? "Image missing"}
          />
        </CardContent>
        <CardFooter className="flex flex-col justify-between space-y-4 h-1/2">
          <div className="space-y-1">
            <span className="font-medium text-gray-700">11 December 2022</span>
            <h2 className="text-lg font-semibold tracking-wide">
              {blog?.title?.slice(0, 45)}{" "}
              {blog?.title?.length > 45 ? "..." : ""}
            </h2>
            <p className="text-sm tracking-wide">
              {blog?.previewDescription?.slice(0, 100)}
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
