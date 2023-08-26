"use client";
import Cards from "./Cards/page";
import NavBar from "./navbar/page";
import AboutMe from "./aboutMe/page";
import CV from "./cv/page";
import CoverLetter from "./coverLetter/page";
export default function Home() {
  return (
    <main>
      <NavBar />
      <Cards />
      <AboutMe />
      <CV />
      <CoverLetter />
    </main>
  );
}
