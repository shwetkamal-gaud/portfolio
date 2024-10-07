
// import Buttons from './Buttons'






// const ContactForm = () => {
//     const [data, setData] = useState({ name: '', email: '', subject: '', message: '' })
//     const config = {
//         SecureToken: '',
//         To: 'gaudshwetkamal0438@gmail.com',
//         From: data.email,
//         Subject: data.subject,
//         Body: data.message
//     }
//     const handleSubmit = (e: any) => {
//         e.prevntDefault()
//         // window?.Email.send(config).then(
//         //     (message:any) => alert(message)
//         // );
//     }
//     return (
//         <div className='g-2 py-5' 
//         >

//             {/* <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a> */}
//             <form
//                 onSubmit={handleSubmit}
//             >
//                 <div container spacing={1} >

//                     <div item xs={12} md={4}>
//                         <Input
//                             //label="Name"
//                             name="name"
//                             value={data.name}
//                             onChange={(e) => setData({ ...data, name: e.target.value })}
//                             fullWidth
//                             required
//                         />
//                     </div>
//                     <div item xs={12} md={4}>
//                         <Input
//                             //label="Subject"
//                             name="subject"
//                             value={data.subject}
//                             onChange={(e) => setData({ ...data, subject: e.target.value })}
//                             fullWidth
//                             required
//                         />
//                     </div>
//                     <div item xs={12} md={4}>
//                         <Input
//                             //label="Email"
//                             name="email"
//                             value={data.email}
//                             type="email"
//                             onChange={(e) => setData({ ...data, email: e.target.value })}
//                             fullWidth
//                             required
//                         />
//                     </div>
//                     <div item xs={12} >
//                         <Input
//                             //label="Message"
//                             name="message"
//                             value={data.message}
//                             onChange={(e) => setData({ ...data, message: e.target.value })}
//                             fullWidth
//                             multiline
//                             rows={4}
//                             required
//                             inputProps={{
//                                 className: 'a-class-with-black-text-set-as-important'
//                             }}
//                         />

//                     </div>

//                     <div item xs={12}>
//                         <Buttons
//                             variant="outlined"
//                             color="primary"
//                             type="submit"
//                             sx={{
//                                 color: "#fff",
//                                 p: 1,
//                                 border: "1px solid #C778DD",
//                                 "&:hover": {
//                                     backgroundColor: "#C770DB1A",
//                                     opactiy: 0.8,
//                                     borderColor: "#C778DD",
//                                     cursor: "pointer",
//                                 },
//                                 fontWeight: "600",
//                                 textTransform: "none",
//                                 fontFamily: 'FiraCode',
//                                 fontSize: 16,

//                             }}
//                         >
//                             Submit
//                         </Buttons>

//                     </div>
//                 </div>
//             </form>
//         </div >
//     )
// }

// export default ContactForm


import React, { MouseEventHandler, useState } from 'react'
import Buttons from './Buttons'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'

const ContactForm = () => {
    const [data, setData] = useState({ name: '', email: '', subject: '', message: '' })
    const { mode, textLight, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
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