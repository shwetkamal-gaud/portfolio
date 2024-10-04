
import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'
import Footer from './Footer'
import Nav from './Nav'

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { mode, color, mainBgColorDark, mainBgColorLight, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
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