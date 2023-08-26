import Styles from "./Styles.module.css";
import Image from "next/image";
import circle1 from "./circle1.png";
import handle1 from "./handle1.png";
import circle2 from "./circle2.png";
import circle3 from "./circle3.png";
import Link from "@mui/material/Link";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import middle from "./middle.png";

export default function Cards() {
  return (
    <>
      <div>
        <Container maxWidth="lg" className={Styles.main}>
          <Box>
            <div className={Styles.allTitles}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h3 className={Styles.myProjects}>MY PROJECTS</h3>
                <Link href="/aboutMe" underline="none">
                  <h1 className={Styles.title}>WAEL KAMIRA</h1>
                </Link>
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
          </Box>
          <Box className={Styles.box}>
            <div className={Styles.card}>
              <div>
                <Link
                  href="https://waelkamira.github.io/moviesProject/"
                  underline="none"
                  target="_blank"
                >
                  <h4 className={Styles.text1}>MOVIES WEBSITE</h4>
                </Link>
                <h5 className={Styles.text2}>INDIVIDUAL WORK</h5>
              </div>

              <Link
                href="https://waelkamira.github.io/moviesProject/"
                target="_blank"
              >
                <Image
                  className={Styles.circle}
                  src={circle1}
                  alt="Landscape picture"
                ></Image>
              </Link>
              <Image
                className={Styles.handle1}
                src={handle1}
                alt="Landscape picture"
              ></Image>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3 className={Styles.summary}>SUMMARY</h3>
                  <Link
                    href="https://waelkamira.github.io/moviesProject/"
                    underline="none"
                    target="_blank"
                  >
                    <h1 className={Styles.project}>PROJECT 1</h1>
                  </Link>
                  <Box sx={{ width: "100%" }}>
                    <Stack
                      sx={{
                        width: "79%",
                        paddingLeft: "10%",
                      }}
                      spacing={2}
                    >
                      <hr
                        style={{
                          height: "5px",
                          background: "#c3ef44",
                        }}
                      />
                    </Stack>
                  </Box>
                  <p className={Styles.paragraph}>
                    This project aims to develop an interactive and engaging
                    Movies Website, in this project I used HTML, CSS, tailwind
                    and javascript Vanilla ...
                    <Link
                      href="https://waelkamira.github.io/moviesProject/"
                      underline="none"
                      target="_blank"
                      style={{ marginBottom: "2rem", color: "#50b92d" }}
                    >
                      View More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className={Styles.card}>
              <div>
                <Link
                  href="https://waelkamira.github.io/hangman-game/"
                  underline="none"
                  target="_blank"
                >
                  <h4 className={Styles.text1}>HANGMAN GAME</h4>
                </Link>
                <h5 className={Styles.text2}>INDIVIDUAL WORK</h5>
              </div>

              <Link
                href="https://waelkamira.github.io/hangman-game/"
                target="_blank"
              >
                <Image
                  className={Styles.circle}
                  src={circle2}
                  alt="Landscape picture"
                ></Image>
              </Link>
              <Image
                className={Styles.handle1}
                src={handle1}
                alt="Landscape picture"
              ></Image>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3 className={Styles.summary}>SUMMARY</h3>
                  <Link
                    href="https://waelkamira.github.io/hangman-game/"
                    underline="none"
                    target="_blank"
                  >
                    <h1 className={Styles.project}>PROJECT 2</h1>
                  </Link>
                  <Box sx={{ width: "100%" }}>
                    <Stack
                      sx={{
                        width: "79%",
                        paddingLeft: "10%",
                      }}
                      spacing={2}
                    >
                      <hr style={{ height: "4px", background: "#44c1ef" }} />
                    </Stack>
                  </Box>
                  <p className={Styles.paragraph}>
                    This project aims to develop an interactive and engaging
                    Hangman-Game, in this project I used HTML, CSS, Bootstrap
                    and javascript Vanilla ...
                    <Link
                      href="https://waelkamira.github.io/hangman-game/"
                      underline="none"
                      target="_blank"
                      style={{ marginBottom: "2rem", color: "#44c1ef" }}
                    >
                      View More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className={Styles.card}>
              <div>
                <Link href="/" underline="none">
                  <h4 className={Styles.text1}> LEARNING APP</h4>
                </Link>
                <h5 className={Styles.text2}>TEAM WORK</h5>
              </div>

              <Link href="/">
                <Image
                  className={Styles.circle}
                  src={circle3}
                  alt="Landscape picture"
                ></Image>
              </Link>
              <Image
                className={Styles.handle1}
                src={handle1}
                alt="Landscape picture"
              ></Image>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3 className={Styles.summary}>SUMMARY</h3>
                  <Link
                    href="https://waelkamira.github.io/capstone-learning-app-team-6/"
                    underline="none"
                    target="_blank"
                  >
                    <h1 className={Styles.project}>PROJECT 3</h1>
                  </Link>
                  <Box sx={{ width: "100%" }}>
                    <Stack
                      sx={{
                        width: "79%",
                        paddingLeft: "10%",
                      }}
                      spacing={2}
                    >
                      <hr style={{ height: "4px", background: "#c11afd" }} />
                    </Stack>
                  </Box>

                  <p className={Styles.paragraph}>
                    This project aims to develop an interactive and engaging
                    learning app that provides users with a personalized
                    educational experience ...
                    <Link
                      href="https://waelkamira.github.io/capstone-learning-app-team-6/"
                      underline="none"
                      target="_blank"
                      style={{ marginBottom: "2rem", color: "#c11afd" }}
                    >
                      View More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundImage: "linear-gradient(#4c4c4c, #4c4c4c)",
              padding: "3rem",
            }}
          >
            <Image
              src={middle}
              alt="Landscape picture"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Container>
      </div>
    </>
  );
}
