import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle({
  darkMode,
  setDarkMode,
}) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
      p-2 rounded-full
      bg-white text-black
      shadow-lg
      "
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}