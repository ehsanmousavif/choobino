"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import NecklaceIcon from "../icons/necklace-icon";
import CarIcon from "../icons/car-icon";
import KeyIcon from "../icons/key-icon";
import HandIcon from "../icons/hand-icon";

const CustomOrderHeroSection = () => {
  return (
    <section className="w-full h-[80vh] relative flex flex-col justify-center mb-40 overflow-hidden">
      <div className="relative flex flex-col justify-around h-200 w-200">
        <div className="absolute w-full flex items-center justify-center -bottom-30 md:-bottom-25 ">
          <div className="absolute border-secondary-500/20  border-solid border-2 w-136 h-136 md:w-200 md:h-200 rounded-full"></div>
          <div className="absolute border-secondary-500/30  border-solid border-2 h-116 w-116 md:w-170 md:h-170 rounded-full"></div>
          <div className="absolute bg-secondary-300/40 w-96 h-96 md:w-155 md:h-155 rounded-full z-10 backdrop-blur-2xl"></div>
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
          size="size-10 md:size-20"
          color="secondary-400"
          className="absolute z-20 -rotate-5 right-2 md:right-[18%] bottom-[50%] md:top-[20%]"
        />{" "}
        <CarIcon
          size="size-10 md:size-20"
          color="secondary-400"
          className="absolute z-20 rotate-16 right-5 md:right-[13%] bottom-20 md:bottom-[20%]"
        />{" "}
        <KeyIcon
          size="size-10 md:size-20"
          color="secondary-400"
          className="absolute z-20 rotate-270 left-5 bottom-2 md:left-[20%] md:bottom-[8%]"
        />{" "}
        <HandIcon
          size="size-10 md:size-20"
          color="secondary-400"
          className="absolute z-20 -rotate-5 left-8 bottom-[60%] md:left-[18%] md:top-[30%]"
        />
      </div>

      <div className="w-full h-[15%] bg-background/70 backdrop-blur-3xl bottom-0 z-30 relative items-center justify-center">
        <Button
          variant="solid"
          className="py-6 px-2 md:px-6 lg:px-8 rounded-3xl text-background bg-foreground absolute z-30 left-1/2 -translate-x-1/2 translate-y-1/2 md:-top-1/2"
        >
          بریم محصولتو بسازیم
        </Button>
      </div>
    </section>
  );
};

export default CustomOrderHeroSection;
  