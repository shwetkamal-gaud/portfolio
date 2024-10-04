import React from 'react'
import { FigmaIcon, GithubIcon, LinkDinIcon, LogoImg, TelegramIcon, TwitterIcon } from '@/assets/svg'
import logo from "../assets/images/logo.png";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import Typography from './Typography';
import Link from 'next/link';


const footerData = {
    socials: [
        {
            id: 1,
            name: 'github',
            link: "https://github.com/mrskg0438",
            img: <GithubIcon />
        },
        {
            id: 2,
            name: 'linkedin',
            link: "https://www.linkedin.com/in/shwetkamalgaud/",
            img: <LinkDinIcon />
        },
        {
            id: 3,
            name: 'telegram',
            link: "https://t.me/mrskg0438",
            img: <TelegramIcon />
        },
        {
            id: 4,
            name: 'twitter',
            link: "https://x.com/GaudShwetkamal",
            img: <TwitterIcon />
        },
    ],
    socialsTitle: "Social Media",
    discription: `Frontend Engineer, React Native developer & Penetration Tester `,
    link: 'https://portfolio-gaud-shwetkamal-kamlesh-kumars-projects.vercel.app/',
    copyRight: 'Shwetkamal Gaud. All rights reserved.',
    logo: logo,
    logoTitle: 'Shwetkamal Gaud',
    refText: 'Special Thanks to Elias Dev for sharing this UI/UX design with Figma Community',

}

const Footer = () => {
    const { mode, textDark, textLight, textGray, mainBgColorDark, mainBgColorLight } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { socials, socialsTitle, discription, link, copyRight, logoTitle,
        refText } = footerData;
    return (
        <div className='px-3 w-100' style={{ backgroundColor: isDark ? mainBgColorDark : mainBgColorLight, }}>
            <div className='d-flex py-5 flex-column justify-content-center align-itesm-center'
                style={{
                    borderTop: '1px solid #ABB2BF',

                }}
            >
                <div className=' row text-center  '
                >
                    <div className='item  col-xs-12 col-md-6'

                    >
                        <div className='d-flex flex-column gap-4 justify-content-center align-items-center'

                        >
                            <div className='d-flex justify-content-center align-items-center flex-row gap-5'

                            >
                                <Link className='d-flex flex-row   gap-1'

                                    href="/"
                                    style={{
                                        textDecoration: 'none',
                                        cursor: "pointer",
                                        alignItems: 'center'
                                    }}
                                >
                                    <LogoImg
                                        iconColor={isDark ? textLight : textDark}
                                    />
                                    <Typography>
                                        {logoTitle}
                                    </Typography>
                                </Link>
                                <a style={{ textAlign: 'start', textDecoration: 'none', fontSize: "18px", fontWeight: 400, color: isDark ? textLight : textGray }}

                                    href="/"
                                    target="_blank"
                                >
                                    {link}
                                </a>
                            </div>

                            <Typography
                                fontSize="18px"
                                fontWeight={400}
                                textAlign={'center'}
                            >
                                {discription}
                            </Typography>
                        </div>
                    </div>

                    <div className='item col-xs-12 col-md-6'>
                        <div className='d-flex flex-column align-items-center justify-content-center'
                        >
                            <Typography>
                                {socialsTitle}
                            </Typography>
                            <div className='d-flex  py-1 gap-1'
                            >
                                {
                                    socials.map((item) => {
                                        return (
                                            <a className="sidebar" key={item.id} href={item.link} rel="noreferrer" target="_blank">{item.img}</a>
                                        )
                                    })
                                }


                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                {
                                    refText && (
                                        <>
                                            <Typography
                                                fontSize="12px"
                                                fontWeight={400}
                                                color={isDark ? textLight : textGray}
                                                textAlign={'start'}
                                            >
                                                {refText}
                                            </Typography>
                                            <div>
                                                <a
                                                    className="sidebar" rel="noreferrer" target="_blank"
                                                    href={"https://www.figma.com/community/file/1164933568884615740"}

                                                >
                                                    <FigmaIcon />
                                                </a>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center py-5'>
                    <Typography
                        fontSize="12px"
                        fontWeight={400}
                        color={isDark ? textLight : textGray}
                    >
                        ©{' '}
                        {
                            new Date().getFullYear()
                        }
                        {' '}
                        {copyRight}
                    </Typography>
                </div>
            </div >
        </div>
    )
}

export default Footer