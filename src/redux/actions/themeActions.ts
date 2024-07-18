
export const CHANGE_THEME = "CHANGE_THEME"
export const CHANGE_THEME_WITH_COLOR = "CHANGE_THEME_WITH_COLOR"

export const changeTheme = (payload: any) => {
    return {
        type: CHANGE_THEME,
        payload
    }
}

export const changeThemeWithColor = (payload: any) => {
    console.log("changeThemeWithColor", payload)
    return {
        type: CHANGE_THEME_WITH_COLOR,
        payload
    }
}

