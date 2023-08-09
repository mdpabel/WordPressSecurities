"use client";
import React, { useState, useEffect, useRef, use } from "react";
import { BarIcon, CrossIcon } from "@/components/icons";
import Link from "next/link";
import ComponentWrapper from "./ComponentWrapper";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useAsync } from "@/hooks/useAsync";
import { useUser } from "@/stores/user";

const navItems = [
  {
    id: 0,
    label: "Home",
    link: "",
  },
  {
    id: 1,
    label: "Pricing",
    link: "pricing",
  },
  {
    id: 2,
    label: "About",
    link: "about",
  },
  {
    id: 3,
    label: "Blog",
    link: "blog",
  },
  {
    id: 4,
    label: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const { isLoggedIn } = useUser();
  const pathName = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

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
    <ComponentWrapper className="relative bg_primary">
      <nav ref={ref} className="flex items-center justify-between py-4">
        {/* <Link href='/' className='text-xl font-bold md:text-2xl'>
            WPSecurities.
          </Link> */}
        <Logo />
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
          type="link"
          outline={true}
          href="/emergency"
          className="flex md:px-8 py-1 md:py-1"
        >
          Emergency Repair
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
        <ul className="md:w-[90%] mx-auto  lg:px-0 absolute right-0 z-50 flex flex-col w-full px-4 mt-4 bg-gray-100 rounded-lg lg:hidden top-10">
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
        </ul>
      </div>
    </ComponentWrapper>
  );
};

export default Navbar;
