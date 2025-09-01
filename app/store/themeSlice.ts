import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeType = {
  currentTheme: string;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: { currentTheme: "light" },
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload.currentTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
