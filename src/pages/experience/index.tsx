import Typography from '@/Components/Typography'
import { RootState } from '@/redux/reducers'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const experienceData = [
    {
        id: 1,
        title: "Software Developer Intern(Front-End)",
        company: "Medkart Pharmacy PVT LTD",
        hireFor: "React & NextJs",
        year: "JAN 2024 - JUL 2024",
        role: [
            "Working with CSD(Ecommerce Admin)APP, MRE(Medkart Retail Excellance), Point Of Sale(POS) For Store Person and Point Of Sale(POS) For Admin",
            "Developed new features and modules in CSD, where admin can verify the orders and also can change if user wants for that user have to call on Helpline number shown on website.",
            "Developed new features and modules in MRE, where admin can see the user's Loyalty Points & Referral Count and also can track the store person and ASM's (ASM is a person who handles several stores)",
            "Contributed in Developing Store POS System is used by a store person for billing, expenses, trsnfer-in & transfer-out, etc. purposes",
            "Contributed in Developing Admin POS System is used by Admin for handling stores, vouchers, orders, etc. purposes",
            "Responsible for Developing, debugging and testing  Web Application.",
            "Responsible for feature extraction from UI/UX design or Reference Website or Apps",
        ],
        address: "Ahmedabad, Gujarat 380015",


    },
]
interface Data {
    title: string
    company: string
    hireFor: string
    year: string
    role: string[]
    address: string
}


const ExperiencePage = () => {
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
                                experience
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
    const ExperienceCard = ({ data }: { data: Data }) => {
        const { title, company, hireFor, year, role, address } = data;

        return (
            <div
                style={{
                    border: '1px solid #ABB2BF',
                    display: 'inline-block',
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                    padding: 0,
                    margin: 0

                }}
            >
                <div>
                    <div
                        style={{
                            borderBottom: '1px solid #ABB2BF',
                            padding: 6,
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
                        <div className='d-flex flex-column'
                            style={{
                                alignItems: "flex-end",
                                fontSize: 12,
                                paddingRight: 12,
                                fontWeight: 400,
                                color: isDark ? textLight : textGray,
                                fontFamily: 'FiraCode',
                            }}

                        >
                            {year}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        borderBottom: '1px solid #ABB2BF',
                        padding: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={700}
                        text={company}
                        p={8}

                    />
                    <Typography
                        fontSize={12}
                        fontWeight={400}
                        text={address}
                        color={isDark ? textLight : textGray}
                        p={12}
                    />
                </div>
                <div
                    style={{
                        padding: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'start',
                        alignItems: 'start',

                    }}
                >

                    {
                        role.map((item) => {
                            return (
                                <li style={{ fontFamily: 'FiraCode', fontSize: 14, fontWeight: 500, padding: 8, color: isDark ? textLight : textGray }}
                                    key={Math.random()}
                                    color={isDark ? textLight : textGray}
                                >{item}</li>
                            )
                        })
                    }

                </div>

            </div >
        )
    }

    return (
        <div className='container-xxl'>

            <div className='d-flex flex-column '>
                <Header />
                <div className='d-flex flex-column align-items-center py-5 pb-4'>
                    <div className='d-flex column-reverse justify-content-between flex-wrap gap-2' >
                        {
                            experienceData.map((item) => {
                                return (
                                    <ExperienceCard
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

export default ExperiencePage