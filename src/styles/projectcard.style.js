import styled from "styled-components";

export const StyledProjectCard = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  padding-block: var(--padding-subject);
  direction: ${({layout}) => layout || "ltr"};
  img {
    grid-column-end: span 7;
    width: 100%;
    filter: grayscale(100%);
    z-index: 0;
    &:hover {
      filter: grayscale(0);
    }
  }
  aside {
    z-index: 1;
    color: white;
    grid-column-start: 7;
    grid-column-end: span 7;
    margin-top: -60%;
    h2 {
      font-size: var(--fs-md);
      padding-bottom: 1%;
      text-align: ${({text}) => text || "right"};
    }
    div {
      background-color: var(--black);
      padding: var(--button-padding);
      border-bottom: 3px solid var(--purple);
    }
    b {
      color: var(--gray);
      display: flex;
      gap: 10px;
      padding-top: 1%;
      flex-direction: row-reverse;
    }
    i {
      display: flex;
      gap: 10px;
      padding-top: 1%;
      flex-direction: row-reverse;
      a {
        text-decoration: none;
        color: var(--white);
        &:hover {
          color: var(--purple);
        }
      }
    }
  }
`;
