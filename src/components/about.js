import Title from "./sections/title";
import Socials from "./sections/socials";
import { StyledAbout, StyledAboutImage } from "../styles/about.style";

const About = () => {
  return (
    <StyledAbout id="about">
      <Title sn={"01"} title={"Meet Me"} />
      <section>
        <div>
          <p>Hello there! 👋🏾</p>
          <p>
            I'm Jesse, and my canvas is the internet. I'm passionate about
            developing solutions that make people's lives easier, and I love
            building things that live on the Internet.
          </p>
          <p>
            Because I think that no one is self-made and that we all need other
            people to solve problems and make sense of life, I have a strong
            affinity for working in teams.{" "}
            <span>I believe I'm a really good team player.</span>
          </p>
          <p>
            In 2021, I became interested in software development. I was a
            Surveying and Geoinformatics student at the time. My curiosity drove
            me to drop out of my then-academic program to pursue a career in
            software engineering. Although it has been a very challenging
            journey, I'm quite happy that I took the risk.
          </p>
          <p>
            Currently, I am looking for opportunities to{" "}
            <span>collaborate</span> with a team of creative developers and
            designers.
          </p>
          <p>
            Fun fact 🙃: <span>JEOLAD</span> is short for{" "}
            <span>Jesse Oluwapelumi Adesina.</span>
          </p>
        </div>
        <StyledAboutImage>
          <div className="back">
            <img src={require("./images/jeolad-portfolio.png")} alt="jeolad" />
          </div>
        </StyledAboutImage>
      </section>
      <Socials />
    </StyledAbout>
  );
};

export default About;
