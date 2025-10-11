"use client";

import { createContext, useContext } from "react";
import type { DropzoneOptions } from "react-dropzone";

export type DropzoneContextType = {
  src?: File[];
  accept?: DropzoneOptions["accept"];
  maxSize?: DropzoneOptions["maxSize"];
  minSize?: DropzoneOptions["minSize"];
  maxFiles?: DropzoneOptions["maxFiles"];
};

export const DropzoneContext = createContext<DropzoneContextType | undefined>(
  undefined
);

export const useDropzoneContext = () => {
  const context = useContext(DropzoneContext);
  if (!context) {
    throw new Error("useDropzoneContext must be used within a Dropzone");
  }
  return context;
};
