import { Icon } from "@/config/icons/icons";
import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="w-full h-auto px-4 relative">
      <Link href="#">
        <div className="absolute top-20 left-6 md:top-46 md:left-80 px-6 py-6 bg-foreground-700 text-foreground-300 rounded-full rotate-45">
          {Icon.arrow}
        </div>
      </Link>
      <div
        className="w-full rounded-xl bg-center bg-cover bg-no-repeat py-4 flex flex-col items-end justify-end px-4 md:py-16 aspect-square md:aspect-auto"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 100%), url('/banner.jpg')",
        }}
      >
        <div className="w-1/2 h-fbg-gradinet from-background to-45%"></div>
        <div className="relative z-10 flex flex-col justify-end items-center text-center gap-8 md:p-16 md:flex-row md:justify-between md:items-center          md:text-right">
          <div className="flex flex-col justify-end md:items-end md:justify-center items-end gap-4 md:gap-8">
            <div className="flex flex-col justify-end gap-2">
              <span className="text-2xl md:text-5xl font-bold">
                بنگر کرشمه ی نگاره
              </span>
              <span className="text-2xl md:text-5xl font-bold">
                ! های مبهم چوب را
              </span>
            </div>

            <span className="text-[12px] text-right text-sm md:text-sm text-default-700 mt-2">
              در سکون چوب ،حرکتی نهان است که چشمان خیال ورز آن را میبینند!
            </span>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Button
                className="text-xs md:text-sm py-2 px-4 md:py-3 md:px-6 bg-foreground text-background font-semibold rounded-lg"
                variant="flat"
              >
                سفارش اختصاصی
              </Button>
              <Button
                className="text-xs md:text-sm py-2 px-4 md:py-3 md:px-6 font-semibold rounded-lg"
                variant="bordered"
              >
                مشاهده فروشگاه
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
