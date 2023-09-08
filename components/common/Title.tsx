import { HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type AttributeType = HTMLAttributes<HTMLElement>;

type AttributesWithChildren = AttributeType & {
  children: ReactNode;
};

export const TitleWithBottomBorder = ({
  children,
  className,
}: AttributesWithChildren) => (
  <div className={cn("relative", className)}>
    <h2 className="z-10 inline-block py-2 font-semibold text-2xl">
      {children}
    </h2>
    <div className="w-full h-[2px] bg-gray-500 absolute bottom-0"></div>
  </div>
);

export const Title = ({ children, className }: AttributesWithChildren) => {
  return (
    <h1 className={cn("text-2xl font-semibold", className)}>{children}</h1>
  );
};

export const SubTitle = ({ children, className }: AttributesWithChildren) => {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold flex space-x-2 items-center",
        className
      )}
    >
      <span>{children}</span>{" "}
      <Image width={50} height={50} src="/rocket.gif" alt="Rocket" />
    </h2>
  );
};

type IPricingTableTitle = AttributeType & {
  title: string;
  subTitle: string;
};

export const SectionTitleWithSubTitle = ({
  title,
  subTitle,
  className,
}: IPricingTableTitle) => {
  return (
    <div className={cn("mx-auto max-w-screen-md text-center", className)}>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
        {title}
      </h2>
      <p className="mb-5 font-light text-gray-600 sm:text-xl ">{subTitle}</p>
    </div>
  );
};
