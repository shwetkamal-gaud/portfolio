
import { SVGComponent, FigmaIcon, GithubIcon, LinkDinIcon, LogoImg, TelegramIcon, TwitterIcon } from "../assets/svg";
import { Container, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import ContainedTypography from "./ContainedTypography";
import { RootState } from "@/redux/reducers";

const footerData = {
    socials: [
        {
            id: 1,
            name: 'github',
            link: "https://github.com/mrskg0438",
            img: <GithubIcon />
        },
        {
            id: 2,
            name: 'linkedin',
            link: "https://www.linkedin.com/in/shwetkamal-gaud-3393511bb/",
            img: <LinkDinIcon />
        },
        {
            id: 3,
            name: 'telegram',
            link: "https://t.me/mrskg0438",
            img: <TelegramIcon />
        },
        {
            id: 4,
            name: 'twitter',
            link: "https://x.com/GaudShwetkamal",
            img: <TwitterIcon />
        },
    ],
    socialsTitle: "Social Media",
    discription: `Frontend Engineer, React Native developer & Penetration Tester `,
    link: 'https://dev-shohan.netlify.app/',
    copyRight: 'Shwetkamal Gaud. All rights reserved.',
    logo: logo,
    logoTitle: 'Shwetkamal Gaud',
    refText: 'Special Thanks to Elias Dev for sharing this UI/UX design with Figma Community',

}

const Footer = () => {
    const { mode, textDark, textLight, textGray, mainBgColorDark, mainBgColorLight } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { socials, socialsTitle, discription, link, copyRight, logo, logoTitle,
        refText } = footerData;
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: isDark ? mainBgColorDark : mainBgColorLight, }}>
            <Stack
                sx={{
                    borderTop: '1px solid #ABB2BF',
                    py: 8,
                }}
            >
                <Grid container spacing={2}
                >
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Stack
                            spacing={4}
                        >
                            <Stack
                                direction="row"
                                spacing={6}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                    component="a"
                                    href="/"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    <LogoImg
                                        iconColor={isDark ? textLight : textDark}
                                    />
                                    <ContainedTypography>
                                        {logoTitle}
                                    </ContainedTypography>
                                </Stack>
                                <ContainedTypography
                                    fontSize="16px"
                                    fontWeight={400}
                                    color={isDark ? textLight : textGray}
                                    component={"a"}
                                    href="/"
                                    target="_blank"
                                >
                                    {link}
                                </ContainedTypography>
                            </Stack>

                            <ContainedTypography
                                fontSize="16px"
                                fontWeight={400}
                                align="center"
                            >
                                {discription}
                            </ContainedTypography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack
                            alignItems="center"
                            justifyContent='center'
                        >
                            <ContainedTypography>
                                {socialsTitle}
                            </ContainedTypography>
                            <Stack
                                direction="row"
                                py={1}
                                gap={1}
                            >
                                {
                                    socials.map((item, index) => {
                                        return (
                                            <Box
                                                component={"a"}
                                                href={item.link}
                                                target="_blank"
                                                key={Math.random()}
                                                sx={{
                                                    '&:hover': {
                                                        transform: 'scale(1.1)',
                                                    }
                                                }}
                                            >
                                                {item.img}

                                            </Box>
                                        )
                                    })
                                }


                            </Stack>
                            <Stack
                                justifyContent='center'
                                alignItems='center'
                            >
                                {
                                    refText && (
                                        <>
                                            <ContainedTypography
                                                fontSize="12px"
                                                fontWeight={400}
                                                color={isDark ? textLight : textGray}
                                            >
                                                {refText}
                                            </ContainedTypography>
                                            <Box>
                                                <Box
                                                    component={"a"}
                                                    href={"https://www.figma.com/community/file/1164933568884615740"}
                                                    target="_blank"
                                                >
                                                    <FigmaIcon />
                                                </Box>
                                            </Box>
                                        </>
                                    )
                                }
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                <Stack
                    justifyContent="center"
                    alignItems="center"
                    py={6}
                >
                    <ContainedTypography
                        fontSize="12px"
                        fontWeight={400}
                        color={isDark ? textLight : textGray}
                    >
                        ©{' '}
                        {
                            new Date().getFullYear()
                        }
                        {' '}
                        {copyRight}
                    </ContainedTypography>
                </Stack>
            </Stack >
        </Container>
    )
}

export default Footer 
