import { IThemeAction } from "../../types/actionTypes";

const initialState = {
    isDark: false,
}

const LIGHT = "LIGHT";
const DARK = "DARK";

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

export const switchToLightThemeAction = () => {
    return({
        type: LIGHT,
    })
}

export const switchToDarkThemeAction = () => {
    return({
        type: DARK,
    })
}
