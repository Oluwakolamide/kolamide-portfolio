import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledAbout = styled.div`
  padding-inline: var(--padding-body);
  padding-block: var(--padding-body-sm);
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

  ${media.lg`
  padding-inline: var(--padding-body-sm);
  `}

  ${media.md`
  padding-inline: var(--padding-body-xs);
  padding-block: var(--padding-body-md);
  height: auto;
  section {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
  `}

  ${media.sm`
  padding-block: var(--padding-body-lg);
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
    img {
      background: var(--purple);
      object-fit: cover;
      width: 100%;
      top: 0;
      filter: grayscale(100%);
      transform: scale(1, 1);
      transition: transform 0.3s linear;
      &:hover {
        filter: grayscale(0);
        transform: scale(1.03, 1.03);
        transition: transform 0.3s linear;
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
