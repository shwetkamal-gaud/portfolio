import React from 'react'
import photo from '../assets/images/Pi7_Passport_Photo.jpeg'
import Typography from './Typography'
import Image from 'next/image'
import Link from 'next/link'
import Buttons from './Buttons'
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import ReadMoreIcon from '@mui/icons-material/ReadMore';
import logoOutline from "../assets/images/logoOutline.svg";

import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'

const homeAboutData = {
    aboutData: [
        {
            id: 1,
            text: `HI! I'm Shwetkamal Kamlesh Kumar Gaud. I'm a Frontend Engineer. I'm passionate about building scalable and maintainable web applications.  I have  worked as a Software Developer(Forntend) Intern at Medkart Pharmacy PVT LTD. I love to learn new things and share my knowledge with others.`
        },
        {
            id: 2,
            text: ` Mobile app development and VAPT(Vunerability Assessment & Penetration Testing) are my other passions. React and React Native is my favorite JavaScript libraries. I'm also a big fan of Python, Java, Rust. In the future, I want to be a Full Stack Developer`,
        }
    ],
    resume: `/Shwetkamal_Gaud.pdf`,
    image: photo,
}


const About = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { aboutData, resume } = homeAboutData;
    const Header = () => {
        return (

            <div className='d-flex flex-row align-items-center gap-2 pt-5'>
                <Typography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>
                        About
                    </span>

                </Typography>

                <div className='ms-3    '
                    style={{
                        width: 103,
                        height: '1.5px',
                        backgroundColor: '#C778DD',
                    }}
                />
            </div>
        )
    }
    return (
        <div>
            <div className='container d-flex flex-row  justify-content-center align-items-center row  p-0 m-0'
            >
                <div className='item col-xs-12 col-md-6'>
                    <Header />
                    <div className=' py-5'
                    >
                        {
                            aboutData.map((item) => (
                                <Typography
                                    color={isDark ? textLight : textGray}
                                    fontWeight={400}
                                    fontSize={16}
                                    key={item.id}
                                    textAlign={'start'}
                                >{item.text}</Typography>
                            ))
                        }

                        <div className='d-flex flex-wrap gap-2'
                        >
                            <Link style={{ textDecoration: 'none' }} className='d-flex' href={'/about'}>

                                <Buttons
                                    btnTitle="Read More"
                                // startIcon={<ReadMoreIcon />}

                                />
                            </Link>
                            <a href={resume} target='_blank' >

                                <Buttons
                                    btnTitle="Download CV"

                                // startIcon={<PictureAsPdfIcon />}
                                >
                                </Buttons>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='item col-xs-12 col-md-6'>
                    <div className='d-flex justify-content-end'>
                        <div style={{ width: '22rem', height: '26rem', aspectRatio: '1/1', borderRadius: '2px', overflow: 'hidden' }}>
                            <Image src={logoOutline} alt="" style={{
                                fontSize: "32px",
                                width: '40%',
                                height: '40%',
                                aspectRatio: "1/1",
                            }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default About