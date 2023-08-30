"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import * as NavigationMenuRedix from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/common/navigation-menu";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { MainHeaderType } from "./Navbar";
import { navItems } from "@/data/navItems";
import { Button } from "../common/Button";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { CaretDownIcon } from "@radix-ui/react-icons";

function BigScreenNavbar({ isLoggedIn }: MainHeaderType) {
  const pathName = usePathname() ?? "/";

  return (
    <NavigationMenu className="hidden md:flex items-center justify-between py-4 w-full max-w-full">
      <Logo />

      <NavigationMenuList>
        {navItems.map((navItem) =>
          navItem.subMenu ? (
            <NavItemWithSubMenu
              key={navItem.id}
              label={navItem.label}
              components={navItem.subMenu}
            />
          ) : (
            <NavItem
              pathName={pathName}
              label={navItem.label}
              link={navItem.link}
              key={navItem.label}
            />
          )
        )}

        {isLoggedIn ? (
          <NavItem pathName={pathName} label="Dashboard" link="/dashboard" />
        ) : (
          <NavItem pathName={pathName} label="Login" link="/login" />
        )}
      </NavigationMenuList>

      <Button variant="outline" className="border border-black">
        <Link href="/emergency">Emergency Repair</Link>
      </Button>
    </NavigationMenu>
  );
}

type NavItemProps = {
  label: string;
  link: string;
  pathName: string;
};

const NavItem = ({ label, link, pathName }: NavItemProps) => {
  const isActive = pathName == link;

  return (
    <NavigationMenuItem>
      <Link href={link} legacyBehavior passHref>
        <NavigationMenuLink
          href={link}
          className={cn(
            navigationMenuTriggerStyle(),
            "text-lg",
            isActive && "border border-gray-700 py-1 px-3 rounded"
          )}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

type NavItemWithSubMenuProps = {
  label: string;
  components: {
    title: string;
    href: string;
    description: string;
  }[];
};

const NavItemWithSubMenu = ({ components, label }: NavItemWithSubMenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
        Components
      </NavigationMenuTrigger>
      <NavigationMenuContent className="absolute top-0 left-0 w-full sm:w-auto">
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

export default BigScreenNavbar;
