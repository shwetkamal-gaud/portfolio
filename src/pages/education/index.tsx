import Typography from '@/Components/Typography'
import { RootState } from '@/redux/reducers'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

interface EducationData {
    id: number
    title: string
    school: string
    year: string
    courseWork: string
}

const educationData: EducationData[] = [
    {
        id: 1,
        title: "B.Tech in Computer Science and Engineering Specialization With Cyber Security",
        school: "Silver Oak College Of Engineering & Technology(SOCET)",
        year: "OCT 2020 - JUN 2024",
        courseWork: `Data Structures, Algorithams, Database, Operating System, Networking,
         OOPS in Java, Python, C, Network Security, Mobile Security, Web Security, Ethical Hacking, Cryptography`
    },
    {
        id: 2,
        title: "Higher Secondary Certificate (HSC)",
        school: "Rajasthan Hindi High School, Ahmedabad, Gujarat",
        year: "JUN 2019 - MAY 2020",
        courseWork: `Maths, Physics, Chemistry, Computer`
    },
    {
        id: 3,
        title: "Secondary School Certificate (SSC)",
        school: "K.M Panchal Hindi Vidhyalay, Ahmedabad, Gujarat",
        year: "JUN 2017 - MAY 2018",
        courseWork: 'Maths, Science, Computer'
    }
]

const EducationPage = () => {
    const router = useRouter()
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const Header = () => {
        return (
            <div className='d-flex gap-2 flex-column w-100' >
                <div className='d-flex flex-row align-items-center w-100 justify-content-between gap-2 pt-5'>
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <Typography
                            text='/'
                            color='#C778DD'
                            fontWeight={500}
                            fontSize={32}
                        >
                            <span style={{ color: isDark ? textWhite : textDark }}>
                                education
                            </span>

                        </Typography>
                    </div>
                    <Typography
                        fontWeight={400}
                        fontSize={16}
                        onClick={() => router.back()}
                        bB={'2px solid #C778DD'}
                        cursor={'pointer'}

                    >
                        {'<'}~~ Back
                    </Typography>

                </div>

            </div>

        )
    }
    const SkillsCard = ({ data }: { data: EducationData }) => {
        const { title, school, year, courseWork } = data;
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
                <div>
                    <div
                        style={{
                            borderBottom: '1px solid #ABB2BF',
                            padding: 10,
                            color: isDark ? textWhite : textDark,
                            fontSize: 16,
                            fontWeight: 600,
                            fontFamily: 'FiraCode'
                        }}
                    >{title}
                        <div className='d-flex flex-column'
                            style={{
                                alignItems: "flex-end",
                                fontSize: 12,
                                fontWeight: 400,
                                color: isDark ? textLight : textGray,
                                fontFamily: 'FiraCode',
                            }}
                        >
                            {year}
                        </div>
                    </div>
                </div>
                <ul
                    style={{
                        padding: '6px 10px 0px 10px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'start',
                        alignItems: 'start',
                        listStyle: 'none',
                        fontFamily: 'FiraCode'
                    }}
                >

                    <li style={{ fontSize: 14, fontWeight: 500, color: isDark ? textLight : textGray }}
                    >{school}</li>

                </ul>
                <Typography p={'0px 10px 5px 10px'} fontSize={14} fontWeight={500} color={isDark ? textLight : textGray}>{courseWork}</Typography>

            </div>
        )
    }
    return (
        <div className='container-xl' >
            <div className='d-flex flex-column'>
                <Header />
                <div className='d-flex flex-column align-items-center py-5 pb-4'>
                    <div className='d-flex flex-row justify-content-center justify-content-xl-between flex-wrap gap-3'>
                        {
                            educationData.map((item) => {
                                return (
                                    <SkillsCard
                                        key={Math.random()}
                                        data={item}

                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationPage