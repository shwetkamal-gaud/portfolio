import { emailIcon, linkedinIcon, telegramIcon } from '@/assets/Icon'
import ContactForm from '@/Components/ContactForm'
import Typography from '@/Components/Typography'
import { RootState } from '@/redux/reducers'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const contactData = {
    text: `I’m interested in freelance, remote, on-site opportunities. However, if you have other requests or questions, don’t hesitate to contact me.`,
    socailAccounts: [
        {
            id: 1,
            name: 'LinkedIn',
            icon: linkedinIcon,
            link: 'https://www.linkedin.com/in/shwetkamalguad/',
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
const ContactsPage = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))

    }, [mode])
    const { text, socailAccounts, socailAccountsTitle } = contactData;
    const router = useRouter()
    const Header = () => {
        return (
            <div className='d-flex gap-2 flex-column w-100 py-5' >
                <div className='d-flex flex-row align-items-center w-100 justify-content-between gap-2 pt-5'>
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <Typography
                            text='/'
                            color='#C778DD'
                            fontWeight={500}
                            fontSize={32}
                        >
                            <span style={{ color: isDark ? textWhite : textDark }}>
                                contact
                            </span>

                        </Typography>
                    </div>
                    <Typography
                        fontWeight={400}
                        fontSize={16}
                        onClick={() => router.back()}
                        bB={'2px solid #C778DD'}
                        cursor={'pointer'}

                    >
                        {'<'}~~ Back
                    </Typography>

                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='d-flex flex-column pb-5 '

            >
                <Header />
                <div className='container-fliud row  d-flex  align-items-center justify-content-between'>

                    <div className='item col-xs-12 col-md-6'>
                        <div className='d-flex flex-column justify-content-end gap-2 align-items-md-start align-items-xs-center'>
                            <Typography
                                color={isDark ? textLight : textGray}
                                fontWeight={400}
                                fontSize={16}
                            >
                                {text}
                            </Typography>
                            <div className='d-flex flex-column gap-1'
                                style={{
                                    border: '1px solid #ABB2BF',
                                    padding: 10,
                                }}

                            >

                                <Typography>
                                    {socailAccountsTitle}:
                                </Typography>
                                {
                                    socailAccounts.map((item, index) => {
                                        return (
                                            <a key={index} className='d-flex flex-row align-items-center text-decoration-none'

                                                {...(item?.isEmail ? { href: `mailto:` + item?.link }

                                                    : { href: item?.link, target: '_blank' })}
                                            >
                                                <Image className='sidebar' src={item?.icon} alt={item?.name} />
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
                    <div className='item col-xs-12 col-md-6'>
                        <div className='d-flex flex-column gap-3 py-5 ' >

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ContactsPage