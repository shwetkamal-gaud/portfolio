import React, { useEffect, useRef, useState } from 'react'
import { LogoImg } from '@/assets/svg'
import { useSelector } from 'react-redux'
import Typography from './Typography'
import SunIcon from '../assets/svg/SunIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DropDown from './DropDown'
import SideBar from './SideBar'
import { RootState } from '@/redux/reducers'



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

const NavBar: React.FC<RippleButtonProps> = ({ onClick }) => {
  const { mode, color, mainBgColorDark, mainBgColorLight, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
  const isDark = Boolean(mode === 'dark')
  const { routes, logoTitle } = navbarData
  const router = useRouter()
  const [isHovered, setHovered] = useState(false)
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
    <div className=''>
      <nav className="navbar navbar-expand-xl  p-0 m-0  fixed-top" style={{

        backgroundColor: isDark ? mainBgColorDark : mainBgColorLight,
      }}>
        <div className="container-fluid d-flex ">
          <a className="navbar-brand   d-flex flex-row align-items-center py-4 ps-5 gap-1 ms-5" href="#" >
            <LogoImg iconColor={isDark ? textLight : textDark} />

            <Typography>
              {logoTitle}
            </Typography>
          </a>
          <button style={{ color: isDark ? textLight : textGray, border: 'none', outline: 'none' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span style={{ color: isDark ? textLight : textGray }} className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end  flex-wrap " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center flex-wrap">
              <DropDown children={<button className='ripple-button' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                const btn = e.target as HTMLButtonElement
                const rect = btn.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                onClick && onClick(e);
              }
              }
                onMouseEnter={() => setHovered(true)}
                onMouseDown={() => setHovered(false)}
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

              }
              />
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

          </div>
        </div>
      </nav >
      <div className='d-lg-flex d-none'
        style={{ position: 'fixed', top: 50, left: 20, }}
      >
        <SideBar />
      </div>
    </div>
  )
}

export default NavBar