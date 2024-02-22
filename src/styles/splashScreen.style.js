import { keyframes } from "styled-components";
import styled from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledSplashScreen = styled.section`
  height: 100vh;
  position: fixed;
  z-index: 2000;
  width: 100%;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideIn} 0.3s linear;

  &.show {
    transform: translateY(0);
    transition: 0.3s linear;
  }

  .progress-bar {
    position: relative;
    overflow: hidden;
    width: 150px;
    height: 5px;
    background-color: var(--gray);
    transition: width 30s ease;

    .progress {
      height: 100%;
      width: ${({ progress }) => progress}%;
      background-color: var(--purple);
    }
  }
`;

export const StyledText = styled.div`
  width: 130px;
`;
