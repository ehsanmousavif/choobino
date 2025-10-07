'use client'
import { Dropzone } from "./check-out-dropzone-provider";
import CheckOutImageInput from "./check-out-image-input";

const CheckOutImageInputSection = () => {
  const handleDrop = (acceptedFiles: File[]) => {
    console.log("Uploaded files:", acceptedFiles);
    };

  return (
    <section className="py-15 gap-8 flex flex-col">
      <div className="flex flex-col gap-2.5">
        <b className="text-lg">آپلود تصویر نمونه </b>
        <span className="text-content4">
          اگر تصویر نمونه ای دارید برامون بفرستید :)
        </span>
      </div>
      <Dropzone
        accept={{ "image/jpeg": [] }}
        maxFiles={5}
        maxSize={10 * 1024 * 1024}
        onDrop={handleDrop}
      >
        <CheckOutImageInput />
      </Dropzone>
      <CheckOutImageInput />
    </section>
  );
};

export default CheckOutImageInputSection;
