import { use } from "react";
import prisma from "@/db/mongo";
import { Title } from "../common/Title";
import ComponentWrapper from "../common/ComponentWrapper";
import { SmallCard } from "./SmallCard";
import { getMostViewedPosts } from "@/lib/posts";

const Popular = async () => {
  const data = await getMostViewedPosts(4);

  return (
    <ComponentWrapper>
      <Title>Discover the Hottest Topics on WordPressSecurities</Title>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data?.map((post) => (
          <SmallCard key={post?.id} blog={post!} className="shadow-none " />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Popular;
