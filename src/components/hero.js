import Button from "./sections/button";
import { StyledHero } from "../styles/hero.style";

const Hero = () => {
  return (
    <StyledHero id="hero">
      <div>
        <span>Hi, my name is</span>
        <h2>Jesse ADESINA.</h2>
        <h3>I love learning and building.</h3>
        <p>
          I am a software engineer passionate about building (and occasionally
          designing) user-friendly digital products. I currently specialise in
          building front-end web applications and mobile applications, focusing
          on usability and simplicity.
        </p>
        <Button
          text={"View my résumé"}
          link={
            "https://docs.google.com/document/d/10jJZ4DieWB0l-n6ZDaZcLPOzDwZaHpNjP2sTOvpYzAI/edit?usp=sharing"
          }
        />
      </div>
    </StyledHero>
  );
};

export default Hero;
