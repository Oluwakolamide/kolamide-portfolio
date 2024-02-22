import { StyledSplashScreen } from "../styles/splashScreen.style";

const SplashScreen = ({ progress }) => {
  return (
    <StyledSplashScreen progress={progress} className={progress ? "show" : !progress}>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </StyledSplashScreen>
  );
};

export default SplashScreen;
