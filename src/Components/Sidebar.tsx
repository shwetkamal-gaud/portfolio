import { Box, Stack } from "@mui/material";
import React from "react";
import { EmailIcon, GithubIcon, TelegramIcon } from "../assets/svg";

const sidebarData = [
    {
        name: 'discord',
        icon: <TelegramIcon />,
        link: 'https://t.me/mrskg0438',
        id: 1
    },
    {
        name: 'github',
        icon: <GithubIcon />,
        link: "https://github.com/mrskg0438",
        id: 2
    },
    {
        name: 'email',
        icon: <EmailIcon />,
        link: "mailto: gaudshwetkamal0438@gmail.com",
        id: 3
    }

]
export default function Sidebar() {
    return (
        <Stack
            sx={{
                width: "100%",
                pt: 4
            }}
        >
            <Stack
                alignItems="center"
                spacing={2}
                width="35%"
            >
                <Box
                    sx={{
                        width: "2px",
                        height: 240,
                        backgroundColor: "#ABB2BF",
                    }}
                />
                <Stack>
                    {
                        sidebarData.map((item) => (
                            <Box
                                component="a"
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                key={item.id}
                                sx={{
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        // transition: "all 0.3s ease-in-out",
                                    },
                                }}
                            >  {item.icon}
                            </Box>
                        ))
                    }

                </Stack>

            </Stack>
        </Stack>
    )
}
