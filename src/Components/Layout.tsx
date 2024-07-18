import React, { ReactNode } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { Box, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';

interface LayoutProps {
    children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { mode, color, mainBgColorDark, mainBgColorLight, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    return (
        <><NavBar />
            <Box component="main" sx={{
                p: 2,
                pr: 3,
                backgroundColor: isDark ? mainBgColorDark : mainBgColorLight,
                width: '100%',

            }}>
                <Toolbar />
                <Box
                    sx={{
                        pl: {
                            xs: 4,
                            md: 8,
                        }
                    }}
                >
                    {children}
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Layout