import Link from "next/link"
import ContainedTypography from "./ContainedTypography"
import { Box, Chip, Stack } from "@mui/material"
import ContainedButtons from "./ContainedButtons"
import { figmaIcon, githubIcon, playIcon, worldIcon } from "../assets/Icon";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";


const homeProtfolioData = [
    {
        id: 1,
        title: 'MultiFactor Authentication',
        skils: ["React Native", "Redux", "Redux-Saga", "Native Base", 'React Native Paper'],
        description: `Multifactor Authentication App For Authentication.`,
        cardImage: require('../assets/images/app.svg'),
        isPrivate: true
    },
]

const Projects = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const ProjectCard = () => {
        return (
            <Stack direction="row"
                justifyContent="center"
                flexWrap="wrap"
                // alignItems="center"
                gap={2}
            >
                {
                    homeProtfolioData.map((item) => {
                        return (
                            <Box key={item.id}
                                sx={{
                                    border: '1px solid #ABB2BF',
                                }}
                            >
                                <Box
                                    // component="img"
                                    sx={{
                                        aspectRatio: '16/9',
                                        borderBottom: '1px solid #ABB2BF',
                                        display: 'block',
                                        width: '100%',
                                        //height: '200px'
                                    }}
                                >
                                    <Image
                                        alt={item.title}
                                        src={item.cardImage}
                                        width={350}
                                        height={220}
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
                                        item.skils.map((skill) => {
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
                                                        //backgroundColor: '#C470DB',
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
                                    {/* <Box
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
                                                startIcon={<Box component={'img'} src={worldIcon} alt="play" height={16} width={16} />}

                                            />
                                        }
                                        {
                                            item.figma && <ContainedButtons
                                                btnTitle="Figma "
                                                component={'a'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={item.figma}
                                                endIcon={<Box component={'img'} src={figmaIcon} alt="play" height={24} width={24} />}
                                            />
                                        }
                                        {
                                            item.githubUrl && <ContainedButtons
                                                btnTitle="Github repo"
                                                component={'a'}
                                                href={item.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                startIcon={<Box component={'img'} src={githubIcon} alt="play" height={24} width={24} />}
                                            />
                                        }
                                        {
                                            item.youtubeUrl && <ContainedButtons
                                                btnTitle="Demo"
                                                component={'a'}
                                                href={item.youtubeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                endIcon={<Box component={'img'} src={playIcon} alt="play" height={24} width={24} />}
                                            />

                                        }

                                    </Box> */}
                                </Stack>

                            </Box>
                        )
                    })
                }
            </Stack>
        )
    }
    return (
        <Stack
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                py={4}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
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
                            Projects
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
                <Link href={'/projects'}>
                    <ContainedTypography
                        fontWeight={400}
                        fontSize={{
                            xs: 12,
                            sm: 16,
                        }}
                        sx={{
                            cursor: 'pointer',
                            borderBottom: '2px solid #C778DD',
                            "&:hover": {
                                color: '#C778DD'
                            }
                        }}
                    >
                        View all ~~{'>'}
                    </ContainedTypography>
                </Link>


            </Stack>
            <ProjectCard
            />
        </Stack>
    )
}

export default Projects