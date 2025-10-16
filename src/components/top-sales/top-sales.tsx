"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@heroui/theme";
import { Button } from "@heroui/button";
import { useProgressButton } from "../use-progress-button";
import { ProductCard, ProductCardDataType } from "../product-card";

export default function TopSales() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    direction: "rtl",
    slidesToScroll: "auto",
    loop: true,
    align: "center",
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
      offerOnPrice: "280,000",
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
  ];

  return (
    <section className="rounded-3xl w-full flex flex-col relative gap-12">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-start h-18 w-full ">
          <h2 className="text-xl font-bold max-md:m-auto md:text-2xl">
            محصولات ویژه
          </h2>
        </div>
        <Button
          variant="bordered"
          className="w-auto bg-foreground text-background py-6 px-2 md:px-6 max-md:hidden lg:px-8"
        >
          مشاهده همه محصولات
        </Button>
      </div>
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

      <div className="w-full flex items-center justify-center my-12 md:hidden">
        <Button className="bg-foreground text-background" variant="bordered">
          مشاهده همه محصولات
        </Button>
      </div>
    </section>
  );
}
