import React from 'react'

import { emailIcon, telegramIcon, linkedinIcon } from '@/assets/Icon';
import Typography from './Typography';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';


const homeContactData = {
    text: `I’m interested in freelance, remote, on-site opportunities. However, if you have other requests or questions, don’t hesitate to contact me.`,
    socailAccounts: [
        {
            id: 1,
            name: 'Linkein',
            icon: linkedinIcon,
            link: 'https://linkedin.com/in/shwetkamalgaud',
            text: 'Shwetkamal Gaud',
            isEmail: false
        },
        {
            id: 2,
            name: 'Email',
            icon: emailIcon,
            link: 'gaudshwetkamal0438@gmail.com',
            text: 'gaudshwetkamal0438@gmail.com',
            isEmail: true
        },
        {
            id: 3,
            name: 'Telegram',
            icon: telegramIcon,
            link: 'https://t.me/mrskg0438',
            text: 'Shwetkamal Gaud',
            isEmail: false

        },


    ],
    socailAccountsTitle: 'Message me here'
}

const Contacts = () => {
    const { text, socailAccounts, socailAccountsTitle } = homeContactData;
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark');
    const Header = () => {
        return (
            <div className='d-flex flex-row align-items-center gap-2 pt-5'

            >
                <Typography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>
                        Contact
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
            <div className='container row g-2 pb-5 d-flex align-items-center'

            >

                <Header />
                <div className='item col-xs-12 col-md-6  d-flex align-items-center'    >

                    <Typography
                        color={isDark ? textLight : textGray}
                        fontWeight={400}
                        fontSize={16}
                        textAlign={'start'}
                    >
                        {text}
                    </Typography>

                </div>

                <div className='item col-xs-12 col-md-6'>
                    <div className='d-flex align-items-center justify-content-xl-end justify-content-center p-0 m-0'
                    >
                        <div
                            style={{

                                border: '1px solid #ABB2BF',
                                padding: 1,
                                gap: 1,
                                alignItems: 'start'
                            }}

                        >
                            <Typography
                                textAlign={'start'}
                                p='0px 0px 0px 10px'
                            >
                                {socailAccountsTitle}:
                            </Typography>
                            {
                                socailAccounts.map((item) => {
                                    return (
                                        <a className='d-flex  gap-1 align-items-center text-decoration-none p-2'
                                            key={Math.random()}
                                            {...(item?.isEmail ? { href: `mailto:` + item?.link }

                                                : { href: item?.link, target: '_blank' })}
                                        >
                                            <Image className='sidebar' style={{ color: `${isDark ? textLight : textGray}` }} color={isDark ? textLight : textGray} src={item?.icon} alt={item?.name} />
                                            <Typography
                                                fontWeight={400}
                                                fontSize={16}
                                                color={isDark ? textLight : textGray}

                                            >
                                                {item?.text}
                                            </Typography>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Contacts