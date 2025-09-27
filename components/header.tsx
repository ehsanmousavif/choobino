"use client";

import Link from "next/link";
import React from "react";
import { Button, Input } from "@heroui/react";
import {
  FingerPrintIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/public/logo.png";

import MenuMobile from "./drawer";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-between px-4 pt-10">
      <div className="w-full flex items-center justify-between py-2">
        <div className="flex items-center max-w-md">
          <div className="mx-0 md:hidden">
            <MenuMobile />
          </div>
          <Input
            placeholder="دنبال محصول خاصی میگردی؟"
            variant="underlined"
            startContent={<MagnifyingGlassIcon className="size-5" />}
            className="hidden md:flex"
            classNames={{
              input: "placeholder:text-foreground",
            }}
          />
        </div>

        <Link className="flex items-center gap-2" href="/">
          <Image
            src={Logo}
            alt="لوگو اصلی چوبینو"
            width={86}
            height={48}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <Button
            dir="ltr"
            variant="light"
            size="sm"
            isIconOnly
            as={Link}
            href="/login"
          >
            <ShoppingBagIcon className="size-5" />

            <span className="sr-only">فروشگاه</span>
          </Button>

          <Button
            dir="ltr"
            variant="light"
            as={Link}
            href="/login"
            size="sm"
            endContent={<FingerPrintIcon className="size-5" />}
          >
            وارد شوید
            <span className="sr-only">وارد شوید</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

{
  /* 
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
      </div> */
}
