"use client";

import BannerImage from "$/banner.png";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="rounded-3xl w-full h-[40vh] md:h-[50vh] min-h-80 max-h-112 relative overflow-hidden">
      <Image
        src={BannerImage}
        alt="Banner"
        className="object-cover object-[50%_60%] z-10"
        fill
        priority
      />
      <span className="absolute inset-0 z-20 bg-gradient-to-l from-[black] to-transparent" />

      <div className="w-full absolute inset-y-0 start-0 flex p-6 md:px-24 flex-col justify-end md:justify-center-safe gap-4 z-30">
        <h1 className="text-background text-2xl md:text-4xl lg:text-5xl font-extrabold ps-1">
          بنگر کرشمه ی نگاره
          <br />
          های مبهم چوب را !
        </h1>
        <p className="text-background/80 text-base ps-1 max-w-[80%]">
          در سکون چوب، حرکتی نهان است که چشمان خیال‌ورز آن را میبینند !
        </p>
        <div className="w-full flex gap-4 mt-4">
          <Button variant="solid" className="py-6 px-2 md:px-6 lg:px-8">مشاهده فروشگاه</Button>
          <Button variant="bordered" className="text-default py-6 px-2 md:px-6 lg:px-8 backdrop-blur-sm">سفارش اختصاصی</Button>
        </div>
      </div>
    </section>
  );
}
