import Link from "next/link";
import React from "react";
import ComponentWrapper from "../common/ComponentWrapper";

const TopBar = () => {
  return (
    <div className="py-2 text-white bg-black">
      <ComponentWrapper>
        <div className="flex justify-between text-sm font-semibold">
          <div>Discover how to protect your WordPress site from threats</div>
          <nav className="hidden md:block">
            <ul className="flex justify-between space-x-6">
              <li>
                <Link prefetch={false} href="/faq">
                  FAQ
                </Link>
              </li>

              <li>
                <Link prefetch={false} href="/privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default TopBar;
