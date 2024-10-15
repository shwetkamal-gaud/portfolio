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
    image } = heroTopSectionData;

  const { mode, textDark, textLight, textGray } = useSelector((state: RootState) => state.theme)
  const isDark = Boolean(mode === 'dark')
  return (
    <div className="container d-flex align-items-center w-100 mt-5 p-0  ">
      <div className="d-flex flex-column w-100 ">
        <div className="container d-flex flex-row row justify-content-between align-items-center p-0 m-0 ">
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
          <div className="col-xs-12 col-md-6 d-flex justify-content-center  ">
            <div className="d-flex gap-1 flex-column align-items-center justify-content-end position-relative px-xs-0 px-md-2 px-md-5">

              <div className="box">
                <div className="content ">
                  <Image className="img-fluid"
                    alt={"hero_img"}
                    src={image}
                    style={{ width: '100%', height: '182%', zIndex: 3 }}
                  />
                  <h2>Shwetkamal Gaud</h2>
                </div>
              </div>
            </div>
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
