import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const darkMode = localStorage.getItem("darkMode") === "true";
  const colorTheme = localStorage.getItem("colorTheme") || "blue";
  return { darkMode, colorTheme };
};

const initialState = getInitialTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode);
    },
    setColorTheme: (state, action) => {
      state.colorTheme = action.payload;
      localStorage.setItem("colorTheme", state.colorTheme);
    },
  },
});

export const { toggleDarkMode, setColorTheme } = themeSlice.actions;
export default themeSlice.reducer;
