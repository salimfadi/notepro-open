import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

export default function PDFViewer({ file }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const typedArray = new Uint8Array(e.target.result);
      pdfjsLib.getDocument(typedArray).promise.then(pdf => {
        pdf.getPage(1).then(page => {
          const viewport = page.getViewport({ scale: 1.2 });
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          page.render({ canvasContext: context, viewport: viewport });
        });
      });
    };
    reader.readAsArrayBuffer(file);
  }, [file]);

  return <canvas ref={canvasRef} className="border rounded" />;
}
