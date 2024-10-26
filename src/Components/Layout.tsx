
import React, { ReactNode, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'
import Footer from './Footer'
import Nav from './Nav'

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { mode, mainBgColorDark, mainBgColorLight } = useSelector((state: RootState) => state.theme)
    const [isDark, setIsDark] = useState<boolean>(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))

    }, [mode])
    return (
        <>
            <Nav />
            <main
                className={'main p-2 pr-3 mt-5 w-100 '}
                style={{ backgroundColor: isDark ? mainBgColorDark : mainBgColorLight }}
            >
                <div className='ps-xs-2 ps-md-4 mt-3' >
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout