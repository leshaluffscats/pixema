import { LIGHT, DARK } from './themeReducer';

export const switchToLightThemeAction = () => {
    return ({
        type: LIGHT,
    })
}

export const switchToDarkThemeAction = () => {
    return ({
        type: DARK,
    })
}