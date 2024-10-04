// import React, { useState } from 'react'
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