import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/common/Card";
import { cn } from "@/lib/utils";
import { PostCardType } from "./BigCard";

export const SmallCard = ({ blog, className }: PostCardType) => {
  return (
    <Link href={"/guides/" + blog?.slug}>
      <Card className={cn("h-[165px] flex grid-cols-5", className)}>
        <CardContent className="row-span-3 col-span-2 p-2">
          <Image
            width={400}
            height={400}
            className="object-cover object-center w-full h-full"
            src={blog?.featuredImage}
            alt={blog?.featuredImageAlt}
          />
        </CardContent>
        <CardFooter className="w-3/5 space-y-3 p-2">
          <div>
            <span className="text-sm font-medium text-gray-700">
              {blog?.date}
            </span>
            <h2 className={`text-sm font-medium `}>
              {blog?.title?.slice(0, 50)}{" "}
              {blog?.title?.length > 50 ? "..." : ""}
            </h2>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
