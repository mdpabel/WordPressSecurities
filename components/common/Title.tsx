import { ReactNode } from "react";
import Image from "next/image";

export const TitleWithBottomBorder = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`relative` + className}>
    <h2 className="z-10 inline-block py-2 font-semibold text-2xl">
      {children}
    </h2>
    <div className="w-full h-[2px] bg-gray-500 absolute bottom-0"></div>
  </div>
);

export const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-2xl font-semibold">{children}</h1>;
};

export const SubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-2xl font-semibold flex space-x-2 items-center">
      <span>{children}</span>{" "}
      <Image width={50} height={50} src="/rocket.gif" alt="Rocket" />
    </h2>
  );
};

interface IPricingTableTitle {
  title: string;
  subTitle: string;
}

export const SectionTitleWithSubTitle = ({
  title,
  subTitle,
}: IPricingTableTitle) => {
  return (
    <div className="mx-auto max-w-screen-md text-center">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
        {title}
      </h2>
      <p className="mb-5 font-light text-gray-600 sm:text-xl ">{subTitle}</p>
    </div>
  );
};
