
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


const SideBar = () => {
    return (
        <div className="d-flex align-items-center justify-content-center  w-100 pt-4 ">
            <div className="d-flex flex-column  align-items-center gap-2" style={{ width: '35%' }}>
                <div className="d-none d-lg-block" style={{ display: "block", width: '2px', height: 240, backgroundColor: '#ABB2BF' }}></div>
                <div className="d-flex flex-lg-column flex-row">
                    {
                        sidebarData.map((item) => (
                            <a className="sidebar" key={item.id} href={item.link} rel="noreferrer" target="_blank">{item.icon}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar