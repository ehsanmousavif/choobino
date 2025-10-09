import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CustomProductTypes {
  image: string;
  nameFa: string;
  nameEn: string;
}

export default function CustomProductName({
  image,
  nameFa,
  nameEn,
}: CustomProductTypes) {
  return (
    <div className="flex flex-col items-start justify-center w-full backdrop-blur-sm border-background/10 border-2 border-solid rounded-xl gap-10 p-8">
      <div className="size-16 relative z-10 rounded-xl">
        <Image
          src={image}
          alt="image preview"
          fill
          className="object-cover rounded-t-full object-center rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm md:text-md font-medium">{nameFa}</span>
        <span className="text-sm font-medium text-background/40">{nameEn}</span>
      </div>
      <div className="w-full flex items-center justify-between text-sm">
        <Link href="/#"></Link>
        <ChevronDownIcon className="size-4" />
      </div>
    </div>
  );
}
