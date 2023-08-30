"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { MainHeaderType } from "./Navbar";
import { useState } from "react";
import { navItems } from "@/data/navItems";
import {
  BarIcon,
  CrossIcon,
  SidebarToggleIcon,
} from "@/components/common/icons";
import { useSidebar } from "@/stores/sidebar";
import { Button } from "../common/Button";
import { usePathname } from "next/navigation";

const SmallScreenNavbar = ({ isLoggedIn, dashboard }: MainHeaderType) => {
  const [open, setOpen] = useState(false);
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <div className="flex md:hidden items-center justify-between py-4 w-full max-w-full">
      <div className="flex space-x-4">
        {dashboard && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            className="inline-flex cursor-pointer items-center p-2 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <SidebarToggleIcon />
          </div>
        )}
        <div onClick={() => setOpen(false)}>
          <Logo />
        </div>
      </div>

      <DropdownMenu
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <DropdownMenuTrigger>
          {open ? (
            <CrossIcon className="w-6 h-6 font-bold text-gray-800" />
          ) : (
            <BarIcon className="w-6 h-6 font-bold text-gray-800" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="inline-block md:hidden w-screen mt-6">
          {navItems.map((navItem) =>
            navItem.subMenu ? null : (
              <NavItem
                label={navItem.label}
                link={navItem.link}
                key={navItem.label}
              />
            )
          )}

          {isLoggedIn ? (
            <NavItem label="Dashboard" link="/dashboard" />
          ) : (
            <NavItem label="Login" link="/login" />
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

type NavItemProps = {
  label: string;
  link: string;
};

const NavItem = ({ label, link }: NavItemProps) => {
  return (
    <DropdownMenuItem className="border-b border-gray-300 rounded-none" asChild>
      <Link href={link}>
        <DropdownMenuLabel className="text-lg">{label}</DropdownMenuLabel>
      </Link>
    </DropdownMenuItem>
  );
};

export default SmallScreenNavbar;
