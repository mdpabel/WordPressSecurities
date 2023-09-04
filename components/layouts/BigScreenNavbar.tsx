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
import { MainHeaderType } from "./Navbar";
import { SubMenuType, navItems } from "@/data/navItems";
import { Button } from "../common/Button";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { CaretDownIcon } from "@radix-ui/react-icons";

function BigScreenNavbar({ isLoggedIn }: MainHeaderType) {
  const pathName = usePathname() ?? "/";

  return (
    <NavigationMenu
      className={cn(
        "hidden md:flex items-center justify-between py-4 w-full max-w-full relative"
      )}
    >
      <Logo />

      <NavigationMenuList>
        {navItems.map((navItem) =>
          navItem.subMenu ? (
            <NavItemWithSubMenu
              key={navItem.id}
              label={navItem.label}
              link={navItem.link}
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
  link: string;
  components: SubMenuType;
};

const NavItemWithSubMenu = ({
  components,
  label,
  link,
}: NavItemWithSubMenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-lg">{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {components.map((component) => (
            <ListItem
              className="border-b border-gray-400"
              key={component.title}
              title={component.title}
              href={link + "/" + component.href}
            ></ListItem>
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
        <Link
          href={props.href!}
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
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

export default BigScreenNavbar;
