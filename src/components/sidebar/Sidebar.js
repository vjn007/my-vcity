import React from "react";
import { useSelector } from "react-redux";
import "../../utils/css/sideBar/sideBar.css";

const SideBar = () => {
  const { darkMode, colorTheme } = useSelector((state) => state.theme);

  return (
    <div
      className={`sidebar ${
        darkMode ? "dark-mode" : "light-mode"
      } ${colorTheme}-theme`}
    >
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default SideBar;
