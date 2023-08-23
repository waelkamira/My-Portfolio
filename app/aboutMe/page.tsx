import Box from "@mui/material/Box";
import Image from "next/image";
import Styles from "./aboutMe.module.css";
import myPhoto from "./myPhoto.png";
import Container from "@mui/material/Container";
import back1 from "./back1.jpg";
import Link from "@mui/material/Link";
import aboutmeCircle1 from "./aboutmeCircle1.png";
import aboutmeCircle2 from "./aboutmeCircle2.png";
import aboutmeCircle3 from "./aboutmeCircle3.png";
import linkedin from "./linkedin.png";
import cv from "./cv.png";
import github from "./github.png";
export default function AboutMe() {
  return (
    <Container className={Styles.main}>
      <Box style={{ textAlign: "center" }}>
        <div className={Styles.allTitles}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 className={Styles.title}>WAEL KAMIRA</h1>

            {/* horizontal line */}
            <div style={{ display: "flex" }}>
              <hr
                style={{
                  height: "5px",
                  background: "#c3ef44",
                  width: "8vw",
                }}
              />{" "}
              <hr
                style={{
                  height: "5px",
                  background: "#44c1ef",
                  width: "8vw",
                }}
              />{" "}
              <hr
                style={{
                  height: "5px",
                  background: "#c11afd",
                  width: "8vw",
                }}
              />
            </div>
          </div>
        </div>

        <Image
          src={myPhoto}
          alt="Landscape picture"
          className={Styles.myPhoto}
        />
      </Box>

      <Box className={Styles.box}>
        <div className={Styles.allTitles}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Link href="/aboutMe" underline="none" target="-blank">
              <h1 className={Styles.title}>ABOUT ME </h1>
            </Link>
          </div>
        </div>
        <div className={Styles.card}>
          <Link href="/aboutMe" target="-blank">
            <Image
              className={Styles.circle}
              src={aboutmeCircle1}
              alt="Landscape picture"
            ></Image>
          </Link>

          <div>
            <div className={Styles.textAndParagraph}>
              <div className={Styles.project}>
                <h1>ABOUT ME </h1>
                <h1>01</h1>
              </div>
              <Box className={Styles.textAndParagraph}>
                <div>
                  <hr className={Styles.line} />
                </div>
                <div className={Styles.paragraph}>
                  <p>
                    🎨 Creative junior front-end developer proficient in HTML,
                    JavaScript, and a range of UI frameworks including Tailwind,
                    Bootstrap, and Material UI. 🚀 Specializing in React and
                    Next.js, I craft seamless and engaging user experiences,
                    blending design finesse with interactivity. 🌟 Enthusiastic
                    about staying ahead of industry trends and collaborating
                    within teams to bring innovative web visions to life. Let's
                    elevate your brand's digital presence together! 🛠️🌐
                  </p>
                </div>
              </Box>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <Link href="/aboutMe" target="blank">
            <Image
              className={Styles.circle}
              src={aboutmeCircle2}
              alt="Landscape picture"
            ></Image>
          </Link>

          <div>
            <div className={Styles.textAndParagraph}>
              <div className={Styles.project}>
                <h1>EDU</h1>
                <h1>02</h1>
              </div>
              <div className={Styles.textAndParagraph}>
                <div>
                  <hr className={Styles.line} />
                </div>
                <div className={Styles.paragraph}>
                  <p>
                    I embraced the challenge of Re:coded's Front-End boot camp,
                    triumphing over its exclusive 7% acceptance rate. Through
                    HTML, CSS, and JavaScript, I shaped captivating digital
                    experiences, while collaborative teamwork fueled our shared
                    achievements. Conquering hurdles, I honed skills, formed
                    lasting connections, and now stand equipped to innovate in
                    the ever-evolving tech realm. This journey is just the
                    beginning of my boundless potential. 🚀🌟
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <Link href="/aboutMe" target="blank">
            <Image
              className={Styles.circle}
              src={aboutmeCircle3}
              alt="Landscape picture"
            ></Image>
          </Link>

          <div className={Styles.textAndParagraph}>
            <div className={Styles.project}>
              <h1>FIND ME</h1>
              <h1>03</h1>
            </div>
            <div className={Styles.textAndParagraph}>
              <div>
                <hr className={Styles.line} />
              </div>
              <div className={Styles.links}>
                <Link
                  href="https://www.linkedin.com/in/wael-kamira-9b709726b/"
                  underline="none"
                  target="_blank"
                >
                  <div className={Styles.linkTextAndButton}>
                    <Image
                      className={Styles.linkButton}
                      src={linkedin}
                      alt="Landscape picture"
                    ></Image>
                    <h1 className={Styles.linkText}>LinkedIn</h1>
                  </div>
                </Link>

                <Link
                  href="https://github.com/waelkamira"
                  target="_blank"
                  underline="none"
                >
                  <div className={Styles.linkTextAndButton}>
                    <Image
                      className={Styles.linkButton}
                      src={github}
                      alt="Landscape picture"
                    ></Image>
                    <h1 className={Styles.linkText}>GitHub</h1>
                  </div>
                </Link>
                <Link
                  href="https://drive.google.com/uc?export=download&id=1ihxyc-wAe-vHfdn9QCItvV40P_Yu-8Zf"
                  download="Wael Kamira CV"
                  underline="none"
                >
                  <div className={Styles.linkTextAndButton}>
                    <Image
                      className={Styles.linkButton}
                      src={cv}
                      alt="Landscape picture"
                    ></Image>
                    <h1 className={Styles.linkText}>CV</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
}
