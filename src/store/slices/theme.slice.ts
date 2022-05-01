import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum EnumThemeOptions {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
    TOGGLE = 'TOGGLE'
}
export interface IThemeState {
    darkMode: EnumThemeOptions;
}

const initialState: IThemeState = {
    darkMode: EnumThemeOptions.LIGHT
};


const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state, action: PayloadAction<EnumThemeOptions>) {

            switch (action.payload) {
                case EnumThemeOptions.LIGHT: state.darkMode = EnumThemeOptions.LIGHT;
                    break;
                case EnumThemeOptions.DARK:
                    state.darkMode = EnumThemeOptions.DARK;
                    break;
                case EnumThemeOptions.TOGGLE:
                    state.darkMode = (state.darkMode === EnumThemeOptions.DARK ? EnumThemeOptions.LIGHT: EnumThemeOptions.DARK);
                    break;
                default:
                    state.darkMode = EnumThemeOptions.LIGHT;
                    break;
            }
            return state;
        }
    }
})

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice;