"use client";

import { useState } from "react";
import LeaftIcon from "../icons/leaft-icon";

export default function CheckOutDescription() {
  const [checkOutDescriptionValue, setCheckOutDescriptionValue] =
    useState<string>("");
  return (
    <div className="relative flex flex-col gap-8">
      <b className="text-lg">توضیحات تکمیلی </b>

      <label className="flex w-full h-60 rounded-2xl border-content3 border-solid border-1 gap-2 md:gap-5 p-8 shadow max-md:flex-col">
        <span className="font-bold pt-1.5">چیزی هست که باید بدونیم ؟</span>
        <div className="mt-2 bg-foreground/35 w-0.5 h-6 max-md:hidden" />

        <textarea
          placeholder="اینجا برامون بنویس"
          className="resize-none flex-1 outline-none border-none bg-none py-2"
          value={checkOutDescriptionValue}
          onChange={(e) => setCheckOutDescriptionValue(e.target.value)}
        ></textarea>
      </label>

      <LeaftIcon className="top-1/3 -translate-y-1/2 rotate-67 -right-15" />
    </div>
  );
}
