import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Box, Grid, Stack } from '@mui/material'
import { LazyLoadImage } from "react-lazy-load-image-component";
import photo from '../assets/images/Pi7_Passport_Photo.jpeg'
import ContainedTypography from './ContainedTypography'
import ContainedButtons from './ContainedButtons'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';

const homeAboutData = {
    aboutData: [
        {
            id: 1,
            text: `HI! I'm Shwetkamal Kamlesh Kumar Gaud. I'm a Frontend Engineer. I'm passionate about building scalable and maintainable web applications.  I have  worked as a Software Developer(Forntend) Intern at Medkart Pharmacy PVT LTD. I love to learn new things and share my knowledge with others.`
        },
        {
            id: 2,
            text: ` Mobile app development and VAPT(Vunerability Assessment & Penetration Testing) are my other passions. React and React Native is my favorite JavaScript libraries. I'm also a big fan of Python, Java, Rust. In the future, I want to be a Full Stack Developer`,
        }
    ],
    overleafResume: 'https://mycdn.com/assets/Internship Letter-Shwetkamal Gaud-Silveroak.pdf',
    image: photo,
}

const About = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { aboutData, overleafResume, image } = homeAboutData;
    const Header = () => {
        return (
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
            //  pt={8}
            >
                <ContainedTypography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>

                        About
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
    return (
        <Stack>
            <Grid container spacing={2}
                sx={{
                    alignItems: 'center',
                    py: 4,
                }}
            >
                <Grid item xs={12} md={6}  >
                    <Header />
                    <Stack
                        spacing={3}
                        py={8}
                    >
                        {
                            aboutData.map((item) => (
                                <ContainedTypography
                                    color={isDark ? textLight : textGray}
                                    fontWeight={400}
                                    fontSize={16}
                                    key={item.id}
                                >{item.text}</ContainedTypography>
                            ))
                        }

                        <Box
                            display="flex"
                            gap={2}
                        >
                            <Link href={'/about'}>

                                <ContainedButtons
                                    btnTitle="Read More"
                                    startIcon={<ReadMoreIcon />}

                                />
                            </Link>
                            {/* <Box
                                component={"a"}
                                href={item.link}
                                target="_blank"
                            >

                            </Box> */}
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
                <Grid item xs={12} md={6}  >
                    {/* <Stack
                        alignItems="center"
                    // sx={{
                    //     p: 20,

                    // }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: '100%', sm: '100%',
                                    md: '100%', lg: '60%',
                                },
                                height: {
                                    xs: 'auto', sm: 'auto',
                                    md: 'auto', lg: 'auto',
                                },
                                filter: isDark && 'grayscale(100%)',
                                aspectRatio: '1/1',
                                borderRadius: 2,
                                overflow: 'hidden',

                            }}
                        >
                            <LazyLoadImage
                                alt='about-image'
                                effect="blur"
                                src={image}
                                width={"100%"}
                                height={"100%"}
                            />
                        </Box>
                    </Stack> */}
                    <Stack
                        alignItems="flex-end"
                    // sx={{
                    //     p: 20,

                    // }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: '100%', sm: 'auto',
                                    md: 300, lg: 400,
                                },
                                height: {
                                    xs: 'auto', sm: 'auto',
                                    md: 400, lg: 500,
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
                                width={450}
                                height={450}
                            />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Stack >
    )
}

export default About