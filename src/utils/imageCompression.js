export const compressImage = (
file,
quality = 0.8
) => {
return new Promise((resolve) => {
const img = new Image();

img.src =
  URL.createObjectURL(file);

img.onload = () => {

  const canvas =
    document.createElement(
      "canvas"
    );

  const ctx =
    canvas.getContext("2d");

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(
    img,
    0,
    0
  );

  canvas.toBlob(
    (blob) => {

      const compressed =
        URL.createObjectURL(
          blob
        );

      resolve(compressed);

    },
    "image/jpeg",
    quality
  );
};

});
};
