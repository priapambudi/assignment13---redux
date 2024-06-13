import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isdarkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isdarkMode = !state.isdarkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.isdarkMode));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
