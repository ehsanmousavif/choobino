"use client";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const ProductTemplateSelector = () => {
  const [selected, setSelected] = useState("square");

  return (
    <div className="flex max-md:items-center w-full gap-10 py-10 flex-col">
      <b className="text-lg">انتخاب قالب محصول</b>
      <div className="flex items-center gap-5 max-md:justify-between">
        <div
          onClick={() => setSelected("square")}
          className="flex flex-col items-center gap-3 cursor-pointer"
        >
          <div
            className={`w-14 h-14 rounded-2xl border-2 border-secondary-400 flex items-center justify-center transition-colors duration-300 ${
              selected === "square"
                ? "bg-secondary-400 text-background"
                : "bg-amber-50 text-foreground"
            }`}
          >
            {selected === "square" && <CheckIcon className="w-6 h-6" />}
          </div>
          <b>مربعی</b>
        </div>

        <div
          onClick={() => setSelected("circle")}
          className="flex flex-col items-center gap-3 cursor-pointer"
        >
          <div
            className={`w-14 h-14 rounded-full border-2 border-secondary-400 flex items-center justify-center transition-colors duration-300 ${
              selected === "circle"
                ? "bg-secondary-400 text-background"
                : "bg-amber-50 text-foreground"
            }`}
          >
            {selected === "circle" && <CheckIcon className="w-6 h-6" />}
          </div>
          <b>دایره ای</b>
        </div>

        <div
          onClick={() => setSelected("horizontal")}
          className="flex flex-col items-center gap-3 cursor-pointer"
        >
          <div
            className={`w-28 h-14 rounded-2xl border-2 border-secondary-400 flex items-center justify-center transition-colors duration-300 ${
              selected === "horizontal"
                ? "bg-secondary-400 text-background"
                : "bg-amber-50 text-foreground"
            }`}
          >
            {selected === "horizontal" && <CheckIcon className="w-6 h-6" />}
          </div>
          <b>افقی</b>
        </div>

        <div
          onClick={() => setSelected("vertical")}
          className="flex flex-col items-center gap-3 cursor-pointer"
        >
          <div
            className={`w-8 h-14 rounded-lg border-2 border-secondary-400 flex items-center justify-center transition-colors duration-300 ${
              selected === "vertical"
                ? "bg-secondary-400 text-background"
                : "bg-amber-50 text-foreground"
            }`}
          >
            {selected === "vertical" && <CheckIcon className="w-6 h-6" />}
          </div>
          <b>عمودی</b>
        </div>
      </div>
    </div>
  );
};

export default ProductTemplateSelector;
