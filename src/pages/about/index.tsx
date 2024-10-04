import React from 'react'
import photo from "../../assets/images/Pi7_Passport_Photo.jpeg";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import Typography from '@/Components/Typography';
import Image from 'next/image';
import Buttons from '@/Components/Buttons';


const aboutMeData = {
    aboutData: [
        {
            id: 1,
            text: `An extremely positive individual & who can stay focused and motivated. Responsible, dependable, and takes great pride in all my work. Can work both independently and in a team, which has been proven from past work experience and academic experiences.`,
        },
        {
            id: 2,
            text: `In my previous role as a Software Developer(Frontend) Intern at Medkart Pharmacy PVT LTD Company, Medkart Pharmacy PVT LTD is a
pharmacy-based company located in Ahmedabad, Gujarat. We have a small team to develop program
management tools for managing whole Ecommerce & Store projects. We implemented more than 50 features
for these projects, like creating new-bill, advance-bill and return-bill, track of expenses & till, Loyalty Points,
Referral Program, Gift Voucher & Cash Voucher, Users and user's roles management, data grid view, calendar view, user permissions module,
multilevel user permissions segment, etc. I was responsible for developing and maintaining multiple
web applications that received high praise for their performance and user experience. I have a deep
understanding of React’s core principles and best practices, and I am proficient in using Redux for
state management. Additionally, I have experience working with RESTful APIs and integrating
third-party libraries to enhance functionality`
        },
        {
            id: 4,
            text: `I have knowledge in HTML, CSS, JavaScript, and Typescript, and I have a strong understanding of
responsive design principles. I am also experienced in using version control systems such as Git. My ability to collaborate effectively
with cross-functional teams and my strong problem-solving skills have been instrumental in delivering
successful projects on time and within budget.`

        },
    ],
    mySkills: [
        {
            id: 1,
            title: "Programming Languages",
            items: ["JavaScript, ", "TypeScript, ", "Python, ", "Java, ", "C/C++ "]
        },
        {
            id: 2,
            title: 'Libraries & Frameworks',
            items: ["React, ", " React Native, ", "NextJs, ", "Redux, ", "Redux-Saga "]
        },
        {
            id: 3,
            title: 'Frontend CSS Library',
            items: ["HTML/CSS,", "SASS, ", "SCSS, ", " Material-UI, ", "Tailwind CSS, ", "Bootstrap, ", "Native Base, "]
        },
        {
            id: 4,
            title: 'Other Skills & Tools',
            items: ["Git/Github, ", " VS Code, ", "Android Studio, ", "Adobe Photoshop, ", "Adobe Illustrator "]
        },
        {
            id: 5,
            title: 'Cloud/Databases',
            items: ["MongoDB(Exploring), ", "PostgreSQL(Exploring) "]
        },
        {
            id: 7,
            title: 'Areas of Interest',
            items: ["Web Design and Development, ", " Mobile App Development, ", "Vulnerability Assessment & Penetration Testing "]
        },
        {
            id: 8,
            title: 'Soft Skills',
            items: ["Problem Solving, ", "Self-learning, ", "Adaptability "]
        },
        {
            id: 6,
            title: 'Communication Languages',
            items: ["Hindi, ", " English, ", " Gujarati"]
        }
    ],
    funFact: [
        "Coding is my passion",
        "Cricket is my favorite sport",
        "Love to sing songs when I'm alone",
        "I love to spend time with my family",
        "I love to travel",
        "Coding with listening songs is my hobby!",
        "I often bike with my friends",
        "I Miss my childhood days",

    ],
    resume: '/Shwetkamal_Gaud.pdf',
    image: photo,
}



const AboutPage = () => {
    const { aboutData, mySkills, funFact, resume, image } = aboutMeData;
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)

    const isDark = Boolean(mode === 'dark')
    const router = useRouter()
    const Header = () => {
        return (
            <div className='d-flex gap-2 flex-column w-100' >
                <div className='d-flex flex-row align-items-center w-100 justify-content-between gap-2 pt-5'
                >
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <Typography
                            text='/'
                            color='#C778DD'
                            fontWeight={500}
                            fontSize={32}
                        >
                            <span style={{ color: isDark ? textWhite : textDark }}>
                                about_me
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
                    text='Who am I?'
                    color={isDark ? textLight : textGray}
                    fontWeight={400}
                    fontSize={16}
                />
            </div>

        )
    }
    const SkillHeader = () => {
        return (
            <div className='d-flex flex-row gap-2 align-items-center pt-4'

            >
                <Typography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>
                        skils
                    </span>

                </Typography>
                {/* {/* xs: '10px', sm: '40px',
                md: '60px', lg: '100px', */}
                <div className='box'
                    style={{
                        width: '5rem',
                        height: '1.5px',
                        backgroundColor: '#C778DD',
                    }}
                />
            </div>

            // </Stack>
        )
    }
    const SkillsCard = ({ title, skills }: { title: string, skills: string[] }) => {
        return (
            <div
                style={{
                    border: '1px solid #ABB2BF',
                    display: 'inline-block',
                    minWidth: '200px',
                    maxWidth: '300px',
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                    padding: 0
                }}

            >
                <div
                    style={{
                        borderBottom: '1px solid #ABB2BF',
                        display: 'block',
                        width: '100%',
                        alignSelf: 'center',

                    }}
                >
                    <Typography
                        fontSize={15}
                        fontWeight={600}
                        textAlign={'start'}
                        text={title}
                        p={'11px'}
                    />
                </div>
                <ul
                    style={{
                        padding: '8px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        justifyContent: 'start',
                        alignItems: 'start',
                        marginTop: '16px',
                        marginBottom: '16px'

                    }}
                >
                    {skills?.map((skill, index) => {
                        return (
                            <li
                                key={index}
                                style={{
                                    listStyle: 'none',
                                    fontSize: 14,
                                    fontWeight: 500,
                                    fontFamily: 'FiraCode',
                                    color: isDark ? textLight : textGray,
                                }}

                            >{skill}</li>
                        )
                    })}

                </ul>

            </div >
        )
    }
    const FunHeader = () => {
        return (

            <div className='d-flex flex-row gap-2 align-items-center pt-4'
            >
                <Typography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>
                        fun-facts
                    </span>

                </Typography>
                {/* width: {
                    xs: '10px', sm: '40px',
                md: '60px', lg: '100px',
                        }, */}
                <div
                    style={{
                        width: '10px',
                        height: '1.5px',
                        backgroundColor: '#C778DD',
                    }}
                > </div>
            </div>
        )
    }
    const FunFactCard = () => {
        return (
            <div className='d-flex flex-row flex-wrap gap-2'
            >
                {
                    funFact.map((fact) => {
                        return (
                            <div
                                style={{
                                    border: '1px solid #ABB2BF',
                                    padding: '9px',
                                }}
                                key={Math.random()}
                            >
                                <Typography
                                    fontSize={16}
                                    fontWeight={400}
                                    color={isDark ? textLight : textGray}
                                    text={fact}
                                />
                            </div >
                        )
                    })
                }
            </div>

        )
    }
    return (
        <div className='container'>
            <div className='d-flex flex-column'>
                <Header />
                <div className='d-flex justify-content-center'>
                    <div className=' container row d-flex flex-row align-items-center  py-4 '>
                        <div className='items col-xs-12 col-md-4'>
                            <div className='d-flex'>
                                <div style={{ width: '45rem', height: '30rem', aspectRatio: '1/1', borderRadius: '2px', overflow: 'hidden' }}>
                                    <Image className='img-fluid' style={{ width: '45rem', height: '30rem' }}
                                        alt='about-image'
                                        src={image}

                                    />
                                </div>
                            </div>
                        </div>
                        <div className='item col-xs-12 col-md-8'>
                            <div className='d-flex flex-column  py-5'>
                                {
                                    aboutData.map((data) => (
                                        <Typography
                                            color={isDark ? textLight : textGray}
                                            fontWeight={400}
                                            fontSize={16}
                                            key={data.id}
                                        >{data.text}</Typography>
                                    ))
                                }
                                <div className='d-flex'>
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
                    </div>
                </div>
                <div className='d-flex flex-column py-5 gap-5'>
                    <SkillHeader />
                    <div className='d-flex align-items-center'>
                        <div className='d-flex row justify-content-xl-start justify-content-center flex-wrap gap-2'>
                            {
                                mySkills.map((skill, id) => (
                                    <SkillsCard
                                        key={id}
                                        title={skill.title}
                                        skills={skill.items}
                                    />
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className='d-flex flex-column py-4 pb-5 gap-5'>
                    <FunHeader />
                    <FunFactCard />
                </div>

            </div >
        </div>
    )
}

export default AboutPage