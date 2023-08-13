import React from "react";

const TableSkeleton = () => {
  return (
    <div
      style={{
        background: "#f6f6f6",
      }}
      className="relative overflow-x-auto shadow-md sm:rounded-lg"
    >
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs  ">
          <tr>
            <th scope="col" className="px-6 py-3 animate-pulse">
              Process
            </th>
            <th scope="col" className="px-6 py-3 animate-pulse">
              createdAt
            </th>
            <th scope="col" className="px-6 py-3 animate-pulse">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 animate-pulse">
              Fee
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4 animate-pulse">Placeholder</td>
              <td className="px-6 py-4 animate-pulse">Placeholder</td>
              <td className="px-6 py-4 animate-pulse">Placeholder</td>
              <td className="px-6 py-4 animate-pulse">Placeholder</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
