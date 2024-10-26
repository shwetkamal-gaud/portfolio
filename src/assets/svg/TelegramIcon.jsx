import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
const TelegramIcon = () => {
    const { mode, textLight, textGray } = useSelector(state => state.theme)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))
        console.log("first", mode, isDark)
    }, [mode])
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
            <path
                fill={isDark ? textLight : textGray}
                d="M27 15.5a11.5 11.5 0 1 1-23 0 11.5 11.5 0 0 1 23 0Zm-11.087-3.01a557.091 557.091 0 0 0-6.708 2.89c-.543.215-.83.428-.855.635-.043.349.395.487.992.675l.251.08c.587.19 1.377.413 1.787.422.374.009.79-.144 1.248-.46 3.132-2.115 4.75-3.183 4.85-3.206.072-.017.172-.037.239.023s.06.173.053.203c-.043.185-1.764 1.784-2.654 2.612-.277.259-.474.441-.514.483-.09.09-.18.18-.27.267-.547.526-.955.92.02 1.564.47.31.848.565 1.223.821.408.279.816.556 1.345.904.134.087.263.18.388.27.476.338.906.643 1.434.594.307-.029.625-.316.786-1.178.38-2.037 1.13-6.45 1.302-8.268.01-.15.005-.303-.018-.452a.485.485 0 0 0-.164-.312.756.756 0 0 0-.446-.134c-.431.007-1.097.239-4.29 1.567Z"
            />
        </svg>
    )
}
export default TelegramIcon
