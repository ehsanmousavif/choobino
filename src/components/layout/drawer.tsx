"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, cn } from "@heroui/react";
import { Drawer } from "vaul";
import Logo from "$/logo.png";
import Image from "next/image";

export default function MobileDrawer({ className }: { className?: string }) {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Button
          isIconOnly
          variant="solid"
          size="lg"
          radius="full"
          className={cn("bg-foreground/5!", className)}
        >
          <Bars2Icon className="w-6 h-6" />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-foreground/30 supports-[backdrop-filter]:backdrop-blur-sm z-[9998]" />
        <Drawer.Content className="bg-background z-[9999] flex flex-col fixed inset-y-0 start-0 w-xs max-w-[80vw] p-6">
          <Drawer.Title asChild>
            <div className="w-full flex items-center justify-between">
              <Image
                src={Logo}
                alt="لوگو اصلی چوبینو"
                width={86}
                height={48}
                priority
              />

              <Drawer.Close asChild>
                <Button isIconOnly variant="light" className="bg-foreground/5!">
                  <XMarkIcon className="w-6 h-6" />
                </Button>
              </Drawer.Close>
            </div>
          </Drawer.Title>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
