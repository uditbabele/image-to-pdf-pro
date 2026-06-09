import {
  FaCloudUploadAlt,
  FaMoon,
  FaCompress,
  FaFilePdf,
  FaMobileAlt,
  FaBolt,
} from "react-icons/fa";

export default function Features({
  darkMode,
  setDarkMode,
  setSettings,
}) {

  const handleFeature = (feature) => {

    switch (feature) {

      case "dark":
        setDarkMode(prev => !prev);
        break;

      case "compress":
        setSettings(prev => ({
          ...prev,
          quality: 0.5,
        }));
        alert(
          "Compression Enabled"
        );
        break;

      case "pdf":
        alert(
          "Upload images and click Convert To PDF"
        );
        break;

      case "upload":
        document
          .querySelector("input[type='file']")
          ?.click();
        break;

      case "mobile":
        alert(
          "This app is mobile responsive."
        );
        break;

      case "fast":
        alert(
          "Fast conversion uses client-side processing."
        );
        break;

      default:
        break;
    }
  };

  const features = [
    {
      icon: <FaCloudUploadAlt />,
      title: "Drag & Drop Upload",
      action: "upload",
    },
    {
      icon: <FaMoon />,
      title: "Dark Mode",
      action: "dark",
    },
    {
      icon: <FaCompress />,
      title: "Image Compression",
      action: "compress",
    },
    {
      icon: <FaFilePdf />,
      title: "PDF Download",
      action: "pdf",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Responsive",
      action: "mobile",
    },
    {
      icon: <FaBolt />,
      title: "Fast Conversion",
      action: "fast",
    },
  ];

  return (
    <section
      className="
      grid md:grid-cols-3
      gap-6 p-6
      "
    >
      {features.map((feature) => (
        <button
          key={feature.title}
          onClick={() =>
            handleFeature(
              feature.action
            )
          }
          className="
          bg-white
          dark:bg-slate-800
          text-slate-900
          dark:text-white
          rounded-xl
          shadow-md
          p-6
          hover:shadow-xl
          transition
          "
        >
          <div
            className="
            text-blue-600
            text-2xl
            mb-3
            "
          >
            {feature.icon}
          </div>

          <h3
            className="
            font-bold
            "
          >
            {feature.title}
          </h3>
        </button>
      ))}
    </section>
  );
}
