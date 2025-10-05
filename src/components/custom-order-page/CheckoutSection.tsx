"use client";
import { useState } from "react";
import CheckoutHeader from "./CheckoutHeader";
import { Button } from "@heroui/react";

const CheckoutSection = () => {
  const [productType, setProductType] = useState<string>("گردنبند");
  const [size, setSize] = useState<string>("متوسط");
  const [gender, setGender] = useState<string>("زنانه");
  const [shape, setShape] = useState<string>("مربعی");
  const [deposit, setDeposit] = useState<number>(500000);

  return (
    <section className="py-20 relative flex flex-col gap-10 md:gap-30 items-center ">
      <CheckoutHeader />
      <div className="rounded-2xl p-10 border-content3 border-solid border-1 flex flex-col gap-15 w-full shadow-lg">
        <div className="flex items-center gap-2  w-full">
          <div className="w-12 h-12 rounded-full bg-secondary-400"></div>
          <b className="text-lg">خلاصه سفارش شما</b>
        </div>
        <div className="flex items-center justify-between  md:gap-5 max-md:flex-col">
          <div className="flex flex-1/4 items-center border-l-solid border-l-1 border-l-content4 max-md:border-none justify-around max-md:w-full ">
            <span className="text-content4 font-bold">نوع محصول:</span>
            <span className="font-bold">{productType}</span>
          </div>
          <span className="text-3xl text-content3 md:hidden">-</span>
          <div className="flex flex-1/4 items-center border-l-solid border-l-1 border-l-content4 max-md:border-none justify-around max-md:w-full ">
            <span className="text-content4 font-bold">ابعاد:</span>
            <span className="font-bold">{size}</span>
          </div>
          <span className="text-3xl text-content3 md:hidden">-</span>
          <div className="flex flex-1/4 items-center border-l-solid border-l-1 border-l-content4 max-md:border-none justify-around max-md:w-full ">
            <span className="text-content4 font-bold"> جنسیت:</span>
            <span className="font-bold">{gender}</span>
          </div>
          <span className="text-3xl text-content3 md:hidden">-</span>
          <div className="flex flex-1/4 items-center border-l-solid border-l-1 border-l-content4 max-md:border-none justify-around max-md:w-full ">
            <span className="text-content4 font-bold">قالب محصول :</span>
            <span className="font-bold">{shape}</span>
          </div>
          <span className="text-3xl text-content3 md:hidden">-</span>
          <div className="flex flex-1/4 items-center justify-around max-md:w-full">
            <span className="text-content4 font-bold">هزینه بیعانه:</span>
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
    </section>
  );
};

export default CheckoutSection;
