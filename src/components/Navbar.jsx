import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({
  darkMode,
  setDarkMode,
}) {
  return (
    <nav
      className="
      flex justify-between
      items-center
      px-6 py-4
      "
    >
      <h1
        className="
        text-2xl font-bold
        text-blue-600
        "
      >
        ImagePDF Pro
      </h1>

      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </nav>
  );
}