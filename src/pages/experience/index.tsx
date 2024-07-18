import ContainedTypography from "@/Components/ContainedTypography"
import { RootState } from "@/redux/reducers"
import { Box, Container, Stack } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const experienceData = [
    {
        id: 1,
        title: "Software Developer(Front End)Intern",
        company: "Medkart Pharmacy PVT LTD",
        hireFor: "React & NextJs",
        year: "JAN 2024 - JUL 2024",
        role: [
            "Working with CSD(Ecommerce Admin)APP, MRE(Medkart Retail Excellance), Point Of Sale(POS) For Store Person and Point Of Sale(POS) For Admin",
            "In CSD, where admin can verify the orders and also can change if user wants for that user have to call on Helpline number shown on website.",
            "In MRE, where admin can see the user's Loyalty Points & Referral Count and also can track the store person and ASM's (ASM is a person who handles several stores)",
            "Store POS is used by a store person for billing, expenses, trsnfer-in & transfer-out, etc.",
            "Admin POS is used by Admin for handling stores, vouchers, orders, etc.",
            "Responsible for Develop the Front-end of Web Application.",
            "Responsible for debugging and testing Web Application",
            "Responsible for feature extraction from UI/UX design or Reference Website or Apps",


        ],
        address: "Ahmedabad, Gujarat 380015",


    },
]

const Experience = () => {
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
                                experience
                            </span>

                        </ContainedTypography>
                    </Stack>
                    <ContainedTypography
                        fontWeight={400}
                        fontSize={16}

                        component={Link}
                        to='/'
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
    interface Data {
        title: string
        company: string
        hireFor: string
        year: string
        role: any[]
        address: string
    }
    const ExperienceCard = ({ data }: { data: Data }) => {
        const { title, company, hireFor, year, role, address } = data;

        return (
            <Box
                sx={{
                    border: '1px solid #ABB2BF',
                    display: 'inline-block',
                    // minWidth: '600px',
                    // maxWidth: '700px',
                    // minWidth: {
                    //     xs: '300px',
                    //     sm: '500px',
                    //     md: '700px',
                    // },
                    // maxWidth: {
                    //     xs: '600px',
                    //     sm: '500px',
                    //     md: '700px',

                    // },
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
                            fontFamily: 'FiraCode',
                            fontSize: 16,
                            fontWeight: 600,
                        }}
                    >{title}
                        <span style={{
                            color: "#C778DD",
                            fontWeight: 700,

                        }}>
                            {"\t"} {'('} {hireFor}{')'}
                        </span>
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
                    sx={{
                        borderBottom: '1px solid #ABB2BF',
                        p: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <ContainedTypography
                        fontSize={16}
                        fontWeight={700}
                        text={company}

                    />
                    <ContainedTypography
                        fontSize={12}
                        fontWeight={400}
                        text={address}
                        color={isDark ? textLight : textGray}
                    />
                </Box>
                <Box
                    // component={"ul"}
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'start',
                        alignItems: 'start',

                    }}
                >

                    {
                        role.map((item, index) => {
                            return (
                                <ContainedTypography
                                    component={"li"}
                                    fontSize={14}
                                    fontWeight={500}
                                    text={item}
                                    key={Math.random()}
                                    color={isDark ? textLight : textGray}

                                />
                            )
                        })
                    }

                </Box>

            </Box >
        )
    }
    return (
        <Container maxWidth={'xl'} >

            <Stack>
                <Header />
                <Stack
                    alignItems="center"
                    py={4}
                    pb={8}
                >
                    <Stack
                        direction={{
                            xs: 'column-reverse',
                            sm: 'column-reverse',
                            md: 'row-reverse',
                        }}
                        justifyContent="space-between"
                        flexWrap="wrap"
                        gap={1}
                    >
                        {
                            experienceData.map((item, index) => {
                                return (
                                    <ExperienceCard
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

export default Experience