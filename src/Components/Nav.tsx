import { RootState } from '@/redux/reducers'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { LinkDinIcon, LogoImg, SunIcon } from '@/assets/svg'
import Typography from './Typography'
import Link from 'next/link'
import DropDown from './DropDown'
import { EmailIcon, GithubIcon } from "../assets/svg";
import HackerRank from '@/assets/svg/HackerRank'
import LeetCode from '@/assets/svg/LeetCode'

const sidebarData = [

    {
        name: 'github',
        icon: <GithubIcon />,
        link: "https://github.com/mrskg0438",
        id: 1
    },
    {
        name: 'email',
        icon: <EmailIcon />,
        link: "mailto: gaudshwetkamal0438@gmail.com",
        id: 2
    },
    {
        name: 'linkedin',
        icon: <LinkDinIcon />,
        link: "https://linkedin.com/in/shwetkamalgaud",
        id: 3
    },
    {
        name: 'hackerrank',
        icon: <HackerRank />,
        link: "https://www.hackerrank.com/profile/Shwetkamal",
        id: 4
    },
    {
        name: 'leetcode',
        icon: <LeetCode />,
        link: "https://leetcode.com/u/mr_shwetkamal/",
        id: 5
    },

]


const SideBar = () => {
    return (
        <div className="d-flex align-items-center justify-content-center  w-100 pt-4 ">
            <div className="d-flex flex-column  align-items-center gap-2" style={{ width: '35%' }}>
                <div className="d-none d-lg-block" style={{ display: "block", width: '2px', height: 240, backgroundColor: '#ABB2BF' }}></div>
                <div className="d-flex flex-lg-column flex-row gap-2">
                    {
                        sidebarData.map((item) => (
                            <a className="sidebar" key={item.id} href={item.link} rel="noreferrer" target="_blank">{item.icon}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

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
    const offcanvasRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {

            import('bootstrap/dist/js/bootstrap').then(({ Offcanvas }) => {
                if (offcanvasRef.current) {
                    const bsOffcanvas = Offcanvas.getInstance(offcanvasRef.current) || new Offcanvas(offcanvasRef.current);
                    const handleCloseOffcanvas = () => {
                        bsOffcanvas.hide();
                    };
                    document.querySelectorAll('.drawer-link').forEach((link) => {
                        link.addEventListener('click', handleCloseOffcanvas);
                    });
                }
            });
        }
    }, [offcanvasRef]);


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

            < nav className={isDark ? 'navbar navbar-dark navbar-expand-lg fixed-top' : `navbar navbar-expand-lg fixed-top navbar-light`} style={{

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
                    <div ref={offcanvasRef} className="sidenav offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
                        style={{
                            '--main-color': isDark ? mainBgColorDark : mainBgColorLight,


                        } as React.CSSProperties}
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title d-flex justify-content-center align-items-center gap-1 " id="offcanvasNavbarLabel">
                                <LogoImg iconColor={isDark ? textLight : textDark} /><Typography>{logoTitle}</Typography></h5>
                            <button type="button" style={{ '--main-op': isDark ? 0.9 : 5 } as React.CSSProperties} className="btn-close border-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>

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
                                        style={{
                                            color: router.pathname === item.path ? (isDark ? '#fff' : '#000') : isDark ? textLight : textDark,
                                            fontFamily: 'FiraCode',
                                            fontWeight: router.pathname === item.path ? 600 : 400,
                                            padding: '0.5rem 1rem',
                                            textDecoration: 'none',
                                        }}
                                        className="drawer-link nav-item"
                                    >


                                        <span style={{ color: '#C778DD' }}>#</span>
                                        <span className={router.pathname === item.path || !isDark ? '' : 'hoverSpan'}>{item.name}</span>

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