import ContainedTypography from "@/Components/ContainedTypography"
import { RootState } from "@/redux/reducers"
import { Box, Container, Stack } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"


const educationData = [
    {
        id: 1,
        title: "Btech in Computer Science and Engineering Specialization With Cyber Security",
        school: "Silver Oak College Of Engineering & Technology(SOCET)",
        year: "OCT 2020 - JUN 2024",
    },
    {
        id: 2,
        title: "Higher Secondary Certificate (HSC)",
        school: "Rajasthan Hindi High School, Ahmedabad, Gujarat",
        year: "JUN 2019 - MAY 2020",
    },
    {
        id: 3,
        title: "Secondary School Certificate (SSC)",
        school: "K.M Panchal Hindi Vidhyalay, Ahmedabad, Gujarat",
        year: "JUN 2017 - MAY 2018",
    }
]

const Education = () => {
        const router = useRouter()
        const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
        const isDark = Boolean(mode === 'dark')
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
                                education
                            </span>

                        </ContainedTypography>
                    </Stack>
                    <ContainedTypography
                        fontWeight={400}
                        fontSize={16}

                        //component={<Link href={''}/>}
                        // to={navigate(-1)}
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
            </Stack>

        )
    }
    const SkillsCard = ({ data }: { data: any }) => {
        const { title, school, year } = data;
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
                <Box>
                    <Box
                        sx={{
                            borderBottom: '1px solid #ABB2BF',
                            p: 1,
                            color: isDark ? textWhite : textDark,
                        }}
                        fontSize={16}
                        fontWeight={600}
                    >{title}
                        <Stack
                            alignItems="flex-end"
                            sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                color: isDark ? textLight : textGray,
                                fontFamily: 'FiraCode',
                            }}
                        >
                            {year}
                        </Stack>
                    </Box>
                </Box>
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

                    <ContainedTypography
                        component={"li"}
                        fontSize={14}
                        fontWeight={500}
                        text={school}
                        color={isDark ? textLight : textGray}
                    />

                </Box>

            </Box >
        )
    }
    return (
        <Container maxWidth="xl">
            <Stack>
                <Header />
                <Stack
                    alignItems="center"
                    py={4}
                    pb={8}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        gap={1}
                    >
                        {
                            educationData.map((item, index) => {
                                return (
                                    <SkillsCard
                                        key={Math.random()}
                                        data={item}

                                    />
                                )
                            })
                        }
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Education