"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/common/accordion";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { MainHeaderType } from "./Navbar";
import { Dispatch, SetStateAction, useState } from "react";
import { SubMenuType, navItems } from "@/data/navItems";
import {
  BarIcon,
  CrossIcon,
  SidebarToggleIcon,
} from "@/components/common/icons";
import { useSidebar } from "@/stores/sidebar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const SmallScreenNavbar = ({ solutionsSubmenu, dashboard }: MainHeaderType) => {
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
            <CrossIcon className="w-6 h-6  text-gray-800" />
          ) : (
            <BarIcon className="w-6 h-6 text-gray-800" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="inline-block md:hidden w-screen mt-6">
          {navItems.map((navItem) =>
            navItem.subMenu ? (
              <NavItemWithSubMenu
                link={navItem.link}
                setOpen={setOpen}
                key={navItem.id}
                label={navItem.label}
                components={solutionsSubmenu}
              />
            ) : (
              <NavItem
                label={navItem.label}
                link={navItem.link}
                key={navItem.label}
              />
            )
          )}

          <SignedIn>
            <NavItem label="Dashboard" link="/dashboard" />
          </SignedIn>

          <SignedOut>
            <NavItem label="Login" link="/login" />
          </SignedOut>

          {/* {isLoggedIn ? (
            <NavItem label="Dashboard" link="/dashboard" />
          ) : (
            <NavItem label="Login" link="/login" />
          )} */}

          <NavItem label="Emergency Repair" link="/emergency" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

type NavItemWithSubMenuProps = {
  label: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  components: SubMenuType;
  link: string;
};

const NavItemWithSubMenu = ({
  components,
  label,
  link,
  setOpen,
}: NavItemWithSubMenuProps) => {
  return (
    <Accordion className="border-b-gray-300">
      <AccordionTrigger className="text-lg px-4 py-0 pb-2">
        {label}
      </AccordionTrigger>

      <AccordionContent className="border-b pt-2">
        {components.map((component) => (
          <li
            onClick={() => setOpen(false)}
            key={component.title}
            className="list-none pl-8 border-b border-b-gray-200 py-2"
          >
            <Link
              onClick={() => setOpen(false)}
              href={link + "/" + component.href}
            >
              {component.title}
            </Link>
          </li>
        ))}
      </AccordionContent>
    </Accordion>
  );
};

type NavItemProps = {
  label: string;
  link: string;
};

const NavItem = ({ label, link }: NavItemProps) => {
  return (
    <DropdownMenuItem className="border-b border-gray-300 rounded-none" asChild>
      <Link className="font-normal" href={link}>
        <DropdownMenuLabel className="text-lg font-normal">
          {label}
        </DropdownMenuLabel>
      </Link>
    </DropdownMenuItem>
  );
};

export default SmallScreenNavbar;
