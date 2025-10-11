import { useBatchAddListener } from "@rpldy/uploady";
import { CameraIcon, PlusIcon } from "@heroicons/react/24/outline";
import { cn } from "@heroui/theme";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadButton from "@rpldy/upload-button";
import DropzoneImagePreview from "./dropzone-image-preview";

interface PreviewFile {
  id: string;
  name: string;
  file: File;
}

export default function DragDropAndPreview({
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
        return {
          id: item.id,
          name: file.name,
          file,
        };
      })
      .filter(Boolean) as PreviewFile[];

    setFileList((prev) => {
      const remainingSlots = 4 - prev.length;
      if (remainingSlots <= 0) {
        return prev;
      }

      const limitedFiles = newFiles.slice(0, remainingSlots);
      return [...prev, ...limitedFiles];
    });
  });

  const removeFile = (id: string) => {
    setFileList((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 relative h-auto">
      <UploadDropZone className="flex w-full h-60 rounded-2xl text-center flex-col bg-background justify-center items-center border border-foreground/20 gap-3 shadow cursor-pointer">
        <UploadButton
          className={cn(
            "flex flex-col items-center gap-3 absolute inset-0 justify-center",
            fileList.length > 0 && "opacity-25",
            fileList.length >= 4 && "pointer-events-none opacity-25"
          )}
        >
          <CameraIcon className="h-12 w-12 text-foreground" />
          <b className="md:text-lg">فایل تصاویر را اینجا بکشید یا کلیک کنید</b>
          <span className="md:text-lg text-foreground/35">
            هر نوع تصویر پذیرفته می‌شود (حداکثر حجم 10MB)
          </span>
        </UploadButton>

        <div className="w-full h-full flex items-center gap-4 p-10 max-md:justify-center">
          {fileList.map((f) => (
            <DropzoneImagePreview
              key={f.id}
              file={f.file}
              name={f.name}
              onRemove={removeFile}
              id={f.id}
            />
          ))}

          {fileList.length > 0 && fileList.length < 4 && (
            <UploadButton className="w-32 h-32 rounded-lg text-foreground/30 border-dotted border-3 border-foreground/30 flex items-center justify-center max-md:hidden">
              <PlusIcon className="size-14" />
            </UploadButton>
          )}
        </div>
      </UploadDropZone>
    </div>
  );
}
