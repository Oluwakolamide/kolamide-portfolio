import styled from "styled-components";

export const StyledHero = styled.header`
  padding-inline: 16.67vw;
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
      font-size: var(--fs-md);
      padding-bottom: 50px;
      width: 75%;
    }
  }
`
