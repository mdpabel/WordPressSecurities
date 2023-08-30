import { SectionTitleWithSubTitle } from "@/components/common/Title";
import { RightArrow } from "@/components/common/icons";
import React from "react";

const Work = () => {
  return (
    <div className="space-y-4">
      <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        Alphabet Inc.
      </span>
      <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        Official website
      </h3>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        Flowbite helps you connect with friends, family and communities of
        people who share your interests.
      </p>
      <a
        href="#"
        title=""
        className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        role="button"
      >
        View case study
        <RightArrow />
      </a>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
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
