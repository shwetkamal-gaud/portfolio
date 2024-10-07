import { changeThemeWithColor } from '@/redux/actions/action';
import { RootState } from '@/redux/reducers';
import { Color } from '@/redux/reducers/themeReducer';
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const DropDown = ({ children }: { children: ReactNode }) => {
    const [listOpen, setListOpen] = useState<boolean>()
    const listRef = useRef<HTMLDivElement>(null);
    const { color } = useSelector((state: RootState) => state.theme)
    const [selectedIndex, setSelectedIndex] = useState(0);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (listRef.current && !listRef.current.contains(event.target as Node)) {
                setListOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [listRef])
    const handleClose = () => {
        setListOpen(false)
    }
    const dispatch = useDispatch()
    const toggleList = () => {
        setListOpen(prev => (!prev))
    }
    return (
        <div ref={listRef} className="dd-wrapper nav-item">
            <div className="dd-header" style={{ cursor: 'pointer' }} onClick={() => toggleList()}>
                {children}
            </div>
            {listOpen && <ul className="dd-list  p-3 justify-content-center  gap-3 card shadow rounded " style={{ width: '10.4rem', listStyleType: 'none', position: 'absolute', border: 0, }}>
                {color.map((item: Color) => (
                    <li onClick={() => {
                        dispatch(changeThemeWithColor(item))
                        handleClose()
                        setSelectedIndex(item.id)
                    }} className="dd-list-item  p-2 text-center " style={{ cursor: 'pointer', backgroundColor: item.bgColor, color: item.textLight, borderLeft: selectedIndex === item.id ? `4px solid #f44336` : "none", }} key={item.id} >{item.name}</li>
                ))}
            </ul>}
        </div>
    )
}

export default DropDown