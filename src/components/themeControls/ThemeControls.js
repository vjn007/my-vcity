import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, setColorTheme } from "../../redux/slices/themeSlice";

const ThemeControls = () => {
  const dispatch = useDispatch();
  const { darkMode, colorTheme } = useSelector((state) => state.theme);

  return (
    <div className="d-flex gap-3 align-items-center">
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => dispatch(toggleDarkMode())}
      >
        {darkMode ? "☀" : "🌙"}
      </button>

      <select
        value={colorTheme}
        onChange={(e) => dispatch(setColorTheme(e.target.value))}
        className="form-select form-select-sm"
        style={{ width: "120px" }}
      >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  );
};

export default ThemeControls;
