"use client";

import { Icon } from "@/config/icons/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Drawer } from "vaul";

export default function VaulDrawer() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="relative flex p-2 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-default-700 text-sm font-medium shadow-sm transition-all  dark:text-white">
        {Icon.burger}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-background/60" />
        <Drawer.Content
          className="top-0 right-0 bottom-0 fixed z-10 outline-none w-2/3"
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-zinc-50 h-full w-full grow flex flex-col rounded-l-xl py-4 ">
            <div className=" max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-2 text-default bg-foreground-300/50 rounded-xl px-2 py-2 flex items-center ">
                بِسْمِ اللَّـهِ الرَّ‌حْمَـٰنِ الرَّ‌حِيمِ
              </Drawer.Title>
              <ul className="flex h-full flex-col items-center justify-center gap-4">
                {siteConfig.navMenuItems.map((item, index) => (
                  <li key={index}>
                    <Link className="text-black text-sm " href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
