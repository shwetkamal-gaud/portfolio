
import React from 'react'
import upcopo2 from '../../assets/images/app.svg';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import Typography from '@/Components/Typography';
import Image from 'next/image';
import Buttons from '@/Components/Buttons';
import { figmaIcon, githubIcon, playIcon, worldIcon } from '@/assets/Icon';
const protfolioData = [
    {
        id: 2,
        results: {
            title: 'web 2.0 projects',
            data: [
                {
                    id: 8,
                    title: 'Portfolio',
                    skils: ["Redux", "TypeScript", "JavaScript", "React", "CSS", "Bootstrap", "Next JS"],
                    description: `It's shows deltails of my experiences, skills, projects etc..`,
                    figma: "",
                    isPrivate: true,
                    liveUrl: 'https://friend-shoes-ecommerce.netlify.app/',
                    youtubeUrl: 'https://youtu.be/h2SX4VHQHlE',
                },

            ],
        }
    },
    {
        id: 1,
        results: {
            title: 'android & IOS apps',
            data: [
                {
                    id: 1,
                    title: 'Multi Factor Authentication',
                    skils: ["React Native", "Redux", "Redux-Saga", "Native Base", "React-Native-Paper", "yup"],
                    description: `Multifactor Authentication App For Authenticating user using totp code.`,
                    cardImage: upcopo2,
                    liveUrl: '',
                    youtubeUrl: 'https://www.youtube.com/watch?v=k7098_rTLlA&feature=youtu.be',
                    figma: "https://www.figma.com/file/xxFZjSHJXT2yrQwS68DCDm/Upcopo?node-id=412%3A712",
                    githubUrl: '',
                    isPrivate: true
                },

            ],
        },

    },
]

const ProjectPage = ({ data }: { data: any }) => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const router = useRouter()
    const Header = ({ title, isBack, text }: { title: any, isBack: any, text: string }) => {
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
    const ProjectCard = ({ data }: { data: any }) => {
        return (
            <div className='d-flex flex-row justify-content-center flex-wrap gap-2'>
                {
                    data.map((item: any) => {
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
                                        display: 'block',
                                        width: '100%',
                                    }}
                                >
                                    <Image
                                        alt={item.title}
                                        src={item.cardImage}
                                        width={400}
                                        height={250}
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
                                        item.skils.map((skill: any) => {
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
                                    <Typography
                                        fontSize={14}
                                        fontWeight={400}
                                        color={isDark ? textLight : textDark}
                                        p={'10px 0px 0px 0px'}
                                    >
                                        {item.description}
                                    </Typography>
                                    <div style={{ fontFamily: 'FiraCode' }} className='d-flex gap-2 flex-wrap'
                                    >
                                        {
                                            item.liveUrl && <Buttons
                                                btnTitle="Live "
                                                component={'a'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.liveUrl}
                                                startIcon={<Image src={worldIcon} alt="play" height={16} width={16} />}

                                            />
                                        }
                                        {
                                            item.figma && <Buttons
                                                btnTitle="Figma "
                                                component={'a'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.figma}
                                                endIcon={<Image src={figmaIcon} alt="play" height={24} width={24} />}
                                            />
                                        }
                                        {
                                            item.githubUrl && <Buttons
                                                btnTitle="Github repo"
                                                component={'a'}
                                                href={item.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                startIcon={<Image src={githubIcon} alt="play" height={24} width={24} />}
                                            />
                                        }
                                        {
                                            item.youtubeUrl && <Buttons
                                                btnTitle="Demo"
                                                component={'a'}
                                                href={item.youtubeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                endIcon={<Image src={playIcon} alt="play" height={24} width={24} />}
                                            />

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
                    protfolioData.map((item, index) => {
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