"use client";

import DragDropAndPreview from "./dropzone-components/drag-drop-preview";
import Uploady from "@rpldy/uploady";
import { useState } from "react";

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
