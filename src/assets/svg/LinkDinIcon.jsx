import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
const LinkDinIcon = () => {
    const { mode, textLight, textGray } = useSelector(state => state.theme)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))

    }, [mode])
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
            <path
                fill={isDark ? textLight : textGray}
                d="M4 5.719C4 4.769 4.789 4 5.763 4h20.475C27.21 4 28 4.77 28 5.719v20.562c0 .95-.789 1.719-1.762 1.719H5.762C4.79 28 4 27.23 4 26.281V5.719Zm7.415 18.372V13.253H7.813v10.838h3.602Zm-1.8-12.318c1.255 0 2.037-.831 2.037-1.872-.023-1.063-.78-1.872-2.013-1.872-1.233 0-2.039.81-2.039 1.872 0 1.041.782 1.872 1.99 1.872h.024Zm7.362 12.318v-6.053c0-.323.023-.648.12-.878.259-.647.851-1.318 1.848-1.318 1.303 0 1.823.993 1.823 2.452v5.797h3.602v-6.216c0-3.33-1.776-4.878-4.146-4.878-1.911 0-2.768 1.05-3.247 1.79v.037h-.024c.008-.012.015-.025.024-.037v-1.534h-3.6c.044 1.018 0 10.838 0 10.838h3.6Z"
            />
        </svg>
    )
}
export default LinkDinIcon
