import React from 'react'
import courseCertificate from '../../assets/images/certification/Certificate.jpg';
import offerLatter from '../../assets/images/certification/Internship Letter-Shwetkamal Gaud-Silveroak-1.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { Box, Chip, Container, Stack } from '@mui/material';
import ContainedTypography from '@/Components/ContainedTypography';
import { useRouter } from 'next/router';
import Image from 'next/image';
const data = {
    title: 'Software developer Intern',
    platform: 'Medkart Pharmacy PVT LTD',
    tag: ['REDUX', 'REACT - REDUX', ' REDUX - SUGA', 'NextJs', 'Bootstrap', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    // feedback: 'MD. Abdul Kader participated in Learn with Sumit Platform presents "Think in a Redux Way" course and performed exceptionally well. He completed all the modules very seriously and participated in all the quizzes & all the assignments with excellent results. He appeared in the Final Examination of the course and scored 96% marks. Learn with Sumit Platform believes he can be an excellent resource for any web development company. We wish him continued success in life.',
    courseCertificate: courseCertificate,
    offerLatter: offerLatter,
}
const Certificates = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const router = useRouter()
    const Header = () => {
        return (
            <>
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
                                certification
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
                    My Certifications
                </ContainedTypography>
            </>
        )
    }
    const getColor = (index: any) => {
        switch (index) {
            case 0:
                return 'primary';
            case 1:
                return 'secondary';
            case 2:
                return 'success';
            case 3:
                return 'warning';
            case 4:
                return 'error';
            default:
                return 'primary';
        }

    }
    return (
        <Container maxWidth='xl'>
            <Stack pb={8}>
                <Header />
                <Stack
                    mt={4}
                    p={2}
                    borderRadius={2}
                    sx={{
                        backgroundColor: isDark ? '#2E3440' : '#f5f5f5',
                    }}

                >
                    <ContainedTypography>
                        {data?.title} by {' '}
                        <a href="https://learnwithsumit.com/certificates/verify/LWSCTXN-SNT7PO6I" target="_blank" rel="noreferrer"
                            title="Click to verify the certificate"
                            color='#C778DD'
                        >
                            {data?.platform}
                        </a>
                    </ContainedTypography>
                    {/* <Stack
                        width={'100%'}
                        height={'1px'}
                        mt={2}
                        backgroundColor={'#ABB2BF'}
                    /> */}
                    <ContainedTypography
                        color={isDark ? textLight : textGray}
                        fontSize={16}
                        fontWeight={400}
                        mt={2}
                    >
                        Topics i learned from this course
                    </ContainedTypography>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        gap={2}
                        py={2}
                    >
                        {
                            data?.tag?.map((item, index) => (
                                <Chip key={index} label={item}
                                    size="small"
                                    color={getColor(index)}
                                />
                            ))
                        }
                    </Stack>
                    {/* <Stack
                        width={'100%'}
                        height={'1px'}
                        mt={2}
                        backgroundColor={'#ABB2BF'}
                    /> */}
                    <ContainedTypography
                        color={isDark ? textWhite : textDark}
                        fontSize={16}
                        fontWeight={400}
                        mt={2}
                    >
                        Course instructor feedback
                    </ContainedTypography>

                    <Stack direction="row"
                        justifyContent="center"
                        flexWrap="wrap"
                        // alignItems="center"
                        gap={2}
                        p={2}
                        border={'1px solid #ABB2BF'}
                        pb={4}

                    >
                        <Stack
                            width={{
                                xs: '100%',
                                sm: '100%',
                                md: '30%'
                            }}
                        >
                            <ContainedTypography
                                color={isDark ? textWhite : textDark}
                                fontSize={16}
                                fontWeight={400}
                                pb={2}
                            >
                                Course Certificate
                            </ContainedTypography>
                            <Box
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: '1px solid #ABB2BF',
                                    display: 'block',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <Image
                                    alt="certificate"
                                    src={data?.courseCertificate}
                                    width={100}
                                    height={100}
                                />
                            </Box>
                        </Stack>
                        <Stack
                            width={{
                                xs: '100%',
                                md: '30%'
                            }}
                        >
                            <ContainedTypography
                                color={isDark ? textWhite : textDark}

                                fontSize={16}
                                fontWeight={400}
                                pb={2}
                            >
                                Course Report
                            </ContainedTypography>
                            <Box
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: '1px solid #ABB2BF',
                                    display: 'block',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <Image
                                    alt="certificate"
                                    src={data?.offerLatter}
                                    width={100}
                                    height={100}

                                />
                            </Box>
                        </Stack>
                    </Stack>


                </Stack >


            </Stack >
        </Container>
    )
}

export default Certificates