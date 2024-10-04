import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import About from "@/Components/About";
import Contacts from "./contacts";
import dotLight from "../assets/images/dot.svg"
import dotDark from "../assets/images/dotDark.svg";
import hero from "../assets/images/hero.png";
import ContainedTypography from "@/Components/ContainedTypography";
import ContainedButtons from "@/Components/ContainedButtons";
import CallIcon from '@mui/icons-material/Call';
import Link from "next/link";
import logoOutline from "../assets/images/logoOutline.svg";
import { Box, Container, Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import Contact from "@/Components/Contact";

// def longestSubarray( n, arr, k ) -> int:
//         # code here
//         maxi = 0
//         i = 0
//         j = 1
//         if  n == 1 and sum(arr[i:j]) % k == 0:
//             return 1
        
//         while j < n:
//             if arr[j-1]<=arr[j]:
//                 j+=1
//             else:
//                 i = j
//                 j += 1
            
//             if sum(arr[i:j]) % k == 0: 
//                 print(sum(arr[i:j])//k)
//                 maxi = max(maxi, len(arr[i:j])-1)
                
//         if k == 1 and maxi == 0:
//             return 1
            
//         return maxi
    
    
// n = 2
// k = 9
// arr = [6,7]
// print(longestSubarray(n,arr,k))

const heroTopSectionData = {
  title: {
    title1: "Shwetkamal Gaud",
    title2: "is a",
    title3: "Frontend Engineer",
    title4: "&",
    title5: "React Native",
    title6: "developer!",
  },
  subtitle: `React JS Developer skilled in building robust web and mobile
  applications using  React.js and Next.js. Proficient in creating professional mobile
  solutions with a strong focus on user experience. Passionate about delivering user-centric experiences through
  technology and dedicated to crafting high-quality applications.`,
  image: hero,
  doing: {
    text: "Worked at",
    url: 'https://medkart.com/',
    urlText: 'Medakart Pharmacy Pvt Ltd'
  },
  blockquote: {
    quoteText1: "The secret",
    quoteText2: " of getting",
    quoteText3: "ahead is",
    quoteText4: "getting started",
    quoteBy: "Mark Twain",
  }


}
export default function Home() {
  const {
    title: { title1, title2, title3, title4, title5, title6 },
    subtitle,
    doing: { text, url, urlText },
    blockquote: { quoteText1, quoteText2, quoteText3, quoteText4, quoteBy },
    image } = heroTopSectionData;

  const { mode, mainBgColorDark, mainBgColorLight, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
  const isDark = Boolean(mode === 'dark')
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', alignItems: "center", }}>
      <Stack >
        <Grid container spacing={2}
          sx={{
            display: 'flex',
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6} >
            <Stack spacing={2}>
              <ContainedTypography
                text={title1}
                fontWeight={600}
                fontSize={'32px'}

              > {title2}
                {<br />}
                <span style={{
                  color: "#C778DD",
                  fontWeight: 700,

                }}>
                  {title3} {"\t"}
                </span>
                {title4} {<br />}
                <span color="#C778DD"
                  style={{
                    color: "#C778DD",
                    fontWeight: 700,

                  }}
                >
                  {"\t"} {title5} {"\t"}
                </span>
                {title6}
              </ContainedTypography>
              <ContainedTypography
                color={isDark ? textLight : textDark}
                fontSize={'16px'}
                fontWeight={400}
              >{subtitle}
              </ContainedTypography>
              <Box pt={2}>
                <Link href={'/contacts'}>

                  <ContainedButtons
                    //component={<Link href={'/contacts'} />}
                    btnTitle={"Contact Me"}
                    startIcon={<CallIcon />}

                  />
                </Link>

              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                px: { xs: 0, md: 2, lg: 12 },
              }}
            >
              <Image src={logoOutline} alt="" style={{
                fontSize: "32px",
                width: 200,
                height: 200,
                position: "absolute",
                top: '10%',
                zIndex: 1,
                aspectRatio: "1/1",
              }}
              />

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  borderBottom: "1px solid #C778DD",
                  display: "block",
                  maxWidth: "100%",
                }}
              >
                <Image
                  alt={"hero_img"}
                  src={image}
                  width={500}
                  height={450}
                />
              </Box>

              <Box
                sx={{
                  padding: "8px",
                  border: " 1px solid #ABB2BF",
                  color: isDark ? textLight : textDark,
                  margin: "0px auto",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  top: "1px",
                  zIndex: 3,
                  gap: "8px",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    content: "",
                    display: "inline-block",
                    aspectRatio: "1/1",
                    width: "16px",
                    backgroundColor: "#C770DB1A",
                    border: "1px solid #C778DD",
                  }}
                ></span>
                {text}
                <a href={url} target="_blank" rel="noreferrer"
                  style={{
                    color: "#C778DD",
                  }}
                >
                  {urlText}
                </a>
              </Box>
              <Image src={isDark ? dotLight : dotDark} alt="" className="dot-image" />
            </Box>


          </Grid>
        </Grid >
        <div className={styles.blockquoteWrapper}>
          <div className={styles.blockquote}>
            <Box
              component={'h1'}
              sx={{
                ':before': {
                  content: '""',
                  position: "absolute",
                  width: 80,
                  border: `6px solid ${isDark ? mainBgColorDark : mainBgColorLight}`,
                  bottom: -3,
                  left: 50,
                  zIndex: 2,
                },

                ':after': {
                  content: '""',
                  position: "absolute",
                  border: "2px solid #C778DD",
                  borderRadius: "0 50px 0 0",
                  width: "60px",
                  height: " 60px",
                  bottom: "-62px",
                  left: "50px",
                  borderBottom: "none",
                  borderLeft: "none",
                  zIndex: 3,
                },

              }}
            >
              {quoteText1}  <span
                style={{ color: isDark ? textWhite : textDark }}
              >{quoteText2}</span> {quoteText3} <span
                style={{ color: isDark ? textWhite : textDark }}

              >  {quoteText4}</span>
            </Box>
            <h4
              style={{
                color: isDark ? textWhite : textDark
              }}
            >—{quoteBy}<br />
              {/* <em>Web Site Usability: A Designer's Guide</em> */}
            </h4>
          </div>
        </div>
        <Projects />
        <Skills />
        <About />
        <Contact />
      </Stack >
    </Container>
  )
}
