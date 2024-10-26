import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
const TwitterIcon = () => {
    const { mode, textLight, textGray } = useSelector(state => state.theme)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))

    }, [mode])
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
            <path
                fill={isDark ? textLight : textGray}
                d="M11.225 26c8.68 0 13.428-7.312 13.428-13.641 0-.205 0-.412-.01-.617A9.7 9.7 0 0 0 27 9.255a9.448 9.448 0 0 1-2.715.757 4.81 4.81 0 0 0 2.08-2.656 9.298 9.298 0 0 1-3 1.16 4.7 4.7 0 0 0-2.678-1.452 4.656 4.656 0 0 0-2.994.504 4.771 4.771 0 0 0-2.075 2.252 4.876 4.876 0 0 0-.298 3.07 13.234 13.234 0 0 1-5.387-1.454 13.45 13.45 0 0 1-4.34-3.557 4.876 4.876 0 0 0-.514 3.497 4.808 4.808 0 0 0 1.977 2.908 4.717 4.717 0 0 1-2.136-.597v.066a4.855 4.855 0 0 0 1.068 3.037 4.714 4.714 0 0 0 2.715 1.666c-.404.113-.823.17-1.243.168-.296 0-.592-.027-.883-.083a4.796 4.796 0 0 0 1.68 2.383 4.67 4.67 0 0 0 2.73.945A9.372 9.372 0 0 1 4 23.858 13.272 13.272 0 0 0 11.225 26Z"
            />
        </svg>
    )
}
export default TwitterIcon
