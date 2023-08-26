import Styles from "./coverLetter.module.css";
import Image from "next/image";
import Link from "@mui/material/Link";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import coverLatter from "./photos/coverLatter.png";
import download from "./photos/download.png";
import cross from "./photos/cross.png";
export default function CoverLetter() {
  return (
    <Container
      style={{
        background: "linear-gradient(to bottom right, #4c4c4c, #4c4c4c)",
      }}
    >
      <Box
        style={{
          position: "relative",
        }}
      >
        <div>
          <Link href="/coverLetter" underline="none" target="_blank">
            <Image
              style={{
                width: "100%",
                height: "100%",
                marginTop: "1rem",
              }}
              src={coverLatter}
              alt="Landscape picture"
            ></Image>
          </Link>
        </div>
        <div className={Styles.linkTextAndButton}>
          <Link
            href="https://drive.google.com/uc?export=download&id=10y0OFbT1a-Xa2GyQBeMXtqF__qYw4b3H"
            underline="none"
            download="Wael Kamira Cover Letter"
          >
            <div className={Styles.linkTextAndButton}>
              <Image
                className={Styles.linkButton}
                src={cross}
                alt="Landscape picture"
              ></Image>
              <h1 className={Styles.linkText}>DOWNLOAD</h1>
            </div>
          </Link>
        </div>
      </Box>
    </Container>
  );
}
