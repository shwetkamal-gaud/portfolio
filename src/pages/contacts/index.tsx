
import { useRouter } from "next/router";
import discordIcon from "../../assets/Icon/discord.svg";
import emailIcon from "../../assets/Icon/email.svg";
import { Container, Grid, Stack } from "@mui/material";
import ContainedTypography from "@/Components/ContainedTypography";
import Link from "next/link";
import { memo } from "react";
import Image from "next/image";
import ContactForm from "@/Components/ContactForm";
import { linkedinIcon, telegramIcon } from "@/assets/Icon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";

const contactData = {
    text: `I’m interested in freelance, remote, on-site opportunities. However, if you have other requests or questions, don’t hesitate to contact me.`,
    socailAccounts: [
        {
            id: 1,
            name: 'Linkein',
            icon: linkedinIcon,
            link: 'https://linkedin.com/in/shwetkamal-gaud',
            text: 'Shwetkamal Gaud',
            isEmail: false
        },
        {
            id: 2,
            name: 'Email',
            icon: emailIcon,
            link: 'gaudshwetkamal0438@gmail.com',
            text: 'gaudshwetkamal0438@gmail.com',
            isEmail: true
        },
        {
            id: 3,
            name: 'Telegram',
            icon: telegramIcon,
            link: 'https://t.me/mrskg0438',
            text: 'Shwetkamal Gaud',
            isEmail: false

        },


    ],
    socailAccountsTitle: 'Message me here'
}
const ContactMe = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { text, socailAccounts, socailAccountsTitle } = contactData;
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
                                contacts
                            </span>

                        </ContainedTypography>
                    </Stack>
                    <ContainedTypography
                        fontWeight={400}
                        fontSize={16}

                        onClick={() => { router.back() }}
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
            </Stack>

        )
    }
    return (
        <Container maxWidth="xl">
            <Stack
                pb={8}
            >
                <Header />
                <Grid container spacing={2}
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={12} md={6}  >
                        <Stack
                            spacing={3}
                            py={8}
                        >
                            <ContainedTypography
                                color={isDark ? textLight : textGray}
                                fontWeight={400}
                                fontSize={16}
                            >
                                {text}
                            </ContainedTypography>
                        </Stack>
                        {/* <ContactForm /> */}
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <Stack
                            justifyContent="center"
                            sx={{
                                alignItems: {
                                    xs: 'start', sm: 'center',
                                },
                            }}
                        >
                            <Stack
                                sx={{
                                    border: '1px solid #ABB2BF',
                                    p: 1,
                                }}
                                spacing={1}
                            >
                                <ContainedTypography>
                                    {socailAccountsTitle}:
                                </ContainedTypography>
                                {
                                    socailAccounts.map((item) => {
                                        return (
                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                alignItems="center"
                                                component={'a'}
                                                key={Math.random()}
                                                {...(item?.isEmail ? { href: `mailto:` + item?.link }

                                                    : { href: item?.link, target: '_blank' })}
                                            >
                                                <Image src={item?.icon} alt={item?.name} />
                                                <ContainedTypography
                                                    fontWeight={400}
                                                    fontSize={16}
                                                    color={isDark ? textLight : textGray}
                                                    component="span"
                                                >
                                                    {item?.text}
                                                </ContainedTypography>
                                            </Stack>
                                        )
                                    })
                                }
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid >
            </Stack >
        </Container>
    )
}

export default memo(ContactMe)