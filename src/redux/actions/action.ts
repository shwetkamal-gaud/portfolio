import { Color } from "../reducers/themeReducer"

export const CHANGE_THEME = "CHANGE_THEME"
export const CHANGE_THEME_WITH_COLOR = "CHANGE_THEME_WITH_COLOR"

export const changeTheme = (payload: Color) => {
    return {
        type: CHANGE_THEME,
        payload
    }
}

export const changeThemeWithColor = (payload: Color) => {
    return {
        type: CHANGE_THEME_WITH_COLOR,
        payload
    }
}

