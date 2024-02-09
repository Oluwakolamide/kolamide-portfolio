import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledProject = styled.section`
  padding-inline: var(--padding-body);
  padding-block: var(--padding-body-sm);
  text-align: center;
  h2 {
    text-align: start;
    color: var(--purple);
    font-size: var(--fs-sm);
    padding-top: var(--padding-subject);
  }

  div.more {
    color: var(--white);
    width: fit-content;
    margin: 40px auto 0;
    padding: 5px;
    cursor: pointer;
    border-bottom: 3px solid var(--purple);
    &:hover {
      color: var(--gray);
      border-bottom: 3px solid var(--gray);
    }
  }

  ${media.md`
  padding-inline: var(--padding-body-xs);
  .project-div {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3%;
  }
  `}

  ${media.sm`
  padding-inline: var(--padding-body-xs);
  .project-div {
    display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  }
  `}

  ${media.xxs`
  div.more {
    font-size: var(--fs-xs);
  }
  `}
`;
