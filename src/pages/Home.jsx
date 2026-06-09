import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

import UploadZone from "../components/UploadZone";
import ImageGrid from "../components/ImageGrid";

import PdfSettings from "../components/PdfSettings";
import ProgressBar from "../components/ProgressBar";
import ConvertButton from "../components/ConvertButton";

import useDarkMode from "../hooks/useDarkMode";

import { generatePDF } from "../utils/pdfGenerator";
import Footer from "../components/Footer";
import LoadingOverlay from "../components/LoadingOverlay";

import toast from
"react-hot-toast";

export default function Home() {
  const [darkMode, setDarkMode] = useDarkMode();

  const [images, setImages] = useState([]);

  const [loading,setLoading] = useState(false);


  const [progress, setProgress] = useState(0);

  const [settings, setSettings] =
  useState({
  pageSize: "a4",
  orientation: "portrait",
  quality: 0.8,
  margin: 5,
  });


  const handleFiles = (files) => {

  const newImages = files.map(
    (file) => ({
      id: crypto.randomUUID(),
      file,
      preview:
        URL.createObjectURL(file),
    })
  );

  setImages((prev) => [
    ...prev,
    ...newImages,
  ]);
}; 

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleConvert = async () => {
  try {
    setLoading(true);

    await generatePDF(
      images,
      settings,
      setProgress
    );

  } catch (error) {

    console.error(
      "PDF Error:",
      error
    );

    alert(error.message);

  } finally {

    setLoading(false);

  }
};
  return (
    <div
      className="min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-white">
    
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
     <div
     id="upload-section"
     className="container mx-auto p-6"
     >


        <UploadZone
          onFiles={handleFiles}
        />

        {images.length > 0 && (
          <>
            <div
            className="
            bg-white
            dark:bg-slate-800
            rounded-xl
            shadow-md
            p-4
            mb-4
            flex
            justify-between
            "
            >
            <span>
            Images: {images.length}
            </span>

            <span>
            PDF Pages: {images.length}
            </span>
            </div>
            <ImageGrid
              images={images}
              setImages={setImages}
              removeImage={removeImage}
            />

            <PdfSettings
              settings={settings}
              setSettings={setSettings}
            />

            <ConvertButton
              disabled={images.length === 0}
              onClick={handleConvert}
            />

            <ProgressBar
              progress={progress}
            />
          </>
        )}
        <LoadingOverlay show={loading}/>

      </div>

      <Features
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      setSettings={setSettings}
      />
      <Footer />
    </div>
  );
}

