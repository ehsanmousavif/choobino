"use client";
import Image from "next/image";
import CustomProductName, { CustomProductTypes } from "./custom-product-name";
import { Button } from "@heroui/button";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@heroui/theme";
import { useBlogProgressButton } from "./use-blog-progress-button";
import { use, useState } from "react";

export function CustomProduct() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    direction: "rtl",
    slidesToScroll: 1,
    loop: true,
    align: "center",
    breakpoints: {
      "(min-width: 1280px)": { active: false },
      "(max-width: 1279px)": { active: true },
    },
  });
  const { selectedIndex } = useBlogProgressButton(emblaApi);

  const CustomProductData: CustomProductTypes[] = [
    {
      nameFa: "مجسمه چوبی دست‌ساز",
      nameEn: "Handmade Wooden Sculpture",
      image: "/test-image.png",
    },
    {
      nameFa: "ساعت دیواری چوبی",
      nameEn: "Wooden Wall Clock",
      image: "/test-image.png",
    },
    {
      nameFa: "قاب عکس چوبی",
      nameEn: "Wooden Photo Frame",
      image: "/test-image.png",
    },
    {
      nameFa: "جعبه تزئینی چوبی",
      nameEn: "Decorative Wooden Box",
      image: "/test-image.png",
    },
    {
      nameFa: "شمعدان چوبی کلاسیک",
      nameEn: "Classic Wooden Candle Holder",
      image: "/test-image.png",
    },
  ];

  return (
    <section className="relative w-full bg-foreground text-white overflow-hidden rounded-3xl">
      <div className="absolute inset-0">
        <Image
          src="/background-idea-section.png"
          alt="background-preview"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center py-20 md:py-28 px-6 md:px-24 xl:px-64 gap-16">
        <div className="w-full flex flex-col items-center md:items-start justify-start text-center md:text-right gap-2 font-medium">
          <span className="text-sm text-background/60">
            رویایتان را به محصولی واقعی تبدیل می‌کنیم.
          </span>
          <h2 className="text-xl md:text-2xl font-semibold leading-tight">
            ایده‌ای توی ذهن دارید؟
            <br />
            ما می‌ســـازیمش
          </h2>
        </div>

        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className={cn("flex gap-6 sm:gap-8 md:grid  xl:grid-cols-3")}>
            {CustomProductData.map((product, idx) => (
              <div
                key={idx}
                className="w-full flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_40%]"
              >
                <CustomProductName {...product} />
              </div>
            ))}

            <div className="flex-[0_0_100%] bg-white text-black p-6 rounded-2xl flex flex-col justify-between gap-4 shadow-xl">
              <h3 className="font-bold text-lg">ایده‌ی شما اینجا نوشته میشه</h3>
              <p className="text-sm text-foreground/40">Business Plan</p>
              <p className="text-sm leading-relaxed text-foreground/40">
                برای سفارش اختصاصی، کافیست ایده‌تان را با ما در میان بگذارید.
                تیم طراحی ما محصولی متناسب با سلیقه‌ی شما خواهد ساخت.
              </p>
              <Button className="mt-6 bg-black text-white rounded-xl w-full">
                ثبت سفارش اختصاصی
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-6 md:hidden">
          <div className="w-full max-w-sm px-4">
            <div className="flex gap-2 h-2">
              {[0, 1, 2].map((i) => {
                const active = selectedIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={cn(
                      "w-full h-1 rounded-full transition-all duration-300",
                      active ? "bg-white/60 scale-y-100" : "bg-white/10"
                    )}
                    aria-label={`برو به اسلاید ${i + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* --- متن توضیح پایین --- */}
        <div>
          <p className="text-4xl">“</p>
          <p className="text-right text-sm text-white/70 leading-relaxed">
            گاهی یک ایده یا تصویر در ذهن دارید که می‌خواهید به واقعیت تبدیل شود؛
            ما اینجاییم تا آن را بسازیم. کافیست طرح، سلیقه یا حتی یک توضیح ساده
            از خواسته‌تان را با ما در میان بگذارید تا تیم ما محصولی اختصاصی، خاص
            و منحصر‌به‌فرد برایتان طراحی و اجرا کند.
          </p>
        </div>
      </div>
    </section>
  );
}
