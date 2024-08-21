import Button from "./sections/button";
import { StyledHero } from "../styles/hero.style";

const Hero = () => {
  return (
    <StyledHero id="hero">
      <div>
        <span>Hello, my name is</span>
        <h2>Gideon K. IDOWU</h2>
        <h3>I turn data into Gold.</h3>
        <p>
          I am a <span>Data Polymath</span> passionate about transforming complex information
          into user-centered insights that are actionable and accessible.
        </p>
        <Button
          text={"View Résumé"}
          link={
            "https://docs.google.com/document/d/10jJZ4DieWB0l-n6ZDaZcLPOzDwZaHpNjP2sTOvpYzAI/edit?usp=sharing"
          }
        />
      </div>
    </StyledHero>
  );
};

export default Hero;
