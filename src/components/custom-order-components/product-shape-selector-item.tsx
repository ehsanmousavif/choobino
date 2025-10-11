"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { cn } from "@heroui/theme";

interface ProductTemplateSelectorItemProp {
  title: string;
  value: string;
  className: string;
}

export default function ProductTemplateSelectorItem({
  title,
  value,
  className,
}: ProductTemplateSelectorItemProp) {
  return (
    <label className="group flex flex-col items-center gap-3 cursor-pointer">
      <input
        type="radio"
        className="hidden"
        value={value}
        name="productTemplate"
      />
      <div
        className={cn(
          "border-2 border-secondary-400 flex items-center justify-center bg-amber-50 transition-colors duration-300",
          "group-has-[:checked]:bg-secondary-400 group-has-[:checked]:text-foreground",
          className
        )}
      >
        <CheckIcon className="w-6 h-6 hidden text-background group-has-[:checked]:block" />
      </div>
      <b>{title}</b>
    </label>
  );
}
