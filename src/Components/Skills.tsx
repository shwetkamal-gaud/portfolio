import Image from 'next/image'
import React from 'react'
import skillLeftImg from '../assets/images/skillRacktangle.svg'
import Typography from './Typography'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'


const Ractangle = () => {
    return (
        <div className='p-4'>
            <Image src={skillLeftImg} alt="skillLeftImg" style={{ width: '100%', height: 'auto' }} />
        </div >

    )
}



const mySkills = [
    {
        id: 1,
        title: "Programming Languages",
        items: ["JavaScript,","TypeScript,", "Python,", "Java,", "C/C++,"]
    },
    {
        id: 2,
        title: 'Libraries & Frameworks',
        items: ["React ,", " React Native,", "NextJs,", "Redux,", "Redux-Saga"]
    },
    {
        id: 3,
        title: 'Frontend CSS Library',
        items: ["HTML/CSS,", "SASS,","SCSS,", " Material-UI,", "Tailwind CSS,", "Bootstrap,", "Native Base,"]
    },
    {
        id: 4,
        title: 'Other Skills & Tools',
        items: ["Git/Github,", " VS Code,", "Android Studio,", "Adobe Photoshop,", "Adobe Illustrator"]
    },
    {
        id: 5,
        title: 'Cloud/Databases',
        items: ["MongoDB(Exploring),", "PostgreSQL(Exploring)"]
    },
    {
        id: 7,
        title: 'Areas of Interest',
        items: ["Web Design and Development, ", " Mobile App Development", "Vulnerability Assessment & Penetration Testing"]
    },
    {
        id: 8,
        title: 'Soft Skills',
        items: ["Problem Solving, Self-learning, ", "Adaptability"]
    },
    {
        id: 6,
        title: 'Communication Languages',
        items: ["Hindi,", " English,", " Gujarati"]
    }
]

const Skills = () => {

    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const Header = () => {
        return (

            <div className='d-flex flex-row align-items-center gap-2 pt-5'

            >
                <Typography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>
                        Skills
                    </span>

                </Typography>

                <div className='ms-3    '
                    style={{
                        width: 103,
                        height: '1.5px',
                        backgroundColor: '#C778DD',
                    }}
                />
            </div>

            // </Stack>
        )
    }
    const SkillsCard = ({ title, skills }: { title: string, skills: string[] }) => {
        return (
            <div
                style={{
                    border: '1px solid #ABB2BF',
                    display: 'inline-block',
                    minWidth: '200px',
                    maxWidth: '300px',
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,

                }}

            >
                <div
                    style={{

                        borderBottom: '1px solid #ABB2BF',
                        display: 'block',
                        width: '100%',
                        alignSelf: 'center'
                    }}
                >
                    <Typography
                        fontSize={15}
                        fontWeight={600}
                        textAlign={'start'}
                        text={title}
                        p={'10px 0px 10px 1px'}
                    />
                </div>
                <ul
                    style={{
                        padding: '8px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        justifyContent: 'start',
                        alignItems: 'start',
                        marginTop: '16px',
                        marginBottom: '16px'

                    }}
                >
                    {skills?.map((skill, index) => {
                        return (
                            <li
                                key={index}
                                style={{
                                    listStyle: 'none',
                                    fontSize: 14,
                                    fontWeight: 500,
                                    fontFamily: 'FiraCode',
                                    color: isDark ? textLight : textGray,
                                }}

                            >{skill}</li>
                        )
                    })}

                </ul>

            </div >
        )
    }
    return (
        <div
        >
            <Header />
            <div className='container row  py-2 pb-5'
                style={{
                    alignItems: "center",
                }}
            >
                <div className='item col-xs-12 col-md-4'  >
                    <div className='d-flex'
                    >
                        <Ractangle />
                    </div>
                </div>
                <div className='item col-xs-12 col-md-8 ' >
                    <div className='d-flex row flex-wrap g-1 gap-2 justify-content-center '

                    >
                        {
                            mySkills?.map((skill, index) => {
                                return (
                                    <SkillsCard
                                        key={index}
                                        title={skill?.title}
                                        skills={skill?.items}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </ div>)

}

export default Skills