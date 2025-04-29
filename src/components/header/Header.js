import React from "react";
import ThemeControls from "../themeControls/ThemeControls";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-3 sticky-top shadow bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h2 className="navbar-brand mb-0">MyCity</h2>
        <ThemeControls />
      </div>
    </nav>
  );
};

export default Header;
