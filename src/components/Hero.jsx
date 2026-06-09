import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      text-center
      py-24
      "
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
        text-5xl
        font-bold
        "
      >
        Convert Images
        To PDF Instantly
      </motion.h1>

      <p
        className="
        mt-6
        text-gray-500
        text-lg
        "
      >
        Free, fast and secure.
      </p>
<button
  onClick={() => {

    document
      .getElementById("upload-section")
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setTimeout(() => {
      document
        .querySelector(
          "input[type='file']"
        )
        ?.click();
    }, 500);

  }}
  className="
  mt-8
  bg-blue-600
  text-white
  px-8
  py-4
  rounded-xl
  hover:scale-105
  transition
  "
>
  Start Converting
</button>
    </section>
  );
}