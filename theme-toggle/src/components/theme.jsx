// src/components/Theme.jsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./Infocard";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? "#1a202c" : "#f7fafc",
      }}
    >
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2 m-4"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <InfoCard darkMode={darkMode} />
    </div>
  );
};

export default Theme;
