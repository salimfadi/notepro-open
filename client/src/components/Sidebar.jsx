import { useState } from "react";
import { useDropzone } from "react-dropzone";
import PDFViewer from "./PDFViewer";

export default function Sidebar() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => setFiles([...files, ...acceptedFiles])
  });

  return (
    <div className="w-72 bg-white border-r border-gray-200 p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-4">Notebook</h1>
      <div {...getRootProps()} className="mb-4 p-3 border border-dashed rounded cursor-pointer hover:bg-gray-50">
        <input {...getInputProps()} />
        + Ajouter un document
      </div>
      <div className="flex-1 overflow-y-auto space-y-2">
        {files.map((file, i) => (
          <div key={i} className="border p-2 rounded hover:bg-gray-100">
            {file.name}
            <PDFViewer file={file} />
          </div>
        ))}
      </div>
    </div>
  );
}
