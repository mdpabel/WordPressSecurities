'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/navigation-menu';
import { MainHeaderType } from './Navbar';
import { SubMenu, navItems } from '@/data/navItems';
import { Button } from '../../../../components/Button';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut } from '@clerk/nextjs';

function BigScreenNavbar({ solutionsSubmenu }: MainHeaderType) {
  const pathName = usePathname() ?? '/';

  console.log(pathName);

  return (
    <NavigationMenu
      className={cn(
        'hidden md:flex items-center justify-between py-4 w-full max-w-full relative',
      )}>
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
          ),
        )}
      </NavigationMenuList>

      <SignedIn>
        <Button variant='outline' className='border border-black'>
          <Link href='/dashboard'>Dashboard</Link>
        </Button>
      </SignedIn>

      <SignedOut>
        <Button variant='outline' className='border border-black'>
          <Link href='/login'>Get Started</Link>
        </Button>
      </SignedOut>
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
            'text-lg',
            isActive && 'border border-gray-700 py-1 px-3 rounded',
          )}>
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

type NavItemWithSubMenuProps = {
  label: string;
  link: string;
  components: SubMenu;
};

const NavItemWithSubMenu = ({
  components,
  label,
  link,
}: NavItemWithSubMenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className='text-lg'>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]'>
          {components?.map((component) => (
            <ListItem
              className='border-gray-400 border-b'
              key={component.title}
              title={component.title}
              href={link + component.href}
            />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          prefetch={true}
          href={props.href!}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}>
          <div className='font-medium text-sm leading-none'>{title}</div>
          <p className='line-clamp-2 text-muted-foreground text-sm leading-snug'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

export default BigScreenNavbar;
