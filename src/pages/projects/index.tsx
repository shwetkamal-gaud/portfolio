
import React, { useEffect, useState } from 'react'
import app from '../../assets/images/app.svg'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import Typography from '@/Components/Typography';
import Image, { StaticImageData } from 'next/image';
import Buttons from '@/Components/Buttons';
import { figmaIcon, githubIcon, playIcon, worldIcon } from '@/assets/Icon';
import cryotoApp from '../../assets/images/crypto.png'

interface Data {
    id: number
    title: string
    skills: string[]
    description: string[]
    figma?: string
    isPrivate: boolean
    liveUrl?: string
    youtubeUrl?: string
    cardImage?: StaticImageData | string
    githubUrl?: string

}
interface Result {
    title: string
    data: Data[]
}
interface PortfolioData {
    id: number,
    results: Result
}

const portfolioData: PortfolioData[] = [
    {
        id: 1,
        results: {
            title: 'Web App',
            data: [
                {
                    id: 1,
                    title: 'Cruptocurrency Tracking Platform',
                    skills: ['TypeScript', "ReactJs", "Next.js", "Redux", "Redux-Saga", "Bootstrap", "HTML", "CSS"],
                    description: [`A real-time cryptocurrency tracking platform with historical data and a profit calculator.`,
                        `Integrated the CoinGecko RESTful APIs for live updates and TradingWidget for visual analytics.`,
                        `Optimized state management and reusable components implemented for a faster and seamlessUI.`],
                    cardImage: cryotoApp,
                    githubUrl: 'https://github.com/shwetkamal-gaud/koinX-app',
                    isPrivate: true,
                    liveUrl: 'https://koin-x-app.vercel.app/'
                },

            ],
        },

    },

    {
        id: 2,
        results: {
            title: 'android & IOS apps',
            data: [
                {
                    id: 1,
                    title: 'Multi Factor Authentication',
                    skills: ["React Native", "Redux", "Redux-Saga", "Native Base", "React-Native-Paper", "yup"],
                    description: [`The primary aim of Multifactor Authentication app is to enhance security by requiring users to provide
                                multiple forms of verification to prove their identity.`,
                        `By requiring multiple factors, this feature significantly reduce the risk of unauthorized access, even if one
                                factor is compromised. This makes system or data more secure against cyber attacks`],
                    cardImage: app,
                    githubUrl: 'https://github.com/mrskg0438/multifactor-authentication',
                    isPrivate: true
                },

            ],
        },

    },
    // {
    //     id: 2,
    //     results: {
    //         title: 'web 2.0',
    //         data: [
    //             {
    //                 id: 1,
    //                 title: 'Portfolio',
    //                 skills: ['TypeScript', "React Js", "Next Js", "Redux", "Redux", "Bootstrap"],
    //                 description: [`This Portfolio website display completed projects, case studies and professional achievements in a
    //                             structured way.`,
    //                     `This highlight my technical expertise in software development, including proficiency in front - end
    //                             frameworks like React, Next Js, Bootstrap.`],
    //                 cardImage: portfolio,
    //                 liveUrl: 'https://portfolioshwetkamal.vercel.app/',
    //                 githubUrl: 'https://github.com/mrskg0438/portfolio',
    //                 isPrivate: true
    //             },

    //         ],
    //     },

    // },
]


const ProjectPage = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setIsDark(Boolean(mode === 'dark'))

    }, [mode])
    const router = useRouter()
    const Header = ({ title, isBack, text }: { title: string, isBack: boolean, text: string }) => {
        return (
            <div className='d-flex flex-row gap-2 align-items-center py-4 w-100'
            >
                <div className='d-flex flex-row align-items-center w-100 justify-content-between gap-2 pt-5'
                >
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <Typography
                            text={text}
                            color='#C778DD'
                            fontWeight={500}
                            fontSize={32}
                        >
                            <span style={{ color: isDark ? textWhite : textDark }}>
                                {title}
                            </span>

                        </Typography>
                        <div
                            style={{
                                width: '5rem',
                                height: '1.5px',
                                backgroundColor: '#C778DD',
                            }}
                        />
                    </div>
                    {isBack ? <Typography
                        fontWeight={400}
                        fontSize={16}
                        onClick={() => router.back()}
                        bB={'2px solid #C778DD'}
                        cursor={'pointer'}

                    >
                        {'<'}~~ Back
                    </Typography> : <></>}

                </div>

            </div>
        )
    }
    const ProjectCard = ({ data }: { data: Data[] }) => {
        return (
            <div className='d-flex flex-row justify-content-center flex-wrap gap-2'>
                {
                    data.map((item: Data) => {
                        return (
                            <div key={item.id}
                                style={{
                                    border: '1px solid #ABB2BF',
                                }}
                            >
                                <div
                                    style={{
                                        aspectRatio: '16/9',
                                        borderBottom: '1px solid #ABB2BF',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <Image className='img-fluid'
                                        style={{ alignSelf: 'center', width: '22rem', height: '20rem', padding: 2 }}
                                        alt={item.title}
                                        src={item.cardImage ? item.cardImage : ''}

                                    />
                                </div>
                                <ul className='w-100'

                                    style={{
                                        display: 'block',
                                        flexWrap: 'wrap',
                                        gap: '5px',
                                        padding: '10px',
                                        borderBottom: '1px solid #ABB2BF',
                                        maxWidth: '400px',
                                        listStyle: 'none',
                                        width: '100%'

                                    }}
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
                                <div className=' p-2 gap-3 '
                                    style={{ maxWidth: "360px" }}
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
                                    <ul className='p-3'>
                                        {item.description.map((items, index) => (
                                            <li key={index} style={{ fontSize: 14, fontWeight: 400, color: isDark ? textLight : textDark }}>{items}</li>
                                        ))}
                                    </ul>
                                    {/* <Typography
                                        fontSize={14}
                                        fontWeight={400}
                                        color={isDark ? textLight : textDark}
                                        p={'10px 0px 0px 0px'}
                                    >
                                        {item.description}
                                    </Typography> */}
                                    <div style={{ fontFamily: 'FiraCode' }} className='d-flex gap-2 flex-wrap'
                                    >
                                        {
                                            item.liveUrl &&
                                            <a className=''

                                                href={item.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >

                                                <Buttons
                                                    btnTitle="Live"
                                                ><Image src={worldIcon} alt="play" height={16} width={16} /></Buttons>
                                            </a>
                                        }
                                        {
                                            item.figma &&
                                            <a
                                                href={item.figma}
                                                target="_blank"
                                                rel="noopener noreferrer">

                                                <Buttons
                                                    btnTitle="Figma "
                                                ><Image src={figmaIcon} alt="play" height={24} width={24} /></Buttons>
                                            </a>
                                        }
                                        {
                                            item.githubUrl &&
                                            <a
                                                href={item.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >

                                                <Buttons
                                                    btnTitle="Github repo"


                                                >
                                                    <Image src={githubIcon} alt="play" height={24} width={24} />
                                                </Buttons>
                                            </a>
                                        }
                                        {
                                            item.youtubeUrl &&
                                            <a


                                                href={item.youtubeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer">

                                                <Buttons
                                                    btnTitle="Demo"


                                                >
                                                    <Image src={playIcon} alt="play" height={24} width={24} />
                                                </Buttons>
                                            </a>

                                        }


                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div >
        )
    }

    return (
        <div className='container-xl'>
            <div className='d-flex flex-column gap-2 pb-4'>
                <Header title={'projects'} isBack={true} text='/' />
                <Typography
                    fontSize={16}
                    fontWeight={400}
                    color={isDark ? textLight : textGray}
                >
                    All of My Projects
                </Typography>
                {
                    portfolioData.map((item, index) => {
                        return (
                            <div className='d-flex flex-column gap-3'
                                key={Math.random()}
                            >
                                <Header isBack={false} text='#'
                                    title={item?.results?.title}

                                />
                                <ProjectCard
                                    key={index}
                                    data={item.results.data}
                                />
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProjectPage