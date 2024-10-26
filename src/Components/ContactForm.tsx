import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'

const ContactForm = () => {
    const [data, setData] = useState({ name: '', email: '', subject: '', message: '' })
    const { mode, textLight, textGray } = useSelector((state: RootState) => state.theme)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))
        console.log("first", mode, isDark)
    }, [mode])
    const handleSubmit = () => {
        const a = document && document.createElement('a')
        a.href = `mailto:gaudshwetkamal0438@gmail.com?subject=${data.subject}&body=${data.message}`
        a.target = '_blank'
        a.rel = 'noopener noreferrer'
        a.click()

    }
    return (
        <>
            <form onSubmit={handleSubmit} >

                <div className='continer row  gap-2 d-flex justify-content-md-end justify-content-center' >
                    <div className='form-container d-flex flex-column col-10 gap-3' >

                        <input className='input-group  bg-transparent  shadow-none'
                            style={{
                                borderTop: '0px',
                                borderLeft: '0px',
                                borderRight: '0px',
                                borderBottomColor: '#C778DD',
                                color: isDark ? textLight : textGray,
                                outline: '0'
                            }}
                            id={'id'}
                            name="name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            placeholder='Enter Name'
                            required
                        />

                        <input className='input-group bg-transparent  shadow-none'
                            style={{
                                borderTop: '0px',
                                borderLeft: '0px',
                                borderRight: '0px',
                                borderBottomColor: '#C778DD',
                                outline: '0',
                                color: isDark ? textLight : textGray,
                            }}
                            name="email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            placeholder='Enter Email'
                            required
                        />
                        <input className='input-group bg-transparent  shadow-none'
                            style={{
                                borderTop: '0px',
                                borderLeft: '0px',
                                borderRight: '0px',
                                borderBottomColor: '#C778DD',
                                outline: '0',
                                color: isDark ? textLight : textGray,
                            }}
                            name="subject"
                            value={data.subject}
                            onChange={(e) => setData({ ...data, subject: e.target.value })}
                            placeholder='Enter Subject'

                            required
                        /><textarea className='input-group bg-transparent  shadow-none'
                            style={{
                                borderTop: '0px',
                                borderLeft: '0px',
                                borderRight: '0px',
                                borderBottomColor: '#C778DD',
                                outline: '0',
                                color: isDark ? textLight : textGray,
                            }}
                            name="message"
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                            placeholder='Enter Message'
                            required
                        />
                        <div className='w-100 d-flex flex-row'>


                            <Buttons btnTitle={'Send'}></Buttons>

                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default ContactForm