import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

export default function UploadZone({ onFiles }) {

  const { getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      multiple: true,
      onDrop: (acceptedFiles) => {
        onFiles(acceptedFiles);
      },
    });

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      {...getRootProps()}
      className="
      border-2 border-dashed
      border-blue-500
      rounded-2xl
      p-12
      text-center
      cursor-pointer
      bg-white dark:bg-slate-800
      text-slate-900 dark:text-white
      shadow-lg
      "
    >
      <input {...getInputProps()} multiple />

      <h2 className="text-2xl font-bold">
        Drag & Drop Images
      </h2>

      <p className="mt-2 text-gray-500">
        Click here or drag multiple images
      </p>
    </motion.div>
  );
}
