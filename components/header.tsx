"use client";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import { Input } from "@heroui/input";
import { Logo, SearchIcon } from "./icons";
import { Icon } from "@/config/icons/icons";
import { usePathname } from "next/navigation";
import MenuMobile from "./drawer";

export default function Header() {
  const pathName = usePathname();
  const removeSlash = pathName.slice(1);
  const searchInput = (
    <Input
      aria-label="Search"
      defaultValue="دنبال محصول خاصی میگردی؟"
      variant="underlined"
      style={{ color: "black" }}
      classNames={{
        inputWrapper:
          "border-b border-black shadow-none bg-transparent focus-within:border-black transition-none",
        input: "text-black  px-0 py-0 flex items-center   ",
      }}
      endContent={<SearchIcon className="text-base pointer-events-none" />}
      type="text"
    />
  );

  return (
    <header className="w-full flex flex-col items-center justify-between px-4">
      <div className="w-full flex items-center justify-between py-2">
        <div className=" hidden md:flex items-center gap-8 ">
          <Link href="/login" className="text-[12px] flex items-center">
            وارد شوید
            {Icon.finger}
          </Link>
          <Link href="/shop">{Icon.shop}</Link>
        </div>

        <Link className="flex items-center gap-2" href="/">
          <p className="text-black font-extrabold text-xl">چوبینو</p>
          <Logo />
        </Link>

        <div className="flex items-center max-w-md">
          <div className="  mx-0 none md:hidden">
            <MenuMobile />
          </div>
          <div className="hidden md:flex">{searchInput}</div>
        </div>
      </div>

      <div className="w-full">
        <ul className=" hidden md:flex flex-row-reverse justify-center items-center gap-10 mt-6 text-[12px] ">
          {siteConfig.navMenuItems.map((item, index) => (
            <li
              key={index}
              className={`${
                item.href === "/" && removeSlash === ""
                  ? "text-default-50"
                  : item.href === `/${removeSlash}`
                    ? "text-default-50"
                    : "text-default-600"
              }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
