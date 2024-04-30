import React from "react";

const SkeletonManageAccount = () => {
  return (
    <div className="p-4 md:p-8 rounded shadow animate-pulse">
      <div className="mb-6 bg-gray-300 h-6 w-1/4 rounded"></div>

      <div className="space-y-8">
        <div className="mb-6">
          <h2 className="bg-gray-300 h-6 w-1/4 rounded"></h2>
          <div className="space-y-4 mt-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-gray-300 h-8 w-8 rounded"></div>
                <div className="flex-1 bg-gray-300 h-4 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="bg-gray-300 h-6 w-1/4 rounded"></h2>
          <div className="space-y-4 mt-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-gray-300 h-8 w-8 rounded"></div>
                <div className="flex-1 bg-gray-300 h-4 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="bg-gray-300 h-6 w-1/4 rounded"></h2>
          <div className="space-y-4 mt-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-gray-300 h-8 w-8 rounded"></div>
                <div className="flex-1 bg-gray-300 h-4 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="bg-gray-300 h-6 w-1/4 rounded"></h2>
          <div className="space-y-4 mt-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-gray-300 h-8 w-8 rounded"></div>
                <div className="flex-1 bg-gray-300 h-4 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonManageAccount;
