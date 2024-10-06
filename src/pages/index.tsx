import { useSelector } from "react-redux";
import hero from "../assets/images/20241005_125644.png";
import { RootState } from "@/redux/reducers";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import About from "@/Components/About";
import Contacts from "@/Components/Contacts";
import Typography from "@/Components/Typography";
import Link from "next/link";
import Buttons from "@/Components/Buttons";
import Image from "next/image";
import dotLight from "../assets/images/dot.svg"
import dotDark from "../assets/images/dotDark.svg";
import styles from "@/styles/Home.module.css";


const heroTopSectionData = {
  title: {
    title1: "I'm",
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
    title: { title1, title3, title4, title5, title6 },
    subtitle,
    doing: { text, url, urlText },
    blockquote: { quoteText1, quoteText2, quoteText3, quoteText4, quoteBy },
    image } = heroTopSectionData;

  const { mode, textDark, textLight, textWhite, mainBgColorDark, mainBgColorLight } = useSelector((state: RootState) => state.theme)
  const isDark = Boolean(mode === 'dark')
  return (
    <div className="container d-flex align-items-center w-100 mt-5 p-0  ">
      <div className="d-flex flex-column w-100 ">
        <div className="container d-flex flex-row row justify-content-center align-items-center p-0 m-0 ">
          <div className="col-sm-12 col-md-6 ">
            <div className="d-flex flex-column  align-items-start">
              <Typography
                text={title1}
                fontWeight={600}
                fontSize={'32px'}
                textAlign={'start'}
              >
                {<br />}
                <span style={{
                  color: "#C778DD",
                  fontWeight: 700,

                }}>
                  {title3}{"\t"}
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
              </Typography>
              <Typography
                color={isDark ? textLight : textDark}
                fontSize={'16px'}
                fontWeight={400}
                textAlign={'start'}
              >
                {subtitle}
              </Typography>
              <div className="pt-2 pb-3">
                <Link href={'/contacts'}>
                  <Buttons
                    btnTitle="Contact Me"

                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 d-flex justify-content-end ">
            <div className="d-flex gap-1 flex-column align-items-center justify-content-xl-end justify-content-center position-relative px-xs-0 px-md-2 px-md-5">

              <div className="box">
                <div className="content">

                  <Image className="img-fluid"
                    alt={"hero_img"}
                    src={image}
                    style={{ width: '100%', height: '160%', zIndex: 3 }}
                  />
                  <h2>Shwetkamal Gaud</h2>
                </div>
              </div>

              <div
                style={{
                  padding: "8px",
                  border: " 1px solid #ABB2BF",
                  color: isDark ? textLight : textDark,
                  margin: "0px auto",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 3,
                  top: '2px',
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
                    textDecoration: 'none'
                  }}
                >
                  {urlText}
                </a>
              </div>
              <Image src={isDark ? dotLight : dotDark} alt="" className=" img-fluid dot-image align-self-start" />
            </div>
          </div>
        </div>
        <div className={styles.blockquoteWrapper}>
          <div className={styles.blockquote}>
            <h1 style={{ '--main-content': isDark ? mainBgColorDark : mainBgColorLight } as React.CSSProperties}>
              {quoteText1}  <span
                style={{ color: isDark ? textWhite : textDark }}
              >{quoteText2}</span> {quoteText3} <span
                style={{ color: isDark ? textWhite : textDark }}

              >  {quoteText4}</span>
            </h1>
            <h4
              style={{
                color: isDark ? textWhite : textDark
              }}
            >—{quoteBy}<br />

            </h4>
          </div>
        </div>
        <Projects />
        <Skills />
        <About />
        <Contacts />

      </div>

    </div>
  );
}
