import Button from "./sections/button";
import { StyledHero } from "../styles/hero.style";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <span>Hi, my name is</span>
        <h2>Jesse ADESINA.</h2>
        <h3>I love learning and building.</h3>
        <p>
          I am a software engineer with a passion for building (and occasionally
          designing) user-friendly digital products. I currently specialise in
          building front-end web applications and mobile applications with focus
          on usability and simplicity.
        </p>
        <Button text={"Download my résumé"} />
      </div>
    </StyledHero>
  );
};

export default Hero;
