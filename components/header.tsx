"use client";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import { Input } from "@heroui/input";
import { Logo, SearchIcon } from "./icons";
import { Icon } from "@/config/icons/icons";
import { usePathname } from "next/navigation";

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
    <header className="w-full flex flex-col items-center text-black">
      <div className="w-full flex items-center justify-between px-8 py-2">
        <div className="flex items-center gap-8">
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

        <div className="flex items-center max-w-md">{searchInput}</div>
      </div>

      <div className="w-full ">
        <ul className="flex flex-row-reverse justify-center items-center gap-10 mt-6 text-[12px]">
          {siteConfig.navMenuItems.map((item, index) => (
            <li
              key={index}
              className={`${
                item.href === "/" && removeSlash === ""
                  ? "text-black"
                  : item.href === `/${removeSlash}`
                    ? "text-black"
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
