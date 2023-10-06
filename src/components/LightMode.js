import React from "react";
import { ReactComponent as Sun } from "../images/Sun.svg";
import { ReactComponent as Moon } from "../images/Moon.svg";
import "../css/LightMode.css";

const LightMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    setLightMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setLightMode();
    else setDarkMode();
  };
  return (
    <div className="light_mode">
      <input
        className="light_mode_input"
        type="checkbox"
        id="lightmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "light"}
      />
      <label className="light_mode_label" for="lightmode-toggle">
        <Moon />
        <Sun />
      </label>
    </div>
  );
};

export default LightMode;
