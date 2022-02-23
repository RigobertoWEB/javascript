import { createContext, useState } from "react";

const ThemeContextMenu = createContext();

const initialTheme = localStorage.getItem("themeMenu");

const ThemeProvider = ({ children }) => {
  const [themeMenu, setThemeMenu] = useState(initialTheme);
  const [icono, setIcono] = useState("🌙");

  const lightMode = () => {
    setThemeMenu("light");
    localStorage.setItem("theme", "light");
  };

  const darkMode = () => {
    setThemeMenu("dark");
    localStorage.setItem("theme", "dark");
  };

  const handleThemeMenu = (e) => {
    const navbar = document.getElementById("modo-oscuro");

    if (themeMenu === "light" && icono === "🌙") {
      darkMode();
    }
    if ((themeMenu === "dark", icono === "☀️")) {
      lightMode();
    }
  };

  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("themeMenu") === null)
      localStorage.setItem("themeMenu", "light");

    if (localStorage.getItem("themeMenu") === "light") {
      lightMode();
    }
    if (localStorage.getItem("themeMenu") === "dark") {
      darkMode();
    }
  });

  const data = { themeMenu, handleThemeMenu };
  return <ThemeContextMenu.Provider value={data}>{children}</ThemeContextMenu.Provider>;
};

export { ThemeProvider };

export default ThemeContextMenu;
