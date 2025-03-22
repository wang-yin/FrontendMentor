import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ExtensionList from "./components/ExtensionList";

function App() {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme)

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("Theme", theme)
  }, [theme])

  return (
    <>
      <div className={`header ${theme}`}>
        <Logo theme={theme}/>
        <ThemeSwitcher theme={theme} setTheme={setTheme}/>
      </div>
      <div className="content">
        <h1 className={`title ${theme}-mode-title`}>Extensions List</h1>
        <div className="filter-buttons">
          <button className={`filter-btn ${theme}-mode-btn`}>All</button>
          <button className={`filter-btn ${theme}-mode-btn`}>Active</button>
          <button className={`filter-btn ${theme}-mode-btn`}>Inactive</button>
        </div>
      </div>
      <div className="manager-container">
        <ExtensionList theme={theme}/>
      </div>
    </>
  );
}

export default App;


