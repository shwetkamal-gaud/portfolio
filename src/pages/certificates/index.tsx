
import React from 'react'
import courseCertificate from '../../assets/images/certification/Certificate.jpg';
import python from '../../assets/images/certification/python_basic certificate.png'
import offerLatter from '../../assets/images/certification/Internship Letter-Shwetkamal Gaud-Silveroak-1.png';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import Typography from '@/Components/Typography';
import Image from 'next/image';
const data = [
    {
        title: 'Software developer Intern',
        text: 'Internship Mentor Feedback',
        topicTitle: 'Topics i learned from this Internship',
        platform: 'Medkart Pharmacy PVT LTD',
        tag: 'REACT, REDUX,  REDUX - SUGA, NEXT JS, BOOTSTRAP, TYPESCRIPT, JAVASCRIPT, TAILWIND CSS, HTML, SCSS',
        feedback: 'Shwetkamal dveloped many modules and performed exceptionally well. He completed all the modules very seriously and completed all the assignments with excellent results. He is the most grew intern.',
        courseCertificate: courseCertificate,
        offerLatter: offerLatter,
        imageTitle1: 'Intetnship Certificate',
        imageTitle2: 'Internship Offer Letter',
        link: 'https://medkart.in/'
    },
    {
        title: 'Python Skill Assesment',
        text: 'Skill Assesment Result and Overview',
        platform: 'HackerRank',
        topicTitle: 'Topics i included in this skill assessment',
        tag: 'Python, Problem Solving, Data Structures, Algorithms, Basics',
        feedback: 'I Complted all the given Problems based on Data Structure and Algorithms Using Python Programing Language And Scored 100%.',
        courseCertificate: python,
        imageTitle1: 'Skill Assessment Certificate',
        link: 'https://www.hackerrank.com/certificates/c0b6b1af6e7e'

    }
]

const CertificatesPage = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const router = useRouter()
    const Header = () => {
        return (
            <div className='d-flex gap-2 flex-column w-100' >
                <div className='d-flex flex-row align-items-center w-100 justify-content-between gap-2 pt-5'>
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <Typography
                            text='/'
                            color='#C778DD'
                            fontWeight={500}
                            fontSize={32}>
                            <span style={{ color: isDark ? textWhite : textDark }}>
                                certificates
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
                <Typography
                    text='My Certifications'
                    color={isDark ? textLight : textGray}
                    fontWeight={400}
                    fontSize={16}
                />
            </div>
        )
    }

    return (
        <div className='container' >
            <div className='d-flex flex-column pb-5'>
                <Header />
                <div className='d-flex flex-column mt-4 gap-2 pb-4'
                    style={{
                        borderRadius: 2,
                        backgroundColor: isDark ? '#2E3440' : '#f5f5f5',
                    }} >
                    {
                        data.map((item, index) => (
                            <div key={index}>
                                <Typography p={'6px 0px 0px 6px'}>
                                    {item?.title} by {' '}
                                    <a href={item.link} target="_blank" rel="noreferrer"
                                        title="Click to verify the certificate"
                                        color='#C778DD'
                                    >
                                        {item?.platform}
                                    </a>
                                </Typography>

                                <Typography
                                    color={isDark ? textLight : textGray}
                                    fontSize={16}
                                    fontWeight={400}
                                    p={'6px 0px 0px 6px'}
                                >
                                    {item.topicTitle}
                                </Typography>


                                <span
                                    style={{
                                        width: 'fit-content',
                                        marginLeft: '4px',
                                        display: 'flex',
                                        flex: 'wrap',
                                        flexGrow: 1,
                                        flexShrink: 1,
                                        flexBasis: 0,
                                        fontFamily: "FiraCode",
                                        fontSize: '12px',
                                        padding: '2px 6px 2px 6px',
                                        fontWeight: '400',
                                        justifyContent: 'start',
                                        border: '1px solid #C470DB',
                                        borderRadius: '15px',
                                        color: isDark ? textLight : textGray
                                    }}
                                >{item.tag}</span>



                                <Typography
                                    text={`${item.text}:`}
                                    fontSize={16}
                                    fontWeight={500}
                                    p={'6px 0px 0px 6px'}
                                >
                                    {item.feedback}
                                </Typography>
                                <div className='d-flex flex-row flex-wrap justify-content-center gap-4 p-2'
                                    style={{
                                        border: '1px solid #ABB2BF',

                                    }}>
                                    <div className='d-flex flex-column'
                                        style={{
                                            maxWidth: '100%',
                                            width: 'auto',

                                        }}>
                                        <Typography p={'0px 0px 7px 0px'}>
                                            {item.imageTitle1}
                                        </Typography>
                                        <Image className='img-fluid' style={{ width: '30rem', height: '30rem' }}
                                            src={item.courseCertificate}
                                            alt='Certificate'

                                        />
                                    </div>
                                    {item.imageTitle2 ?

                                        <div className='d-none  d-xl-block ' style={{ width: '2px', height: '34rem', backgroundColor: '#ABB2BF' }}></div> :
                                        <></>
                                    }
                                    <div className='d-flex flex-column'
                                        style={{
                                            maxWidth: '100%',
                                            width: 'auto'
                                        }}>
                                        <Typography p={'0px 0px 7px 0px'}>
                                            {item.imageTitle2}
                                        </Typography>
                                        {item?.offerLatter ?

                                            <Image className='img-fluid' style={{ width: '30rem', height: '30rem' }}
                                                src={item?.offerLatter}
                                                alt='Certificate'

                                            /> : <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CertificatesPage