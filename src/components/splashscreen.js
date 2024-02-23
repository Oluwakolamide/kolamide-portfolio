import { StyledSplashScreen } from "../styles/splashScreen.style";

const SplashScreen = ({ progress, mounted, stopped }) => {
  return (
    <StyledSplashScreen
      progress={progress}
      stopped={stopped}
      className= {`${stopped ? "show" : !stopped} ${mounted ? "visible" : !mounted}`}
    >
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </StyledSplashScreen>
  );
};

export default SplashScreen;
