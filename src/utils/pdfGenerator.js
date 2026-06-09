import jsPDF from "jspdf";

import {
compressImage,
} from "./imageCompression";

export async function generatePDF(
images,
settings,
setProgress
) {

const pdf =
new jsPDF({
orientation:
settings.orientation,

  unit: "mm",

  format:
    settings.pageSize,
});

for (
let i = 0;
i < images.length;
i++
) {
const image =
  images[i];

const compressed =
  await compressImage(
    image.file,
    settings.quality
  );

const img =
  new Image();

img.src =
  compressed;

await new Promise(
  (resolve) => {
    img.onload =
      resolve;
  }
);

const pageWidth =
  pdf.internal.pageSize.getWidth();

const pageHeight =
  pdf.internal.pageSize.getHeight();

const margin =
  settings.margin;

const maxWidth =
  pageWidth -
  margin * 2;

const maxHeight =
  pageHeight -
  margin * 2;

const ratio =
  Math.min(
    maxWidth /
      img.width,
    maxHeight /
      img.height
  );

const width =
  img.width * ratio;

const height =
  img.height * ratio;

const x =
  (pageWidth -
    width) /
  2;

const y =
  (pageHeight -
    height) /
  2;

if (i > 0)
  pdf.addPage();

pdf.addImage(
  compressed,
  "JPEG",
  x,
  y,
  width,
  height
);

setProgress(
  Math.round(
    ((i + 1) /
      images.length) *
      100
  )
);

}

pdf.save(
"images.pdf"
);
}
