"use client"
import { DropzoneContext } from "@/app/hooks/useDropzoneContext";
import { cn } from "@heroui/theme";
import { ReactNode } from "react";
import {
  DropEvent,
  DropzoneOptions,
  FileRejection,
  useDropzone,
} from "react-dropzone";

export type DropzoneProps = Omit<DropzoneOptions, "onDrop"> & {
  src?: File[] ;
  className?: string;
  onDrop?: (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
  children?: ReactNode;
};

export const Dropzone = ({
  accept,
  maxFiles = 1,
  maxSize,
  minSize,
  onDrop,
  onError,
  disabled,
  src,
  className,
  children,
  ...props
}: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxFiles,
    maxSize,
    minSize,
    onError,
    disabled,
    onDrop: (acceptedFiles, fileRejections, event) => {
      if (fileRejections.length > 0) {
        const message = fileRejections.at(0)?.errors.at(0)?.message;
        onError?.(new Error(message));
        return;
      }
      onDrop?.(acceptedFiles, fileRejections, event);
    },
    ...props,
  });
  return (
    <DropzoneContext.Provider
      key={JSON.stringify(src)}
      value={{ src, accept, maxSize, minSize, maxFiles }}
    >
      <button
        className={cn(
          "relative h-auto w-full flex-col overflow-hidden p-8",
          isDragActive && "outline-none ring-1 ring-ring",
          className
        )}
        disabled={disabled}
        type="button"
        {...getRootProps()}
      >
        <input {...getInputProps()} disabled={disabled} />
        {children}
      </button>
    </DropzoneContext.Provider>
  );
};
