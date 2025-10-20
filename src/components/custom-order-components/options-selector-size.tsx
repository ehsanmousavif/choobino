"use client";

import { Select, SelectItem } from "@heroui/select";

const sizeOptions = [
  { id: "small", label: "کوچیک 196,000" },
  { id: "medium", label: "متوسط 246,000" },
  { id: "large", label: "بزرگ 296,000" },
];

export default function OptionsSelectorSize() {
  return (
    <div className="flex flex-col gap-5 flex-1 md:flex-1/2">
      <b className="text-lg">انتخاب ابعاد</b>

      <div className="border-content4 border-solid border-2 p-5 w-full flex items-center gap-5 rounded-2xl">
        <span>ابعاد محصول</span>

        <span className="text-content4">|</span>

        <Select
          className="flex-1 shadow-none cursor-pointer border-none outline-none bg-none"
          placeholder="یک گزینه انتخاب کنید"
        >
          {sizeOptions.map((s) => (
            <SelectItem key={s.id}>{s.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
