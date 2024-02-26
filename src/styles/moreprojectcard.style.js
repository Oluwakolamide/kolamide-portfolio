import styled from "styled-components";

export const StyledMoreProjectCard = styled.div`
  background-color: var(--black);
  padding: var(--padding-subject);
  cursor: default;
  transform: scale(1, 1);
  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.03, 1.03);
    transition: transform 0.3s linear;
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
      margin-bottom: 50px;
    }
    b {
      color: var(--gray);
      font-size: var(--fs-xs);
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-block: 3%;
      position: absolute;
      bottom: 0;
      
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
