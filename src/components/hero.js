import Button from "./sections/button";
import { StyledHero } from "../styles/hero.style";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <h3>Hi, my name is</h3>
        <h2>Jesse ADESINA</h2>
        <h2>I love learning and building</h2>
        <p>
          I am a software engineer with a passion for building (and occasionally
          designing) user-friendly digital products. I currently specialise in
          building front-end web applications and mobile applications with focus
          on simplicity.
        </p>
        <Button text={"Download my résumé"} />
      </div>
    </StyledHero>
  );
};

export default Hero;
