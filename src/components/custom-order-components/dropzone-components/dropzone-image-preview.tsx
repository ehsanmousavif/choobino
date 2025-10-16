import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

interface DropzoneImagePreviewProp {
  file: File;
  name: string;
  onRemove: (id: string) => void;
  id: string;
}
export default function DropzoneImagePreview({
  file,
  name,
  onRemove,
  id,
}: DropzoneImagePreviewProp) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (!url) return null;
  return (
    <div className="relative w-16 h-16 md:w-32 md:h-32">
      <Image
        fill
        src={url}
        alt={name}
        className="object-cover rounded-lg bg-foreground/10"
      />
      <button
        onClick={() => onRemove(id)}
        className="bg-danger-700 flex items-center justify-center rounded-full w-7 h-7 cursor-pointer text-background z-20 absolute -right-3.5 -top-3.5"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
