"use client";
import React, { useState, useEffect, useRef, use } from "react";
import {
  BarIcon,
  CrossIcon,
  SidebarToggleIcon,
} from "@/components/common/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

import { useAsync } from "@/hooks/useAsync";
import { useUser } from "@/stores/user";
import { useSidebar } from "@/stores/sidebar";
import { navItems } from "@/data/navItems";
import ComponentWrapper from "../common/ComponentWrapper";
import { Button } from "../common/Button";

const Navbar = ({
  dashboard = false,
  isLoggedIn,
}: {
  dashboard?: boolean;
  isLoggedIn: boolean;
}) => {
  const pathName = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const { isOpen, setIsOpen } = useSidebar();

  useEffect(() => {
    const event = (e: any) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", event, true);

    return () => document.removeEventListener("click", event, true);
  }, []);

  return (
    <div className="relative bg_primary">
      <ComponentWrapper>
        <nav ref={ref} className="flex items-center justify-between py-4">
          <div className="flex">
            {dashboard && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <SidebarToggleIcon />
              </button>
            )}
            <div onClick={() => setOpen(false)}>
              <Logo />
            </div>
          </div>
          <ul className="items-center hidden space-x-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  prefetch
                  className={`text-lg font-medium ${
                    "/" + item.link === pathName
                      ? "border border-gray-700 py-1 px-3 rounded"
                      : ""
                  }`}
                  href={"/" + item.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {isLoggedIn ? (
              <li>
                <Link
                  prefetch
                  className={`text-lg font-medium ${
                    "/dashboard" === pathName
                      ? "border border-gray-700 py-1 px-3 rounded"
                      : ""
                  }`}
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  prefetch
                  className={`text-lg font-medium ${
                    "/login" === pathName
                      ? "border border-gray-700 py-1 px-3 rounded"
                      : ""
                  }`}
                  href="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

          <Button
            variant="outline"
            className="hidden lg:flex md:px-8 py-1 md:py-1 border border-black"
          >
            <Link href="/emergency">Emergency Repair</Link>
          </Button>

          <button
            className="block lg:hidden"
            onClick={() => setOpen(!open)}
            type="button"
          >
            {open ? (
              <CrossIcon className="w-6 h-6 font-bold text-gray-800" />
            ) : (
              <div>
                <BarIcon className="w-6 h-6 font-bold text-gray-800" />
              </div>
            )}
          </button>
        </nav>
        <div
          style={{
            display: open ? "block" : "none",
          }}
          className="block w-full md:hidden shadow"
        >
          <ul className="md:w-[90%] mx-auto pb-5 lg:px-0 absolute right-0 z-50 flex flex-col w-full px-4 mt-4 bg-gray-100 rounded-lg lg:hidden top-10">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setOpen(false)}
                className="border-b"
              >
                <Link
                  prefetch
                  href={"/" + item.link}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 "
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {isLoggedIn ? (
              <li onClick={() => setOpen(false)} className="border-b">
                <Link
                  prefetch
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 "
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              <li onClick={() => setOpen(false)} className="border-b">
                <Link
                  prefetch
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 "
                  href="/login"
                >
                  Login
                </Link>
              </li>
            )}

            <li onClick={() => setOpen(false)} className="border-b">
              <Link
                prefetch
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 "
                href="/emergency"
              >
                Emergency Repair
              </Link>
            </li>
          </ul>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Navbar;
