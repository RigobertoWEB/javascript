import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = localStorage.getItem("theme");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);
  const [icono, setIcono] = useState("🌙");
  const [themeMenu, setThemeMenu] = useState("menuLight");
  const [burgerMenu, setBurgerMenu] = useState("burgerMenuLight");

  const lightMode = () => {
    setTheme("light");
    setIcono("🌙");
    setThemeMenu("menuLight");
    setBurgerMenu("burgerMenuLight");
    localStorage.setItem("theme", "light");
  };

  const darkMode = () => {
    setTheme("dark");
    setIcono("☀️");
    setThemeMenu("menuDark")
    setBurgerMenu("burgerMenuDark");
    localStorage.setItem("theme", "dark");
  };

  const handleTheme = (e) => {
    const navbar = document.getElementById("modo-oscuro");

    if (theme === "light" && icono === "🌙") {
      darkMode();
    }
    if ((theme === "dark", icono === "☀️")) {
      lightMode();
    }
  };

  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.getItem("theme") === "light") {
      lightMode();
    }
    if (localStorage.getItem("theme") === "dark") {
      darkMode();
    }
  });
  // const handleTheme = (e) => {
  //   const navbar = document.getElementById('modo-oscuro')

  //   if (theme === 'light' && icono === '🌙') {
  //     setTheme('dark')
  //     setIcono('☀️')
  //   } else if ((theme === 'dark', icono === '☀️')) {
  //     setTheme('light')
  //     setIcono('🌙')
  //   }
  // }

  // const [theme, setTheme] = useState(initialTheme);

  // const handleTheme = (e) => {
  //     console.log(e.target.value);
  //     if(e.target.value === "light"){
  //         setTheme("light");
  //     }else {
  //         setTheme("dark");
  //     }
  // };

  const data = { theme, icono, themeMenu, burgerMenu, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };

export default ThemeContext;
