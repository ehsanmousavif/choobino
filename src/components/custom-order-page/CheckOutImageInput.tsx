"use client";

import { CameraIcon } from "@heroicons/react/24/outline";

const CheckOutImageInput = () => {
  return (
    <label className="flex w-full h-60 rounded-2xl text-center flex-col bg-background justify-center items-center border-content3 border-solid border-1 gap-3 p-8 shadow cursor-pointer">
      <CameraIcon className="size-15 md:my-5" />
      <b className="md:text-lg">فایل تصاویر را اینجا بکشید یا کلیک کنید</b>
      <span className="md:text-lg text-content4">
        فقط فایل JPEG پذیرفته میشوند (حداکثر حجم 10MB)
      </span>
      <input type="file" className="hidden" multiple />
    </label>
  );
};

export default CheckOutImageInput;
