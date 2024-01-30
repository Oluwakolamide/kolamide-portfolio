import styled from "styled-components";

export const StyledAbout = styled.div`
  padding-inline: 16.67vw;
  height: 100vh;

  section {
    color: var(--white);
    padding-block: 20px;
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
`;

export const StyledAboutImage = styled.aside`
  width: 35%;

  div.back {
    width: 100%;
    height: fit-content;
    
    border: 2px solid var(--purple);
    
    
    img {
      background: var(--purple);
      width: 100%;
      
      top: 0;
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(0);
        translate: -5% -5%;
      }
    }
  }
`;
