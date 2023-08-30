"use client";
import { useEffect, useRef, useState } from "react";
import { useClerk } from "@clerk/clerk-react";
import {
  BookIcon,
  DashBoardIcon,
  LogoutIcon,
  SubScriptionIcon,
  SupportInboxIcon,
  UserIcon,
} from "../common/icons";
import Link from "next/link";
import { useSidebar } from "@/stores/sidebar";
import { clsx } from "clsx";
import { useAsync } from "@/hooks/useAsync";
import Spinner from "../common/Spinner";
import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

const SideBarItem = ({
  Icon,
  label,
  link,
}: {
  Icon: () => JSX.Element;
  label: string;
  link: string;
}) => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <li>
      <Link href={link}>
        <div
          onClick={() => setIsOpen(false)}
          className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
        >
          <Icon />
          <span className="ml-3">{label}</span>
        </div>
      </Link>
    </li>
  );
};

interface ISidebar {
  sidebarItems: {
    id: number;
    Icon: () => JSX.Element;
    label: string;
    link: string;
  }[];
}

const Sidebar = ({ sidebarItems }: ISidebar) => {
  const { signOut } = useClerk();
  const [loading, setLoading] = useState(false);
  const { isOpen, setIsOpen } = useSidebar();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const event = (e: any) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", event, true);

    return () => document.removeEventListener("click", event, true);
  }, [setIsOpen]);

  return (
    <aside
      ref={ref}
      id="logo-sidebar"
      className={clsx({
        "left-0 z-40 w-64 h-screen pt-10 transition-transform border-r border-gray-400 md:translate-x-0 bg-white":
          true,
        "-translate-x-full": !isOpen,
      })}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg_primary">
        <ul className="space-y-2 font-medium">
          {sidebarItems?.map(({ Icon, id, label, link }) => (
            <SideBarItem key={id} Icon={Icon} label={label} link={link} />
          ))}
        </ul>

        <div className="pt-10">
          <li className="p-2 border-t border-t-gray-600 list-none">
            <button
              onClick={async () => {
                setLoading(true);
                await signOut();
                setLoading(false);
              }}
              className="flex items-center text-gray-900 hover:bg-gray-100 "
            >
              <LogoutIcon />
              <span className="ml-3 flex space-x-2">
                {loading ? <Spinner /> : "Logout"}
              </span>
            </button>
          </li>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
