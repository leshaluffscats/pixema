import { IThemeAction } from "../../../types/actionTypes";

const initialState = {
    isDark: false,
}

export const LIGHT = "LIGHT";
export const DARK = "DARK";

export const themeReducer = (state = initialState, action: IThemeAction) => {
    switch(action.type){
        case LIGHT: return {
            ...state,
            isDark: false,
        };
        case DARK: return {
            ...state,
            isDark: true,
        };
        default: return state;
    }
}


