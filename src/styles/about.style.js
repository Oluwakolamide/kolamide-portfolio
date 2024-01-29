import styled from "styled-components";

export const StyledAbout = styled.div`
  padding-inline: 16.67vw;
  height: 100vh;

  section {
    color: var(--white);
    padding-block: 20px;
    display: flex;
    padding-top: 30px;

    div {
        width: 50%;
        p {
          padding-bottom: 1rem;
          font-size: var(--fs-sm);
          span {
            color: var(--purple);
          }
        }
    }
  }
`;
