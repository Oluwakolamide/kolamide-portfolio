import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-inline: var(--padding-body);
  padding-block: var(--padding-body-sm);

  h2 {
    color: var(--white);
    font-size: var(--fs-xxl);
  }

  p {
    font-size: var(--fs-sm);
    color: var(--gray);
    width: 30%;
    text-align: center;
  }

  span.btn {
    a {
      text-decoration: none;
      color: var(--white);
      font-size: var(--fs-sm);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 3px solid var(--purple);
      padding: 0.5rem;
      &:hover {
        color: var(--gray);
        border-bottom: 3px solid var(--gray);
      }
    }
  }

  ${media.lg`
  padding-inline: var(--padding-body-sm);
  p {
    width: 40%;
  }
  `}

  ${media.md`
  padding-block: var(--padding-body-lg);
  p {
    width: 100%;
  }
  `}

  ${media.xxs`
  h2 {
    font-size: var(--fs-xl);
  }
  p {
    font-size: var(--fs-xs);
  }
  span.btn {
    a {
      font-size: var(--fs-xs);
    }
  }
  `}
`;
