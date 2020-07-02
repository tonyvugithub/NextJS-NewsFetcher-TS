import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light',
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode == 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeMode = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
