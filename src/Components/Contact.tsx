
import { Box, Grid, Stack } from '@mui/material';
import emailIcon from '../assets/Icon/email.svg'
import ContainedTypography from './ContainedTypography';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import Image from 'next/image';
import { telegramIcon } from '@/assets/Icon';
const homeContactData = {
    text: `I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.`,
    socailAccounts: [
        {
            id: 1,
            name: 'Discord',
            icon: telegramIcon,
            link: 'https://t.me/mrskg0438',
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
    ],
    socailAccountsTitle: 'Message me here'
}

const Contact = () => {
    const { text, socailAccounts, socailAccountsTitle } = homeContactData;
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark');
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
                        Contact
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
                    pb: 8,
                }}
            >
                <Grid item xs={12} md={6}  >
                    <Header />
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
                                            <Image style={{ color: `${isDark ? textLight : textGray}` }} color={isDark ? textLight : textGray} src={item?.icon} alt={item?.name} />
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
    )
}

export default Contact