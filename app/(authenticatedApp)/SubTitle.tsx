import { ReactNode } from "react";

const SubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-2xl font-semibold flex space-x-2 items-center">
      <span>Quarterly</span> <img src="/rocket.gif" />
    </h2>
  );
};

export default SubTitle;
