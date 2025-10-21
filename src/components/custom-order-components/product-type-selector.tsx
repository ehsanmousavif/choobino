import Image from "next/image";
import { ReactNode } from "react";

import ProductTypeSelectorItem from "./product-type-selector-item";
import NecklaceIcon from "../icons/necklace-icon";
import HandIcon from "../icons/hand-icon";
import KeyIcon from "../icons/key-icon";
import CarIcon from "../icons/car-icon";

interface ProductTypeSelectorItemType {
  title: string;
  value: string;
  icon: ReactNode;
}

const ProductTypeSelectorItems: ProductTypeSelectorItemType[] = [
  {
    title: "دستبند",
    value: "bracelet",
    icon: (
      <HandIcon
        size={"size-6 lg:size-10 md:size-12"}
        color="secondary-600"
        className=" group-has-[:checked]:text-background"
      />
    ),
  },

  {
    title: "گردنبند",
    value: "necklace",
    icon: (
      <NecklaceIcon
        size={"size-6 lg:size-10 md:size-12"}
        color="secondary-600"
        className=" group-has-[:checked]:text-background"
      />
    ),
  },

  {
    title: "جاسویچی",
    value: "key",
    icon: (
      <KeyIcon
        size={"size-6 lg:size-10 md:size-12"}
        color="secondary-600"
        className=" group-has-[:checked]:text-background"
      />
    ),
  },

  {
    title: "آویزخودرو",
    value: "car",
    icon: (
      <CarIcon
        size={"size-6 lg:size-10 md:size-12"}
        color="secondary-600"
        className=" group-has-[:checked]:text-background"
      />
    ),
  },
];

export default function ProductTypeSelector() {
  return (
    <div className="flex flex-col gap-10 relative">
      <div className="relative w-12 h-12">
        <Image src={"/images/star.svg"} fill alt="star" className="mb-20" />
      </div>

      <div className="flex flex-col gap-5">
        <b className="text-lg">انتخاب نوع محصول</b>
        <span className="text-foreground/45">
          یکی از گزینه های زیر رو انتخاب کن برات بسازیم
        </span>
      </div>

      <div className="flex items-center justify-between gap-5 max-w-full overflow-x-auto h-auto overflow-y-hidden pb-5">
        {ProductTypeSelectorItems.map((p, index) => (
          <ProductTypeSelectorItem
            title={p.title}
            value={p.value}
            icon={p.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
