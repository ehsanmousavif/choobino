"use client";

import Link from "next/link";
import React from "react";
import { Button, Input, Navbar, Skeleton } from "@heroui/react";
import {
  FingerPrintIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Logo from "$/logo.png";

import Image from "next/image";
import dynamic from "next/dynamic";

const MobileDrawer = dynamic(() => import("./drawer"), {
  ssr: false,
  loading: () => <Skeleton className="size-12 rounded-full" />,
});

const navbar = [
  {
    label: "چوبینو!",
    href: "/",
  },
  {
    label: "فروشگاه",
    href: "/shop",
  },
  {
    label: "محصولات",
    href: "/product",
  },
  {
    label: "وبلاگ",
    href: "/blog",
  },
  {
    label: "درباره ما",
    href: "/about",
  },
  {
    label: "ارتباط باما",
    href: "/call",
  },
];

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-between py-6 px-2 md:pt-12">
      <div className="w-full flex items-center justify-between py-2">
        <div className="flex items-center max-w-md">
          <MobileDrawer className="md:hidden" />

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
      <div className="flex items-center gap-6 text-sm pt-6 ">
        {navbar.map((x) => {
          return (
            <ul>
              <Link href={x.href}>
                <li>{x.label}</li>
              </Link>
            </ul>
          );
        })}
      </div>
    </header>
  );
}
