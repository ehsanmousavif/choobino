"use client";

import { useState, useEffect } from "react";
import Uploady, { useBatchAddListener, useUploady } from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadButton from "@rpldy/upload-button";
import { CameraIcon } from "@heroicons/react/24/outline";

type PreviewFile = {
  id: string;
  name: string;
  file: File;
};

export default function CheckOutImageUploader() {
  const [fileList, setFileList] = useState<PreviewFile[]>([]);

  return (
    <Uploady
      destination={{ url: "/api/upload" }}
      multiple
      autoUpload={false}
      accept="image/jpeg"
    >
      <DragDropAndPreview fileList={fileList} setFileList={setFileList} />
    </Uploady>
  );
}

function DragDropAndPreview({
  fileList,
  setFileList,
}: {
  fileList: PreviewFile[];
  setFileList: React.Dispatch<React.SetStateAction<PreviewFile[]>>;
}) {
  useBatchAddListener((batch) => {
    const newFiles: PreviewFile[] = batch.items
      .map((item) => {
        const file = item.file as File;
        if (file.size > 10 * 1024 * 1024) return null;
        if (!file.type.includes("jpeg")) return null;

        return {
          id: item.id,
          name: file.name,
          file,
        };
      })
      .filter(Boolean) as PreviewFile[];

    setFileList((prev) => [...prev, ...newFiles]);
  });

  const removeFile = (id: string) => {
    setFileList((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 relative">
      <UploadDropZone>
        <label className="flex w-full h-60 rounded-2xl text-center flex-col bg-background justify-center items-center border border-content3 gap-3 p-8 shadow cursor-pointer">
          <CameraIcon className="h-12 w-12 text-foreground" />
          <b className="md:text-lg">فایل تصاویر را اینجا بکشید یا کلیک کنید</b>
          <span className="md:text-lg text-content4">
            فقط فایل JPEG پذیرفته می‌شوند (حداکثر حجم 10MB)
          </span>
          <UploadButton className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
        </label>
      </UploadDropZone>

      <div className="grid grid-cols-3 gap-4">
        {fileList.map((f) => (
          <ClientOnlyPreview key={f.id} file={f.file} name={f.name} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 z-20">
        {fileList.map((f) => (
          <div
            key={f.id}
            className="flex flex-col items-center border p-2 rounded-lg"
          >
            <span>{f.name}</span>
            <button
              onClick={() => removeFile(f.id)}
              className="mt-1 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientOnlyPreview({ file, name }: { file: File; name: string }) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (!url) return null;
  return (
    <img
      src={url}
      alt={name}
      className="w-full h-32 object-cover rounded-lg border"
    />
  );
}
