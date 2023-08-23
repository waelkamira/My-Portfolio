import Styles from "./cv.module.css";
import Image from "next/image";
import Link from "@mui/material/Link";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import cv from "./photos/cv.jpg";
import coverLatter from "./photos/coverLatter.png";
import download from "./photos/download.png";

export default function CV() {
  return (
    <Container>
      <Box
        style={{
          position: "relative",
        }}
      >
        <div>
          <Link href="/cv" underline="none" target="_blank">
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              src={cv}
              alt="Landscape picture"
            ></Image>
          </Link>
        </div>
        <div>
          <Link
            href="https://drive.google.com/uc?export=download&id=1ihxyc-wAe-vHfdn9QCItvV40P_Yu-8Zf"
            underline="none"
            download="Wael Kamira CV"
          >
            <div className={Styles.linkTextAndButton}>
              <Image
                className={Styles.linkButton}
                src={download}
                alt="Landscape picture"
              ></Image>
              <h1 className={Styles.linkText}>DOWNLOAD CV</h1>
            </div>
          </Link>
        </div>
      </Box>
    </Container>
  );
}
