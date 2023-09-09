"use client";
import React, { FormEvent } from "react";
import { EmailIcon } from "@/components/common/icons";

const Newsletter = () => {
  const handleNewsletterSubmission = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center space-y-4">
      <h2 className="text-4xl">Subscribe to our newsletter</h2>
      <p className="text-sm font-medium text-gray-700 leading-wide">
        Do you want to get notified when a new security post is added to
        wordpresssecurities? Sign up for our newsletter and you&apos;ll be among
        the first to find out about new security news, tips and tricks.
      </p>

      <form onSubmit={handleNewsletterSubmission} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <EmailIcon />
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
            placeholder="contact@wordpresssecurities.com"
          />
        </div>
        <button
          className="px-10 py-2 text-white bg-black rounded"
          type="submit"
        >
          Subscribe
        </button>
      </form>

      <p className="text-sm font-medium text-gray-700 ">
        By subscribing, you agree with wordpresssecurities&apos;s Terms of
        Service and Privacy Policy.
      </p>
    </div>
  );
};

export default Newsletter;
