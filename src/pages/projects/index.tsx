import React from 'react'
import ecommarce from '../../assets/images/projects/ecommarce-3.png';
import upcopo2 from '../../assets/images/app.svg';
import { Box, Chip, Container, Stack } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import ContainedTypography from '@/Components/ContainedTypography';
import ContainedButtons from '@/Components/ContainedButtons';
import { figmaIcon, githubIcon, playIcon, worldIcon } from "../../assets/Icon";
import { useRouter } from 'next/router';


const protfolioData = [
    {
        id: 2,
        results: {
            title: 'web 2.0 projects',
            data: [
                {
                    id: 8,
                    title: 'Portfolio',
                    skils: ["Redux", "TypeScript", "JavaScript", "React", "CSS", "Bootstrap"],
                    description: `It's shows deltails of my experiences, skills, projects etc..`,
                    cardImage: ecommarce,
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
                    description: `It's used to authenticate user via totp code`,
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
const ProjectsPage = ({ data }: { data: any }) => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const router = useRouter()
    const Header = ({ title }: { title: any }) => {
        return (
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                py={6}
            //  pt={8}
            >
                <ContainedTypography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={{
                        xs: 20,
                        sm: 32,
                    }}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>
                        {
                            title
                        }
                    </span>

                </ContainedTypography>
                <Box
                    sx={{
                        width: {
                            xs: '10px', sm: '40px',
                            md: '60px', lg: '100px',
                        },
                        height: '1.5px',
                        backgroundColor: '#C778DD',
                    }}
                />
            </Stack>
        )
    }
    const ProjectCard = ({ data }: { data: any }) => {
        return (
            <Stack direction="row"
                justifyContent="center"
                flexWrap="wrap"
                // alignItems="center"
                gap={2}
            >
                {
                    data.map((item: any) => {
                        return (
                            <Box key={item.id}
                                sx={{
                                    border: '1px solid #ABB2BF',
                                }}
                            >
                                <Box
                                    sx={{
                                        aspectRatio: '16/9',
                                        borderBottom: '1px solid #ABB2BF',
                                        display: 'block',
                                        width: '100%',
                                        //height: '200px',
                                    }}
                                >
                                    <Image
                                        alt={item.title}
                                        src={item.cardImage}
                                        width={400}
                                        height={250}
                                    />
                                </Box>
                                <Box
                                    component="ul"
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '5px',
                                        padding: '10px',
                                        borderBottom: '1px solid #ABB2BF',
                                        maxWidth: '360px',

                                    }}
                                >
                                    {
                                        item.skils.map((skill: any) => {
                                            return (
                                                <Box
                                                    key={skill}
                                                    component="li"
                                                    sx={{
                                                        display: 'inline-block',
                                                        padding: '0.5rem',
                                                        color: isDark ? textDark : textWhite,
                                                        fontSize: '16px',
                                                        fontWeight: '400',
                                                        backgroundColor: isDark ? textLight : textGray,
                                                        borderRadius: '10px',
                                                        marginRight: '0.5rem',
                                                        marginBottom: '0.5rem'
                                                    }}
                                                >
                                                    {skill}
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                                <Stack
                                    p={2}
                                    spacing={2}
                                    maxWidth="360px"

                                >
                                    <Box
                                        fontSize={24}
                                        fontWeight={500}
                                        color={isDark ? textWhite : textDark}
                                    >
                                        {item.title}
                                        {
                                            item?.isPrivate && (

                                                <Chip
                                                    sx={{
                                                        m: 1,
                                                        fontFamily: "FiraCode",
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        // backgroundColor: '#C470DB',
                                                        color: isDark ? textWhite : textDark,
                                                        borderColor: '#C470DB',
                                                    }}
                                                    label="Private"
                                                    //color='warning'
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            )
                                        }
                                    </Box>
                                    <ContainedTypography
                                        fontSize={14}
                                        fontWeight={400}
                                        color={isDark ? textLight : textDark}
                                    >
                                        {item.description}
                                    </ContainedTypography>
                                    <Box
                                        display="flex"
                                        gap={2}
                                        flexWrap="wrap"
                                    >
                                        {
                                            item.liveUrl && <ContainedButtons
                                                btnTitle="Live "
                                                component={'a'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.liveUrl}
                                                startIcon={<Image src={worldIcon} alt="play" height={16} width={16} />}

                                            />
                                        }
                                        {
                                            item.figma && <ContainedButtons
                                                btnTitle="Figma "
                                                component={'a'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.figma}
                                                endIcon={<Image src={figmaIcon} alt="play" height={24} width={24} />}
                                            />
                                        }
                                        {
                                            item.githubUrl && <ContainedButtons
                                                btnTitle="Github repo"
                                                component={'a'}
                                                href={item.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                startIcon={<Image src={githubIcon} alt="play" height={24} width={24} />}
                                            />
                                        }
                                        {
                                            item.youtubeUrl && <ContainedButtons
                                                btnTitle="Demo"
                                                component={'a'}
                                                href={item.youtubeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                endIcon={<Image src={playIcon} alt="play" height={24} width={24} />}
                                            />

                                        }


                                    </Box>
                                </Stack>

                            </Box>
                        )
                    })
                }
            </Stack>
        )
    }


    return (
        <Container maxWidth="xl">
            <Stack
                spacing={2}
                pb={6}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    pt={4}

                >
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >
                        <ContainedTypography
                            text='/'
                            color='#C778DD'
                            fontWeight={500}
                            fontSize={{
                                xs: 24,
                                sm: 32,
                            }}
                        >
                            <span style={{ color: isDark ? textWhite : textDark }}>
                                projects
                            </span>

                        </ContainedTypography>
                        {/* <Box
                        sx={{
                            width: {
                                xs: '10px', sm: '40px',
                                md: '60px', lg: '100px',
                            },
                            height: '1.5px',
                            backgroundColor: '#C778DD',
                        }}
                    /> */}
                    </Stack>
                    <ContainedTypography
                        fontWeight={400}
                        fontSize={16}

                        onClick={() => router.back()}

                        sx={{
                            cursor: 'pointer',
                            borderBottom: '2px solid #C778DD',
                            "&:hover": {
                                color: '#C778DD'
                            }
                        }}
                    >
                        {'<'}~~ Back
                    </ContainedTypography>


                </Stack>
                <ContainedTypography
                    fontSize={16}
                    fontWeight={400}
                    color={isDark ? textLight : textGray}
                >
                    All of my projects
                </ContainedTypography>
                {
                    protfolioData.map((item, index) => {
                        return (
                            <Stack
                                key={Math.random()}
                            >
                                <Header
                                    title={item?.results?.title}

                                />
                                <ProjectCard
                                    key={index}
                                    data={item.results.data}
                                />
                            </Stack>

                        )
                    })
                }
            </Stack>
        </Container>
    )
}

export default ProjectsPage