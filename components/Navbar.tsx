import React, { useState, useEffect, useRef, use } from "react";
import { BarIcon, CrossIcon } from "@/components/icons";
import Link from "next/link";
import ComponentWrapper from "./ComponentWrapper";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

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

const Navbar = async () => {
  const session = false;

  return (
    <ComponentWrapper className="relative bg_primary">
      <nav className="flex items-center justify-between py-4">
        {/* <Link href='/' className='text-xl font-bold md:text-2xl'>
            WPSecurities.
          </Link> */}
        <Logo />
        <ul className="items-center hidden space-x-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                prefetch
                className={`text-lg font-medium `}
                href={"/" + item.link}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {session ? (
            <li>
              <Link
                prefetch
                className={`text-lg font-medium `}
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link prefetch className={`text-lg font-medium `} href="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </ComponentWrapper>
  );
};

export default Navbar;
