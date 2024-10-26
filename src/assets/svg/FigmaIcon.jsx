import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
const FigmaIcon = () => {
    const { mode, textLight, textGray } = useSelector(state => state.theme)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))
        console.log("first", mode, isDark)
    }, [mode])
    return (
        (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
                <path
                    fill={isDark ? textLight : textGray}
                    d="M16 16c0-.884.369-1.732 1.025-2.357a3.59 3.59 0 0 1 2.475-.976 3.59 3.59 0 0 1 2.475.976A3.255 3.255 0 0 1 23 16c0 .884-.369 1.732-1.025 2.357a3.59 3.59 0 0 1-2.475.976 3.59 3.59 0 0 1-2.475-.976A3.255 3.255 0 0 1 16 16Zm-7 6.667c0-.884.369-1.732 1.025-2.357a3.59 3.59 0 0 1 2.475-.977H16v3.334c0 .884-.369 1.732-1.025 2.357A3.59 3.59 0 0 1 12.5 26a3.59 3.59 0 0 1-2.475-.976A3.255 3.255 0 0 1 9 22.667ZM16 6v6.667h3.5a3.59 3.59 0 0 0 2.475-.977A3.255 3.255 0 0 0 23 9.333c0-.884-.369-1.732-1.025-2.357A3.59 3.59 0 0 0 19.5 6H16ZM9 9.333c0 .884.369 1.732 1.025 2.357a3.59 3.59 0 0 0 2.475.977H16V6h-3.5a3.59 3.59 0 0 0-2.475.976A3.255 3.255 0 0 0 9 9.333ZM9 16c0 .884.369 1.732 1.025 2.357a3.59 3.59 0 0 0 2.475.976H16v-6.666h-3.5a3.59 3.59 0 0 0-2.475.976A3.255 3.255 0 0 0 9 16Z"
                />
            </svg>
        )
    )
}
export default FigmaIcon
