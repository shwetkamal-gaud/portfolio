
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Box, Container, Grid, Stack } from "@mui/material";
import photo from "../../assets/images/Pi7_Passport_Photo.jpeg";
import ContainedTypography from "@/Components/ContainedTypography";
import Link from "next/link";
import { useRouter } from "next/router";
import ContainedButtons from "@/Components/ContainedButtons";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';

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
            items: ["JavaScript,TypeScript,", "Python,", "Java,"]
        },
        {
            id: 2,
            title: 'Libraries & Frameworks',
            items: ["React ,", " React Native, ", "NextJs, ", "Redux, Redux-Saga"]
        },
        {
            id: 3,
            title: 'Frontend CSS Library',
            items: ["HTML/CSS,", "SASS, ", " Material-UI, ", "Tailwind CSS,", "Bootstrap, ", "Native Base, "]
        },
        {
            id: 4,
            title: 'Other Skills & Tools',
            items: ["Git/Github, ", " VS Code, ", "Android Studio, "]
        },
        {
            id: 5,
            title: 'Cloud/Databases',
            items: ["MongoDB(Exploring), ", "PostgreSQL(Exploring)"]
        },
        {
            id: 7,
            title: 'Areas of Interest',
            items: ["Web Design and Development, ", " Mobile App Development", "Vulnearability Assement & Penetration Testing"]
        },
        {
            id: 8,
            title: 'Soft Skills',
            items: ["Problem Solving, Self-learning, ", "Adaptability"]
        },
        {
            id: 9,
            title: 'Other Skills',
            items: ["Adobe Illustrator, ", "Adobe Photoshop"]
        },
        {
            id: 6,
            title: 'Communication Languages',
            items: ["Hindi,", " English,", " Gujarati"]
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
        "Miss my childhood days",

    ],
    overleafResume: '/Internship Letter-Shwetkamal Gaud-Silveroak.pdf',
    image: photo,
}


const AbaoutMe = () => {
    const { aboutData, mySkills, funFact, overleafResume, image } = aboutMeData;
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const router = useRouter()
    const Header = () => {
        return (
            <Stack spacing={2}>
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
                                about-me
                            </span>

                        </ContainedTypography>
                    </Stack>
                    <ContainedTypography
                        fontWeight={400}
                        fontSize={16}
                        onClick={() => router.back()}
                        sx={{
                            borderBottom: '2px solid #C778DD',
                            cursor: 'pointer',
                            "&:hover": {
                                color: '#C778DD'
                            }
                        }}
                    >
                        {'<'}~~ Back
                    </ContainedTypography>
                </Stack>
                <ContainedTypography
                    text='Who am I?'
                    color={isDark ? textLight : textGray}
                    fontWeight={400}
                    fontSize={16}
                />
            </Stack>

        )
    }
    const SkillHeader = () => {
        return (
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                pt={8}
            >
                <ContainedTypography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>
                        skils
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

            // </Stack>
        )
    }
    const SkillsCard = ({ title, skills }: { title: string, skills: any[] }) => {
        return (
            <Box
                sx={{
                    border: '1px solid #ABB2BF',
                    display: 'inline-block',
                    minWidth: '200px',
                    maxWidth: '300px',
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                }}
            >
                <ContainedTypography
                    sx={{
                        borderBottom: '1px solid #ABB2BF',
                        p: 1,
                    }}
                    fontSize={16}
                    fontWeight={600}
                    text={title}
                />
                <Box
                    component={"ul"}
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'start',
                        alignItems: 'start',
                    }}
                >
                    {skills.map((skill, index) => {
                        return (
                            <ContainedTypography
                                key={index}
                                component={"li"}
                                fontSize={14}
                                fontWeight={500}
                                text={skill}
                                color={isDark ? textLight : textGray}
                            />
                        )
                    })}

                </Box>

            </Box >
        )
    }
    const FunHeader = () => {
        return (

            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                pt={8}
            >
                <ContainedTypography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>
                        fun-facts
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
    const FunFactCard = () => {
        return (
            <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
            >
                {
                    funFact.map((fact, index) => {
                        return (
                            <Box
                                sx={{
                                    border: '1px solid #ABB2BF',
                                    p: 1,
                                }}
                                key={Math.random()}
                            >
                                <ContainedTypography
                                    fontSize={16}
                                    fontWeight={400}
                                    color={isDark ? textLight : textGray}
                                    text={fact}
                                />
                            </Box >
                        )
                    })
                }
            </Stack>

        )
    }
    return (
        <Container maxWidth="xl">
            <Stack>
                <Header />
                <Stack>
                    <Grid container spacing={2}
                        sx={{
                            alignItems: 'center',
                            py: 4,
                        }}
                    >
                        <Grid item xs={12} md={4}>
                            <Stack >
                                <Box
                                    sx={{
                                        width: {
                                            xs: '100%', sm: '100%',
                                            md: 'auto', lg: 'auto',
                                        },
                                        height: {
                                            xs: 'auto', sm: 'auto',
                                            md: 350, lg: 600,
                                        },
                                        //filter: isDark && 'grayscale(100%)',
                                        aspectRatio: '1/1',
                                        borderRadius: 2,
                                        overflow: 'hidden',

                                    }}
                                >
                                    <Image
                                        alt='about-image'
                                        src={image}
                                        width={500}
                                        height={600}
                                    />
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={8}  >
                            <Stack
                                spacing={3}
                                py={8}
                            >
                                {
                                    aboutData.map((data, index) => (
                                        <ContainedTypography
                                            color={isDark ? textLight : textGray}
                                            fontWeight={400}
                                            fontSize={16}
                                            key={data.id}
                                        >{data.text}</ContainedTypography>
                                    ))
                                }
                                <Box
                                    display="flex"
                                >
                                    <ContainedButtons
                                        btnTitle="Download CV"
                                        component={"a"}
                                        target="_blank"
                                        href={overleafResume}
                                        startIcon={<PictureAsPdfIcon />}

                                    />
                                </Box>
                            </Stack>
                        </Grid>

                    </Grid>
                </Stack >
                <Stack
                    py={4}
                    spacing={8}
                >
                    <SkillHeader />
                    <Stack
                        alignItems="center"
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            flexWrap="wrap"
                            gap={1}
                        >
                            {
                                mySkills?.map((skill, index) => {
                                    return (
                                        <SkillsCard
                                            key={Math.random()}
                                            title={skill?.title}
                                            skills={skill?.items}
                                        />
                                    )
                                })
                            }

                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    py={4}
                    pb={8}
                    spacing={8}
                >
                    <FunHeader />
                    <FunFactCard />
                </Stack>

            </Stack >
        </Container>
    )

}

export default AbaoutMe