"use client";

import { CameraIcon } from "@heroicons/react/24/outline";
import { useDropzoneContext } from "@/app/hooks/useDropzoneContext";

const CheckOutImageInput = () => {
  const { src } = useDropzoneContext();

  return (
    <label className="flex w-full h-60 rounded-2xl text-center flex-col bg-background justify-center items-center border-content3 border-solid border-1 gap-3 p-8 shadow cursor-pointer">
      <CameraIcon className="size-15 md:my-5 text-foreground" />
      <b className="md:text-lg">فایل تصاویر را اینجا بکشید یا کلیک کنید</b>
      <span className="md:text-lg text-content4">
        فقط فایل JPEG پذیرفته می‌شوند (حداکثر حجم 10MB)
      </span>

      {src && src.length > 0 && (
        <div className="mt-4 w-full flex flex-wrap gap-2">
          {/* {src.map((file) => ( */}
            {/* // <FilePreview key={file.name} file={file} /> */}
          {/* ))} */}
        </div>
      )}
    </label>
  );
};

export default CheckOutImageInput;
