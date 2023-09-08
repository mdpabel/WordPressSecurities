import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/common/Card";
import { parseContentFulImage } from "@/lib/contentful";
import { cn } from "@/lib/utils";
import { BigCardType } from "@/app/(unAuthenticatedApp)/guides/page";

export const SmallCard = ({ blog, className }: BigCardType) => {
  const image = parseContentFulImage(blog?.coverImage);

  return (
    <Link href={"/guides/" + blog?.slug}>
      <Card className={cn("h-[165px] flex grid-cols-5", className)}>
        <CardContent className="row-span-3 col-span-2 p-2">
          <Image
            width={image?.width ?? 400}
            height={image?.height ?? 400}
            className="object-cover object-center w-full h-full"
            src={image?.src ?? ""}
            alt={image?.alt ?? "Image missing"}
          />
        </CardContent>
        <CardFooter className="w-3/5 space-y-3 p-2">
          <div>
            <span className="text-sm font-medium text-gray-700">
              11 December 2022
            </span>
            <h2 className={`text-sm font-medium `}>
              {blog?.title?.slice(0, 50)}{" "}
              {blog?.title?.length > 50 ? "..." : ""}
            </h2>
            {/* <p className="hidden md:block text-sm tracking-wide">
              {blog?.previewDescription?.slice(0, 50)}...
            </p> */}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
