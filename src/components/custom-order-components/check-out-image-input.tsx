"use client";

import { useState } from "react";
import Uploady from "@rpldy/uploady";
import DragDropAndPreview from "./dropzone-components/drag-drop-preview";

interface PreviewFile {
  id: string;
  name: string;
  file: File;
}

export default function CheckOutImageInput() {
  const [fileList, setFileList] = useState<PreviewFile[]>([]);

  return (
    <Uploady multiple autoUpload={false} accept="image/*">
      <DragDropAndPreview fileList={fileList} setFileList={setFileList} />
    </Uploady>
  );
}
