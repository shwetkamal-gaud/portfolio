import { RootState } from '@/redux/reducers'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { LogoImg, SunIcon } from '@/assets/svg'
import Typography from './Typography'
import Link from 'next/link'
import DropDown from './DropDown'
import SideBar from './Sidebar'


const navbarData = {
    routes: [
        {
            id: 1,
            name: "home",
            path: "/",
        }, {
            id: 2,
            name: "about_me",
            path: "/about",
        },
        {
            id: 3,
            name: "projects",
            path: "/projects",
        },
        {
            id: 4,
            name: "experience",
            path: "/experience",
        },
        {
            id: 5,
            name: "certificates",
            path: "/certificates",

        },
        {
            id: 6,
            name: "education",
            path: "/education",
        },
        {
            id: 7,
            name: "contact",
            path: "/contacts",
        }
    ],

    logoTitle: "Shwetkamal Gaud",
}
interface RippleButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Nav: React.FC<RippleButtonProps> = ({ onClick }) => {
    const { mode, mainBgColorDark, mainBgColorLight, textDark, textLight } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { routes, logoTitle } = navbarData
    const router = useRouter()
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (listRef.current && !listRef.current.contains(event.target as Node)) {
                // setListOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [listRef])


    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords])
    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    return (
        <>

            < nav className="navbar navbar-expand-lg fixed-top" style={{

                backgroundColor: isDark ? mainBgColorDark : mainBgColorLight,
            }}>
                <div className="container-fluid px-4">
                    <a className="navbar-brand   d-flex flex-row align-items-center gap-1" href="#" >
                        <LogoImg iconColor={isDark ? textLight : textDark} />

                        <Typography>
                            {logoTitle}
                        </Typography>
                    </a>
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="sidenav offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
                        style={{
                            '--main-color': isDark ? mainBgColorDark : mainBgColorLight,


                        } as React.CSSProperties}
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title d-flex justify-content-center align-items-center gap-1 " id="offcanvasNavbarLabel">
                                <LogoImg iconColor={isDark ? textLight : textDark} /><Typography>{logoTitle}</Typography></h5>
                            <button type="button" className="btn-close border-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                        </div>
                        <div className="offcanvas-body d-flex flex-column justify-content-between justify-content-lg-end">
                            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center justify-content-lg-end flex-wrap">
                                <DropDown>
                                    <button className='ripple-button' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                        const btn = e.target as HTMLButtonElement
                                        const rect = btn.getBoundingClientRect();
                                        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                                        if (onClick) {

                                            onClick(e);
                                        }
                                    }
                                    }

                                    >
                                        {isRippling ? (
                                            <span
                                                className="ripple"
                                                style={{
                                                    left: coords.x,
                                                    top: coords.y
                                                }}
                                            />
                                        ) : (
                                            ''
                                        )}
                                        <SunIcon iconColor={isDark ? textLight : textDark} />
                                    </button>
                                </DropDown>
                                {routes.map((item) => (
                                    <Link
                                        href={item.path}
                                        key={item.id}
                                        style={(router.pathname === item.path ?
                                            {
                                                color: isDark ? '#fff' : '#000',
                                                fontFamily: "FiraCode",
                                                fontWeight: 600,
                                                padding: "0.5rem 1rem",
                                                textDecoration: 'none'
                                            }
                                            : {
                                                color: isDark ? textLight : textDark,
                                                fontFamily: "FiraCode",
                                                fontWeight: 400,
                                                padding: "0.5rem 1rem",
                                                textDecoration: 'none'


                                            })}
                                        className='drawer-link nav-item'

                                    >
                                        <span
                                            style={{
                                                color: "#C778DD"
                                            }}
                                        >
                                            #
                                        </span>
                                        <span
                                            className={(router.pathname === item.path || !isDark ? '' : 'hoverSpan')}
                                        >{item.name}
                                        </span>
                                    </Link>
                                ))}

                            </ul>
                            <div className='d-lg-none d-flex align-items-center justify-content-center'><SideBar /></div>
                        </div>
                    </div>
                </div>
            </nav >
            <div className='d-lg-flex d-none'
                style={{ position: 'fixed', top: 50, left: 20, zIndex: 3 }}
            >
                <SideBar />
            </div>
        </>
    )
}

export default Nav