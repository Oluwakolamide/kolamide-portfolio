import styled from "styled-components";

export const StyledNavbar = styled.div`
  padding: 1rem 8.33vw;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background);
  z-index: 99;

  div {
    color: var(--purple);
    font-size: var(--fs-lg);
    cursor: pointer;
  }

  nav {
    width: 40%;
    font-size: var(--fs-sm);
    cursor: pointer;

    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        a {
          text-decoration: none;

          span {
            padding-right: 5px;
            color: var(--purple);
          }

          color: var(--white);
          &:hover {
            color: var(--purple);
          }
        }
      }
    }
  }
`;
