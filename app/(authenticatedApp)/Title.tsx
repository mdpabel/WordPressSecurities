import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-2xl font-semibold">{children}</h1>;
};

export default Title;
