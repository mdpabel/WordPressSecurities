"use client";
import { useEffect, useRef } from "react";
import {
  BookIcon,
  DashBoardIcon,
  LogoutIcon,
  SubScriptionIcon,
  SupportInboxIcon,
  UserIcon,
} from "./icons";
import Link from "next/link";
import { useSidebar } from "@/stores/sidebar";
import { clsx } from "clsx";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useAsync } from "@/hooks/useAsync";
import Spinner from "./Spinner";
import { redirect } from "next/navigation";

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

const sidebarItems = [
  {
    id: 1,
    Icon: DashBoardIcon,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    Icon: SubScriptionIcon,
    label: "Manage Subscriptions",
    link: "/manage-subscriptions",
  },

  {
    id: 4,
    Icon: BookIcon,
    label: "Security Reports",
    link: "/security-reports",
  },
  {
    id: 5,
    Icon: SupportInboxIcon,
    label: "Customer Support",
    link: "/customer-support",
  },

  {
    id: 6,
    Icon: UserIcon,
    label: "Manage Account",
    link: "/manage-account",
  },
];

const Sidebar = () => {
  const { isLoading, run, isError, isSuccess } = useAsync();
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
  }, []);

  // LOGOUT
  const handleLogout = () => {
    const supabase = createClientComponentClient<Database>();

    run(supabase.auth.signOut());
  };

  useEffect(() => {
    if (isSuccess) {
      redirect("/login");
    }
  }, [isSuccess]);

  return (
    <aside
      ref={ref}
      id="logo-sidebar"
      className={clsx({
        "left-0 z-40 w-64 h-screen pt-10 transition-transform  bg_primary border-r border-gray-400 sm:translate-x-0 ":
          true,
        "-translate-x-full": !isOpen,
      })}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg_primary">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map(({ Icon, id, label, link }) => (
            <SideBarItem key={id} Icon={Icon} label={label} link={link} />
          ))}
        </ul>

        <div className="pt-10">
          <li className="p-2 border-t border-t-gray-600 list-none">
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-900 hover:bg-gray-100 "
            >
              <LogoutIcon />
              <span className="ml-3 flex space-x-2">
                Logout {isLoading && <Spinner />}
              </span>
            </button>
          </li>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
