"use client";
import { useTab } from "@/stores/tabs";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useTransition } from "react";

interface ITab {
  handleClick: (type: string) => void;
  search: string;
  label: string;
  type: string;
  tabClassName: string;
}

const Tab = ({ handleClick, search, label, type, tabClassName }: ITab) => {
  return (
    <li
      onClick={() => handleClick(type)}
      className={`cursor-pointer ${
        search === type ? "font-bold" : ""
      } ${tabClassName}`}
    >
      {label}
    </li>
  );
};

interface Tabs {
  id: number;
  label: string;
  type: string;
}

interface ITabs {
  tabs: Tabs[];
  className?: string;
  tabClassName?: string;
}

const Tabs = ({ tabs, className = "", tabClassName = "" }: ITabs) => {
  const pathName = usePathname();
  const { active, setActive } = useTab();
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("type")?.trim() ?? "subscription";

  const handleClick = (type: string) => {
    setActive(type);

    startTransition(() => {
      router.push(`${pathName}/?type=${type}`, {
        scroll: false,
      });
    });
  };

  return (
    <ul className={`bg_primary shadow-sm ${className}`}>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          handleClick={handleClick}
          search={search}
          label={tab.label}
          tabClassName={tabClassName}
          type={tab.type}
        />
      ))}
    </ul>
  );
};

export default Tabs;
