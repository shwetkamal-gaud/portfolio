import React, { MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers';

interface TypographyInterface {
    children?: ReactNode
    text?: string
    color?: string
    fontWeight?: number
    fontSize?: string | number
    fontFamily?: string
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
    bB?: string | number
    p?: string | number
    cursor?: string
    onMouseOver?: MouseEventHandler<HTMLParagraphElement>
    onMouseLeave?: MouseEventHandler<HTMLParagraphElement>
    onClick?: MouseEventHandler<HTMLDivElement>
}

const Typography: React.FC<TypographyInterface> = ({ children, text, color, fontWeight, fontSize, textAlign, bB, p, cursor, onMouseOver, onMouseLeave, onClick }) => {
    const { mode, textDark, textLight, } = useSelector((state: RootState) => state.theme)
    const [isDark, setIsDark] = useState<Boolean>(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))
        console.log("first", mode, isDark)
    }, [mode])

    return (
        <div className='d-flex align-items-center justify-content-start ' onClick={onClick} >
            <h5 className='mb-0 ' style={{
                gap: 2,
                fontFamily: "FiraCode", fontWeight: fontWeight ? fontWeight : 800,
                fontSize: fontSize ? fontSize : '1rem', color: color ? color : isDark ? textLight : textDark,
                textAlign: textAlign ? textAlign : 'start', borderBottom: bB ? bB : '', padding: p && p,
                cursor: cursor ? cursor : ''


            }} onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
            >
                {text}{children}
            </h5>
        </div>
    )
}

export default Typography