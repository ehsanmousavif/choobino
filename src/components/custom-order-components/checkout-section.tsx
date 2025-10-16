"use client";
import LeaftIcon from "../icons/leaft-icon";
import CheckoutHeader from "./checkout-header";
import { Button } from "@heroui/react";

interface CheckoutSectionProp {
  productType: string;
  size: string;
  gender: string;
  shape: string;
  deposit: number;
}

export default function CheckoutSection({
  productType,
  size,
  gender,
  shape,
  deposit,
}: CheckoutSectionProp) {
  return (
    <section className="py-20 relative flex flex-col gap-10 lg:gap-20 items-center">
      <CheckoutHeader />

      <div className="rounded-2xl p-10 border-content3 border-solid border-1 flex flex-col gap-15 w-full shadow-lg">
        <div className="flex items-center gap-2 w-full">
          <div className="w-12 h-12 rounded-full bg-secondary-400"></div>
          <b className="text-lg">خلاصه سفارش شما</b>
        </div>

        <div className="flex items-center justify-between gap-5 max-lg:flex-wrap max-md:flex-col">
          <div className="flex flex-1/4 items-center border-l-solid border-l-1 border-l-content4 max-md:border-none justify-around max-md:w-full">
            <span className="text-foreground/45 font-bold">نوع محصول:</span>
            <span className="font-bold">{productType}</span>
          </div>
          <span className="bg-content3 w-4 h-0.5 md:hidden" />

          <div className="flex flex-1/4 items-center border-l-solid border-l-1 border-l-content4 max-md:border-none justify-around max-md:w-full">
            <span className="text-foreground/45 font-bold">ابعاد:</span>
            <span className="font-bold">{size}</span>
          </div>
          <span className="bg-content3 w-4 h-0.5 md:hidden" />

          <div className="flex flex-1/4 items-center lg:border-l-solid lg:border-l-1 lg:border-l-content4 max-md:border-none justify-around max-md:w-full">
            <span className="text-foreground/45 font-bold"> جنسیت:</span>
            <span className="font-bold">{gender}</span>
          </div>
          <span className="bg-content3 w-4 h-0.5 md:hidden" />

          <div className="flex flex-1/4 items-center max-lg:flex-1/3 border-l-solid border-l-1 border-l-content4 max-md:border-none justify-around max-md:w-full">
            <span className="text-foreground/45 font-bold">قالب محصول :</span>
            <span className="font-bold">{shape}</span>
          </div>
          <span className="bg-content3 w-4 h-0.5 md:hidden" />

          <div className="flex flex-1/4 items-center justify-around max-lg:flex-1/3 max-md:w-full">
            <span className="text-foreground/45 font-bold">هزینه بیعانه:</span>
            <span className="font-bold">{deposit.toLocaleString()} تومان</span>
          </div>
        </div>

        <div className="flex items-center gap-5 max-md:flex-col w-full">
          <div className="flex-1 flex gap-5">
            <b className="text-2xl">هزینه کل</b>
            <b className="text-2xl text-secondary-400">963,000 تومان</b>
          </div>
          <Button
            variant="solid"
            className="py-6 px-2 md:px-6 lg:px-8 rounded-3xl text-background bg-secondary-400"
          >
            ثبت سفارش و پرداخت بیعانه
          </Button>
        </div>
      </div>

      <LeaftIcon className="top-1/2 translate-y-1/2 rotate-150 -left-20 " />
    </section>
  );
}
