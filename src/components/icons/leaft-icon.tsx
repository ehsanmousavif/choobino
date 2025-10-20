"use client";

import { cn } from "@heroui/theme";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

interface LeaftIconProp {
  className?: string;
  floatRange?: number;
  oscillations?: number;
}

export default function LeaftIcon({
  className,
}: LeaftIconProp) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

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
