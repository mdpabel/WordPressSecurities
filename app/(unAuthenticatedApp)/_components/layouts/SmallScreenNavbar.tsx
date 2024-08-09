'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from '@/components/accordion';
import Logo from './Logo';
import Link from 'next/link';
import { MainHeaderType } from './Navbar';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { navItems, SubMenu } from '@/data/navItems';
import { BarIcon, CrossIcon, SidebarToggleIcon } from '@/components/icons';
import { useSidebar } from '@/zustand/sidebar';
import { SignedIn, SignedOut } from '@clerk/nextjs';

const SmallScreenNavbar = ({ dashboard }: MainHeaderType) => {
  const [open, setOpen] = useState(false);
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <div className='flex justify-between items-center md:hidden py-4 w-full max-w-full'>
      <div className='flex space-x-4'>
        {dashboard && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            data-drawer-target='logo-sidebar'
            data-drawer-toggle='logo-sidebar'
            aria-controls='logo-sidebar'
            className='inline-flex items-center md:hidden hover:bg-gray-100 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 text-black text-sm cursor-pointer focus:outline-none'>
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
        }}>
        <DropdownMenuTrigger>
          {open ? (
            <CrossIcon className='w-6 h-6 text-gray-800' />
          ) : (
            <BarIcon className='w-6 h-6 text-gray-800' />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='inline-block md:hidden mt-6 w-screen'>
          {navItems.map((navItem) =>
            navItem.subMenu ? (
              <NavItemWithSubMenu
                link={navItem.link}
                setOpen={setOpen}
                key={navItem.id}
                label={navItem.label}
                components={navItem.subMenu}
              />
            ) : (
              <NavItem
                label={navItem.label}
                link={navItem.link}
                key={navItem.label}
              />
            ),
          )}

          <SignedIn>
            <NavItem label='Dashboard' link='/dashboard' />
          </SignedIn>

          <SignedOut>
            <NavItem label='Get Started' link='/login' />
          </SignedOut>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

type NavItemWithSubMenuProps = {
  label: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  components: SubMenu;
  link: string;
};

const NavItemWithSubMenu = ({
  components,
  label,
  link,
  setOpen,
}: NavItemWithSubMenuProps) => {
  return (
    <Accordion className='border-b-gray-300'>
      <AccordionTrigger className='px-4 py-0 pb-2 text-lg'>
        {label}
      </AccordionTrigger>

      <AccordionContent className='pt-2 border-b'>
        {components.map((component) => (
          <li
            onClick={() => {
              setOpen(false);
            }}
            key={component.title}
            className='py-2 pl-8 border-b border-b-gray-200 list-none'>
            <Link href={link + '/' + component.href}>{component.title}</Link>
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
    <DropdownMenuItem className='border-gray-300 border-b rounded-none' asChild>
      <Link className='font-normal' href={link}>
        <DropdownMenuLabel className='font-normal text-lg'>
          {label}
        </DropdownMenuLabel>
      </Link>
    </DropdownMenuItem>
  );
};

export default SmallScreenNavbar;
