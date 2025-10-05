"use client";
import Image from "next/image";
import HandIcon from "../icons/HandIcon";
import NecklaceIcon from "../icons/NecklaceIcon";
import KeyIcon from "../icons/KeyIcon";
import CarIcon from "../icons/CarIcon";
import { useState } from "react";

const ProductTypeSelector = () => {
  const [selectedType, setSelectedType] = useState("bracelet");

  return (
    <div className="flex flex-col gap-10">
      <Image
        src={"/images/star.svg"}
        height={50}
        width={50}
        alt="star"
        className="mb-20"
      />
      <div className="flex flex-col gap-5">
        <b className="text-lg">انتخاب نوع محصول</b>
        <span className="text-content4">
          یکی از گزینه های زیر رو انتخاب کن برات بسازیم
        </span>
      </div>
      <div className="flex items-center justify-between gap-5">
        <div
          className="flex flex-1/4 items-center justify-around cursor-pointer max-md:flex-col max-md:gap-4"
          onClick={() => setSelectedType("bracelet")}
        >
          <span
            className={`flex items-center justify-center w-12 h-12  md:w-22 md:h-22 rounded-full transition duration-300 ${
              selectedType === "bracelet" ? "bg-secondary-400" : "bg-amber-50"
            }`}
          >
            <HandIcon
              size={"size-6 lg:size-10 md:size-12"}
              color={
                selectedType === "bracelet" ? "background" : "secondary-400"
              }
            />
          </span>
          <span
            className={`max-md:text-sm font-bold  transition duration-300 ${selectedType === "bracelet" ? "text-content4-foreground" : "text-content4"}`}
          >
            دستبند
          </span>
        </div>
        <span className="text-secondary-400 text-2xl">|</span>
        <div
          className="flex flex-1/4 items-center justify-around cursor-pointer max-md:flex-col max-md:gap-4"
          onClick={() => setSelectedType("necklace")}
        >
          <span
            className={`flex items-center justify-center w-12 h-12  md:w-22 md:h-22 rounded-full transition duration-300 ${
              selectedType === "necklace" ? "bg-secondary-400" : "bg-amber-50"
            }`}
          >
            <NecklaceIcon
              size={"size-6 lg:size-10 md:size-12"}
              color={
                selectedType === "necklace" ? "background" : "secondary-400"
              }
            />
          </span>
          <span
            className={`max-md:text-sm font-bold  transition duration-300 ${selectedType === "necklace" ? "text-content4-foreground" : "text-content4"}`}
          >
            گردنبند
          </span>
        </div>
        <span className="text-secondary-400 text-2xl">|</span>
        <div
          className="flex flex-1/4 items-center justify-around cursor-pointer max-md:flex-col max-md:gap-4"
          onClick={() => setSelectedType("key")}
        >
          <span
            className={`flex items-center justify-center w-12 h-12  md:w-22 md:h-22 rounded-full transition duration-300 ${
              selectedType === "key" ? "bg-secondary-400" : "bg-amber-50"
            }`}
          >
            <KeyIcon
              size={"size-6 lg:size-10 md:size-12"}
              color={selectedType === "key" ? "background" : "secondary-400"}
            />
          </span>
          <span
            className={`max-md:text-sm font-bold  transition duration-300  ${selectedType === "key" ? "text-content4-foreground" : "text-content4"}`}
          >
            جاسوییچی
          </span>
        </div>
        <span className="text-secondary-400 text-2xl">|</span>
        <div
          className="flex flex-1/4 items-center justify-around cursor-pointer max-md:flex-col max-md:gap-4"
          onClick={() => setSelectedType("car")}
        >
          <span
            className={`flex items-center justify-center w-12 h-12  md:w-22 md:h-22 rounded-full transition duration-300 ${
              selectedType === "car" ? "bg-secondary-400" : "bg-amber-50"
            }`}
          >
            <CarIcon
              size={"size-6 lg:size-10 md:size-12"}
              color={selectedType === "car" ? "background" : "secondary-400"}
            />
          </span>
          <span
            className={`max-md:text-sm font-bold transition duration-300  ${selectedType === "car" ? "text-content4-foreground" : "text-content4"}`}
          >
            آویز خودرو
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductTypeSelector;
