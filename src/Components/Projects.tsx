import { RootState } from '@/redux/reducers'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import Typography from './Typography'
import Link from 'next/link'


const homeProtfolioData = [
    {
        id: 1,
        title: 'Cruptocurrency Tracking Platform',
        skills: ['TypeScript', "ReactJs", "Next.js", "Redux", "Redux-Saga", "Bootstrap", "HTML", "CSS"],
        description: `A real-time cryptocurrency tracking platform with historical data and a profit calculator.`,
        cardImage: '/crypto.jpg',
        isPrivate: true,
        links: [{ name: 'Live', link: 'https://koin-x-app.vercel.app/', }, { name: 'Github', link: 'https://github.com/shwetkamal-gaud/koinX-app' }]

    },
    {
        id: 2,
        title: 'TaskBuddy',
        skills: ['TypeScript', "ReactJs", "React Query", "Redux", "TailwindCSS", "HTML", "CSS"],
        description: `This is a task management system with real-time updates, filtering, and Google authentication.`,
        cardImage: '/task.svg',
        isPrivate: true,
        links: [{ name: 'Live', link: 'https://task-management-system-sepia.vercel.app/' }, { name: 'Github', link: 'https://github.com/shwetkamal-gaud/task-management-system' }]

    },
    {
        id: 3,
        title: 'MultiFactor Authentication',
        skills: ['TypeScript', "React Native", "Redux", "Redux-Saga", "Native Base", 'React Native Paper'],
        description: `Multifactor Authentication App For Authenticating user using Time based OTP code .`,
        cardImage: '/app.svg',
        isPrivate: true,
        links: [{ name: 'Github', link: 'https://github.com/shwetkamal-gaud/multifactor-authentication' }]

    },


]


const Projects = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))

    }, [mode])
    const [isHovered, setHovered] = useState<boolean>(false)
    const ProjectCard = () => {
        return (
            <div className='d-flex flex-row justify-content-center  gap-3'
            >
                {
                    homeProtfolioData.map((item) => {
                        return (
                            <div key={item.id} className='d-flex flex-column'
                                style={{
                                    border: '1px solid #ABB2BF',
                                }}
                            >
                                <div

                                    style={{
                                        aspectRatio: '16/7',
                                        borderBottom: '1px solid #ABB2BF',
                                        display: 'flex',
                                        width: '100%',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center'

                                    }}
                                >

                                    {item.cardImage && <Image className='img-fluid rounded'
                                        style={{ width: '19rem', height: '15rem', padding: 2 }}
                                        alt={item.title}
                                        width={1000}
                                        height={1000}
                                        src={item.cardImage}

                                    />}
                                    {/* {item.svg && <div className='img-fluid rounde'>{item.svg}</div>} */}


                                </div>
                                <ul className='w-full p-3 border-bottom border-2'
                                >
                                    {
                                        item.skills.map((skill: string) => {
                                            return (
                                                <li
                                                    key={skill}

                                                    style={{
                                                        display: 'inline-block',
                                                        padding: '0.5rem',
                                                        color: isDark ? textDark : textWhite,
                                                        fontSize: '16px',
                                                        fontWeight: '400',
                                                        backgroundColor: isDark ? textLight : textGray,
                                                        borderRadius: '10px',
                                                        marginRight: '0.5rem',
                                                        marginBottom: '0.5rem',
                                                        fontFamily: 'FiraCode'
                                                    }}
                                                >
                                                    {skill}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className='d-flex flex-grow h-100 flex-column p-2 '
                                >
                                    <div
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 500,
                                            gap: 2,
                                            color: isDark ? textWhite : textDark,
                                            fontFamily: 'FiraCode'
                                        }}
                                    >
                                        {item.title}<span style={{
                                            marginLeft: 10,
                                            fontFamily: "FiraCode",
                                            fontSize: '12px',
                                            padding: '2px 6px 2px 6px',
                                            fontWeight: '400',
                                            color: isDark ? textWhite : textDark,
                                            justifyContent: 'center',
                                            border: '1px solid #C470DB',
                                            borderRadius: '15px'
                                        }}>Public</span>

                                    </div>
                                    <div className='d-flex flex-column justify-content-between h-100 '>

                                        <Typography
                                            fontSize={14}
                                            fontWeight={400}
                                            color={isDark ? textLight : textDark}
                                            textAlign={'start'}
                                            p={'10px 0px 0px 0px'}
                                        >
                                            {item.description}
                                        </Typography>
                                        {
                                            item.links && <div className='project-link mt-1'>
                                                {
                                                    item.links.map((project) => {
                                                        return (
                                                            <>
                                                                <Link className='project-btn' href={project.link} target='_blank'>
                                                                    {project.name}
                                                                </Link>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className='d-flex  flex-column'>
            <div className='d-flex flex-row justify-content-between align-items-center py-4 gap-1'
            >
                <div className='d-flex flex-row gap-2 align-items-center '

                >
                    <Typography
                        text='#'
                        color='#C778DD'
                        fontWeight={500}
                        fontSize={32}
                    >
                        <span className='' style={{ color: isDark ? textWhite : textDark }}>
                            Projects
                        </span>

                    </Typography>

                    <div className='ms-3'
                        style={{

                            width: 103,
                            height: '1.5px',
                            backgroundColor: '#C778DD',
                        }}
                    />
                </div>
                <Link className='' href={'/projects'} style={{ textDecoration: 'none' }}>
                    <Typography
                        fontWeight={400}
                        fontSize={14}
                        cursor={'pointer'}
                        bB={'2px solid #C778DD'}
                        onMouseOver={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        color={isHovered ? '#C778DD' : isDark ? textWhite : textDark}
                    >
                        View all ~~{'>'}
                    </Typography>
                </Link>


            </div>
            <ProjectCard
            />
        </div>
    )
}

export default Projects