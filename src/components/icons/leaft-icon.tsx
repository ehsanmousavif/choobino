"use client";

import { cn } from "@heroui/theme";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface LeaftIconProp {
  className?: string;
  floatRange?: number;
  oscillations?: number;
}

export default function LeaftIcon({
  className,
  floatRange = 20,
  oscillations = 20,
}: LeaftIconProp) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

//   const y = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, 2 * Math.PI * oscillations]
//   );

//   const ySin = useTransform(y, (val) => Math.sin(val) * floatRange);
  const smoothY = useSpring(scrollYProgress, { stiffness: 10, damping: 10 });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={cn(className, "absolute z-20 max-md:hidden")}
    >
      <Image
        src={"/images/leaft.png"}
        alt="leaft icon"
        height={54}
        width={54}
        className="object-cover max-w-[54px] max-h-[54px]"
      />
    </motion.div>
  );
}
