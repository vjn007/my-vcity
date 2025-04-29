import React from "react";
import { useSelector } from "react-redux";
import "../../utils/css/footer/footer.css";

const Footer = () => {
  const { darkMode, colorTheme } = useSelector((state) => state.theme);

  return (
    <footer
      className={`footer ${
        darkMode ? "dark-mode" : "light-mode"
      } ${colorTheme}-theme`}
    >
      <p>© 2025 MyCity. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
