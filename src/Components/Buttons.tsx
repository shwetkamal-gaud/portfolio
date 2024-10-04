
import { RootState } from "@/redux/reducers"
import React, { ReactNode, useEffect, useState } from "react"
import { useSelector } from "react-redux"


interface ButtonsInterface {
    btnTitle?: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: ReactNode

}

const Buttons = ({ btnTitle, onClick, children }: ButtonsInterface) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);
    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords])
    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    const { mode, textDark, textWhite } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    return (
        <button style={{
            '--main-color': isDark ? "#C770DB1A" : "#ABB2BF1A",
            '--third-color': isDark ? textWhite : textDark,
            '--second-color': "#C778DD",

        } as React.CSSProperties} className='bt' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const btn = e.target as HTMLButtonElement
            const rect = btn.getBoundingClientRect();
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            if (onClick) {
                onClick(e);
            }

        }}
        >
            {isRippling ? (
                <span
                    className="btripple"
                    style={{
                        left: coords.x,
                        top: coords.y
                    }}
                />
            ) : (
                ''
            )}
            {btnTitle}
            {children}
        </button>
    )
}

export default Buttons