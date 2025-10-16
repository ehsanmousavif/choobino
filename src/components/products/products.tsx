"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@heroui/theme";
import { Button } from "@heroui/button";
import { useProgressButton } from "../use-progress-button";
import { ProductCard, ProductCardDataType } from "../product-card";

export default function Products() {
  const [activeButton, setActiveButton] = useState<"special" | "top" | "new">(
    "special"
  );

  // ✅ فقط در موبایل (زیر 768px) کروسل فعاله
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    direction: "rtl",
    slidesToScroll: 1,
    loop: true,
    align: "center",
    breakpoints: {
      "(min-width: 768px)": { active: false },
      "(max-width: 767px)": { active: true },
    },
  });

  const { selectedIndex } = useProgressButton(emblaApi);

  const productCardData: ProductCardDataType[] = [
    {
      imageUrl: "/banner.png",
      title: "گیره سر زنانه طرح گل",
      price: "349,000",
      offer: 20,
      offerOnPrice: "280,000",
    },
    {
      imageUrl: "/Subtract.png",
      title: "کیف دوشی چرمی زنانه",
      price: "1,250,000",
      offer: 20,
      offerOnPrice: "1,000,000",
    },
    {
      imageUrl: "/Subtract.png",
      title: "ساعت مچی کلاسیک مردانه",
      price: "980,000",
      offer: 15,
      offerOnPrice: "830,000",
    },
    {
      imageUrl: "/Subtract.png",
      title: "کفش اسپرت راحتی",
      price: "720,000",
      offer: 10,
      offerOnPrice: "650,000",
    },
    {
      imageUrl: "/Subtract.png",
      title: "کفش رسمی مردانه",
      price: "950,000",
      offer: 12,
      offerOnPrice: "830,000",
    },
    {
      imageUrl: "/Subtract.png",
      title: "شال نخی طرحدار",
      price: "280,000",
      offer: 8,
      offerOnPrice: "250,000",
    },
    {
      imageUrl: "/Subtract.png",
      title: "کیف چرمی دست‌دوز",
      price: "1,400,000",
      offer: 10,
      offerOnPrice: "1,260,000",
    },
    {
      imageUrl: "/Subtract.png",
      title: "عینک آفتابی اسپرت",
      price: "620,000",
      offer: 5,
      offerOnPrice: "590,000",
    },
  ];

  return (
    <section className="rounded-3xl w-full flex flex-col relative gap-12">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-start h-18 w-full">
          <h2 className="text-xl font-bold max-md:m-auto md:text-2xl">
            محصولات ویژه
          </h2>

          <div className="flex flex-row items-end gap-4 max-w-2xl">
            {["special", "top", "new"].map((type) => (
              <Button
                key={type}
                className={cn(
                  activeButton === type
                    ? "text-foreground font-bold"
                    : "text-default-800 font-medium"
                )}
                onPress={() => setActiveButton(type as any)}
              >
                {type === "special"
                  ? "فروش ویژه"
                  : type === "top"
                    ? "پرفروش‌ترین"
                    : "محصولات جدید"}
              </Button>
            ))}
          </div>
        </div>

        <Button
          variant="bordered"
          className="w-auto bg-foreground text-background py-6 px-2 md:px-6 max-md:hidden lg:px-8"
        >
          مشاهده همه محصولات
        </Button>
      </div>

      {/* Products */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div
          className={cn(
            "flex gap-6 sm:gap-8 md:grid md:grid-cols-2 xl:grid-cols-4 px-2 md:px-0"
          )}
        >
          {productCardData.map((item, index) => (
            <div
              key={index}
              className="w-full flex-[0_0_75%] md:flex-[0_0_50%] xl:flex-[0_0_25%] justify-center"
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots only for mobile */}
      <div className="w-full flex items-center justify-center mt-6 md:hidden">
        <div className="w-full max-w-sm px-4">
          <div className="flex gap-2 h-2">
            {[0, 1, 2].map((_, i) => {
              const active = selectedIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "w-full h-1 rounded-full transition-all duration-300",
                    active
                      ? "bg-gradient-to-r bg-foreground/30 scale-y-100"
                      : "bg-foreground/5"
                  )}
                  aria-label={`برو به اسلاید ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full flex items-center justify-center my-12 md:hidden">
        <Button className="bg-foreground text-background" variant="bordered">
          مشاهده همه محصولات
        </Button>
      </div>
    </section>
  );
}
