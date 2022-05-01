import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme.slice";

export const RootReducer = combineReducers({
    themes: themeSlice.reducer
});

export type RootState = ReturnType<typeof RootReducer>;

export const selectTheme = (state: RootState)=> state.themes;