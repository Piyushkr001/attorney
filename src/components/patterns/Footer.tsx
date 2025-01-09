// import Link from "next/link";
import React from "react";
import { Icon, IconName } from "../ui/icon";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

// Define interfaces for the navigation items and footer props
interface SubItem {
  title: string;
  href: string;
  icon?: IconName; // Optional icon
}

interface NavigationItem {
  title: string;
  description?: string;
  items?: SubItem[];
}

export interface FooterProps {
  title: string;
  description: string;
  navigationItems: NavigationItem[];
}

// Generic Footer component
export const Footer: React.FC<FooterProps> = ({
  title,
  description,
  navigationItems,
}) => {
  const t = useTranslations("Footer")
  return (
    <div className="w-full bg-gradient-to-br from-blue-500 to-indigo-900 text-background">
      <div className="px-4 py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-20 items-center">
            <div className="flex gap-8 flex-col col-span-2 items-start">
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                  {title}
                </h2>
                <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                  {description}
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 col-span-3 gap-10 items-start">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="flex text-base gap-1 flex-col items-start"
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xl">{item.title}</p>
                    {item.description && (
                      <p className="text-background/75 text-base">
                        {item.description}
                      </p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="group flex items-center gap-2 transition-all ease-in-out"
                        >
                          {subItem.icon && (
                            <Icon
                              {...subItem.icon}
                              className="w-4 h-4 text-background/75 group-hover:text-white"
                            />
                          )}{" "}
                          {/* Render the icon if available */}
                          <span className="text-background/75 group-hover:text-white">
                            {subItem.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/35 mt-auto px-4 py-2">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="text-background/75">
              {t("Copyright")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
