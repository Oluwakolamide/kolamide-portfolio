import { css } from "styled-components";

const breakpoints = {
  xxs: "290px",
  xs: "400px",
  sm: "600px",
  md: "900px",
  lg: "1280px",
  xl: "1440px",
  xxl: "1920px",
};

const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (max-width: ${breakpoints[key]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media };
