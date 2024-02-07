import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledAbout = styled.div`
  padding-inline: var(--padding-body);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  section {
    color: var(--white);
    padding-block: var(--padding-subject);
    display: flex;
    justify-content: space-between;
    padding-top: 30px;

    div {
      width: 55%;
      p {
        padding-bottom: 1rem;
        font-size: var(--fs-sm);
        span {
          color: var(--purple);
        }
      }
    }
  }

  ${media.md`
  padding-inline: var(--padding-body-xs);
  height: auto;
  section {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
  `}

  ${media.xxs`
  section {
    div {
      p {
        font-size: var(--fs-xs);
      }
    }
  }
  `}
`;

export const StyledAboutImage = styled.aside`
  width: 35%;

  div.back {
    width: 100%;
    border: 2px solid var(--purple);
    img {
      background: var(--purple);
      object-fit: cover;
      width: 100%;
      top: 0;
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(0);
        translate: -5% -3%;
      }
    }
  }

  ${media.md`
  width: 50%;
  margin: 0 auto;
  `}

  ${media.sm`
  width: 90%;
  margin: 0 auto;
  `}
`;
