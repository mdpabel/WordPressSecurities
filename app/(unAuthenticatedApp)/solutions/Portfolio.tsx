import { Button } from "@/components/common/Button";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import { RightArrow } from "@/components/common/icons";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div className="space-y-4">
      <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
        Alphabet Inc.
      </span>
      <h3 className="text-2xl font-bold leading-tight text-gray-900 ">
        Official website
      </h3>
      <p className="text-lg font-normal text-gray-500">
        Flowbite helps you connect with friends, family and communities of
        people who share your interests.
      </p>
      <Button
        className="border border-gray-500"
        variant="outline"
        role="button"
      >
        <Link className="flex space-x-3" href="/">
          <span>View case study</span>
          <RightArrow />
        </Link>
      </Button>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="bg-white  antialiased">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-6 ">
        <SectionTitleWithSubTitle
          subTitle=" Crafted with skill and care to help our clients grow their business!"
          title="Our Recent work"
        />

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <Work />
          <Work />
          <Work />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
