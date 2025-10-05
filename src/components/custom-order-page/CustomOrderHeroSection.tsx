"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import NecklaceIcon from "../icons/NecklaceIcon";
import CarIcon from "../icons/CarIcon";
import KeyIcon from "../icons/KeyIcon";
import HandIcon from "../icons/HandIcon";

const CustomOrderHeroSection = () => {
  return (
    <section className="w-full h-[80vh] relative flex flex-col justify-center mb-40 overflow-hidden">
      <div className="relative w-full flex flex-col justify-around h-[85%]">
        <div className="absolute w-full flex  items-center justify-center -bottom-25 ">
          <div className="absolute border-secondary-500/20  border-solid border-2 w-200 h-200 rounded-full"></div>
          <div className="absolute border-secondary-500/30  border-solid border-2 w-170 h-170 rounded-full"></div>
          <div className="absolute bg-secondary-300/40 w-155 h-155 rounded-full z-10 backdrop-blur-2xl"></div>
          <Image
            src={"/images/8cfca8ccc97a31cd00dd99ee9d19004d582f030d.webp"}
            height={620}
            width={620}
            className="object-cover z-20"
            draggable="false"
            alt="Custom order hero section image"
          />
        </div>
        <NecklaceIcon
          size="size-20"
          color="secondary-400"
          className="absolute z-20 -rotate-5 right-[18%] top-[20%]"
        />{" "}
        <CarIcon
          size="size-20"
          color="secondary-400"
          className="absolute z-20 rotate-16 right-[13%] bottom-[20%]"
        />{" "}
        <KeyIcon
          size="size-20"
          color="secondary-400"
          className="absolute z-20 rotate-73 left-[20%] bottom-[8%]"
        />{" "}
        <HandIcon
          size="size-20"
          color="secondary-400"
          className="absolute z-20 -rotate-5 left-[18%] top-[30%]"
        />
      </div>

      <div className="w-full h-[15%] bg-background/70 backdrop-blur-3xl z-30 relative">
        <Button
          variant="solid"
          className="py-6 px-2 md:px-6 lg:px-8 rounded-3xl text-background bg-foreground absolute z-30 left-1/2 -translate-x-1/2 translate-y-1/2 -top-1/2"
        >
          بریم محصولتو بسازیم
        </Button>
      </div>
    </section>
  );
};

export default CustomOrderHeroSection;
