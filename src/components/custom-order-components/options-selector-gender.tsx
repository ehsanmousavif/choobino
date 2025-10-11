"use client";

import { Select, SelectItem } from "@heroui/select";

const genderOptions = [
  { id: "male", label: "مرد" },
  { id: "female", label: "زن" },
];

export default function OptionsSelectorGender(){
  return (
    <div className="flex flex-col gap-5 flex-1 md:flex-1/2">
      <b className="text-lg">انتخاب جنسیت</b>
      <div className="border-content4 border-solid border-2 p-5 w-full flex items-center gap-5 rounded-2xl">
        <span>انتخاب جنسیت</span>
        <span className="text-content4">|</span>
        <Select
          className="flex-1 shadow-none cursor-pointer border-none outline-none bg-none"
          placeholder="یک گزینه انتخاب کنید"
        >
          {genderOptions.map((g) => (
            <SelectItem key={g.id}>{g.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

