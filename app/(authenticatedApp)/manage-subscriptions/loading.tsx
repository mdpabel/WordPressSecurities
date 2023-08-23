import React from "react";
import Title from "../Title";
import { Card } from "@/components/common/Card";

const Skeleton = () => {
  return (
    <Card className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center justify-between p-4 md:p-8 rounded shadow animate-pulse">
      <div className="space-y-2">
        <div className="bg-gray-300 h-6 w-32 animate-pulse rounded"></div>
        <div className="bg-gray-300 h-4 w-40 animate-pulse rounded"></div>
      </div>
      <div className="space-x-4 flex">
        <div className="bg-gray-300 h-7 w-24 animate-pulse rounded"></div>
        <div className="bg-gray-300 h-7 w-24 animate-pulse rounded"></div>
      </div>
    </Card>
  );
};

const loading = () => {
  return (
    <div className="space-y-4">
      <Title>Manage Subscription</Title>
      <div className="space-y-6">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

export default loading;
