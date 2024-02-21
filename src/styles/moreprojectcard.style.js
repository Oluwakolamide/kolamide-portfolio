import styled from "styled-components";

export const StyledMoreProjectCard = styled.div`
  background-color: var(--black);
  padding: var(--padding-subject);
  &:hover {
    h2 {
      color: var(--purple);
    }
    .description {
      color: var(--white);
      }
  }

  aside {
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            color: var(--purple);
        }
    }
    h2 {
      color: var(--white);
      font-size: var(--fs-md);
      padding-bottom: 10px;
    }
    .description {
      color: var(--gray);
      text-align: left;
    }
    b {
      color: var(--gray);
      font-size: var(--fs-xs);
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding-top: 3%;
      
    }
    i {
      display: flex;
      gap: 10px;
      padding-top: 1%;
      
      a {
        text-decoration: none;
        color: var(--white);
        &:hover {
          color: var(--purple);
        }
    }
  }
`;
