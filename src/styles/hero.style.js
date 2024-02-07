import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledHero = styled.header`
  padding-inline: var(--padding-body);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    span {
      color: var(--purple);
    }

    h2 {
      color: var(--white);
      font-size: var(--fs-vl);
    }

    h3 {
      color: var(--gray);
      font-size: var(--fs-vl);
      height: fit-content;
    }

    p {
      color: var(--white);
      font-size: var(--fs-sm);
      padding: 20px 0 60px;
      width: 70%;
    }
  }

  ${media.md`
  padding-inline: var(--padding-body-xs);
  width: 100%;
  div {
    h2, h3 {
      font-size: var(--fs-vl);
    }
    p {
      width: 80%;
    }
  }
  `}

  ${media.sm`
  padding-inline: var(--padding-body-xs);
  width: 100%;
  div {
    h2, h3 {
      font-size: var(--fs-xxl);
    }
    p {
      width: 100%;
    }
  }
  `}

  ${media.xxs`
  div {
    h2, h3 {
      font-size: var(--fs-xl);
    }
    p {
      font-size: var(--fs-xs);
    }
  }
  `}
`;
