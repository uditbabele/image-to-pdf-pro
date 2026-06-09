import { FaTrash } from "react-icons/fa";

export default function ImageCard({
  image,
  index,
  removeImage,
}) {
  return (
    <div
      className="
      relative
      bg-white
      dark:bg-slate-800
      rounded-xl
      overflow-hidden
      shadow-md
      "
    >

      <div
        className="
        absolute
        top-2
        left-2
        bg-blue-600
        text-white
        px-3
        py-1
        rounded-full
        text-sm
        font-bold
        z-10
        "
      >
        Page {index + 1}
      </div>

      <img
        src={image.preview}
        alt=""
        className="
        w-full
        h-48
        object-cover
        "
      />

      <div className="p-3">

        <p
          className="
          text-sm
          truncate
          "
        >
          {image.file.name}
        </p>

      </div>

      <button
        onClick={() =>
          removeImage(index)
        }
        className="
        absolute
        top-2
        right-2
        bg-red-500
        text-white
        p-2
        rounded-full
        "
      >
        <FaTrash />
      </button>

    </div>
  );
}
