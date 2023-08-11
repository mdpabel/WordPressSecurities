import React from "react";
import SubTitle from "../SubTitle";

const Subscription = () => {
  return (
    <div
      style={{
        background: "#f6f6f6",
      }}
      className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center justify-between p-4 md:p-8 rounded shadow"
    >
      <div className="space-y-2">
        <SubTitle>Quarterly</SubTitle>
        <h3>
          Expires on August 23, 2023 | 39 USD | https://mdpabel.com |
          <span className="text-green-500 font-bold"> Active</span>
        </h3>
      </div>
      <div>
        <button className="bg-gray-600 text-gray-50 px-6 py-2 rounded">
          Manage
        </button>
      </div>
    </div>
  );
};

export default Subscription;
