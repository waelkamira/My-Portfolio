import style from "./style.module.css";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
export default function NavBar() {
  return (
    <Container className={style.navBar}>
      <div className={style.btns}>
        <div className={style.textAndHandle}>
          <Link href="/Cards" underline="none" target="_blank">
            <h5 className={style.text}>Projects</h5>
          </Link>
        </div>
        <div className={style.textAndHandle}>
          <Link href="/aboutMe" underline="none" target="_blank">
            <h5 className={style.text}>About Me</h5>
          </Link>
        </div>
        <div className={style.textAndHandle}>
          <Link href="/cv" underline="none" target="_blank">
            <h5 className={style.text}>CV</h5>
          </Link>
        </div>
        <div className={style.textAndHandle}>
          <Link href="/coverLetter" underline="none" target="_blank">
            <h5 className={style.text}>Cover Letter</h5>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <hr
          style={{
            height: "10px",
            background: "#c3ef44",
            width: "20vw",
          }}
        />{" "}
        <hr
          style={{
            height: "10px",
            background: "#44c1ef",
            width: "20vw",
          }}
        />{" "}
        <hr
          style={{
            height: "10px",
            background: "#c11afd",
            width: "20vw",
          }}
        />
        <hr
          style={{
            height: "10px",
            background: "#fed319",
            width: "20vw",
          }}
        />
      </div>
    </Container>
  );
}
