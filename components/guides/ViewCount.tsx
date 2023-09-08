"use client";
import { useState, useEffect } from "react";
import { useAsync } from "@/hooks/useAsync";
import { client } from "@/lib/client";

const ViewCount = ({ id }: { id: string }) => {
  const { isLoading, isError, isSuccess, data, error, run } = useAsync();

  const api = "/api/post/" + id;

  useEffect(() => {
    client(api, {
      method: "POST",
      data: {
        postId: id,
      },
    });
  }, [api]);

  useEffect(() => {
    run(client(api));
  }, [api, run]);

  return (
    <div className="px-5 py-1 font-semibold border rounded shadow-sm">
      {isLoading && "Loading..."}
      {isSuccess && data?.data + " Views"}
      {isError && "Error"}
    </div>
  );
};

export default ViewCount;
