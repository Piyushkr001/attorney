"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StickyNavbar from "./StickyNavbar";

import { Link as AppLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import { Icon } from "../ui/icon";
import LocaleSwitcher from "./locale/LocaleSwitcher";
// import StickyNavbar from "react-sticky-navbar";

export const Navbar = () => {
  const t = useTranslations("Navbar");

  const navigationItems = [
    { title: t("Home"), href: "/" },
    // { title: "Knowledge", href: "/knowledge" },
    { title: t("About"), href: "/about" },
    { title: t("Services"), href: "/services" },
    { title: t("Contact"), href: "/contacts" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="container mx-auto ">
      <StickyNavbar
        classNames={{
          scrollTop: "top-8 relative",
          // scrollMiddle: "!px-0",
          // scrollBottom: "!px-0",
        }}
        zIndex={100}
      >
        {/* <header className="w-full z-40 fixed top-0 left-0 bg-white shadow-md"> */}
        <div className="w-full z-40 sticky top-0 bg-gradient-to-br from-slate-100 to-zinc-400 shadow-md rounded-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-2">
            {/* Logo */}
            <div className="flex items-center">
              <Link href={"/"}>
                <Image
                  src="/images/logos/Mediciio_Logo.png"
                  alt="Mediciio Desktop Logo"
                  className="hidden lg:block  mr-2"
                  width={"59"}
                  height={"59"}
                />
                {/* Mobile Logo */}
                <Image
                  src="/images/logos/Mediciio_Logo.png"
                  alt="Mediciio Mobile Logo"
                  className="block lg:hidden min-h-8 mr-2"
                  width="60"
                  height="60"
                />
              </Link>
              {/* <span className="text-lg font-bold text-red-500">Care</span>
          <span className="text-lg font-bold text-gray-800">Medico</span> */}
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex space-x-6">
              {navigationItems.map((item) => (
                <AppLink
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-[700]"
                >
                  {item.title}
                </AppLink>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="hidden lg:flex space-x-4 items-center">
              <LocaleSwitcher />
              <Link
                href="https://www.facebook.com"
                target="_blank"
              >
                <Icon
                  provider="lucide"
                  name="Facebook"
                  className="w-5 h-5 text-gray-900 hover:text-gray-800"
                />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
              >
                <Icon
                  provider="lucide"
                  name="Instagram"
                  className="w-5 h-5 text-gray-900 hover:text-gray-800"
                />
              </Link>
              <Button variant="outline" asChild>
                <Link href="/en/login">Login</Link>
              </Button>
              <Button variant="default" asChild>
                <Link href="/en/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                {isOpen ? (
                  <X className="!w-6 !h-6" />
                ) : (
                  <MenuIcon className="!w-6 !h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full p-4">
              {navigationItems.map((item) => (
                <AppLink
                  key={item.title}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                >
                  {item.title}
                </AppLink>
              ))}
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <Icon
                    provider="lucide"
                    name="Facebook"
                    className="w-5 h-5 text-gray-900 hover:text-gray-800"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <Icon
                    provider="lucide"
                    name="Instagram"
                    className="w-5 h-5 text-gray-900 hover:text-gray-800"
                  />
                </Link>
              </div>
              <div className="flex flex-col mt-4 space-y-2">
                <Button variant="outline" asChild>
                  <Link href="/en/login">Login</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href="/en/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </StickyNavbar>
    </header>
  );
};
