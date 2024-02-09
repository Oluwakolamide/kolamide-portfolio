import styled from "styled-components";
import { media } from "./breakpoints";

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

  div.menu {
    display: none;
  }

  ${media.md`
  nav {
    display: none;
  }

  div.menu {
    display: block;
  }
  `}
`;

export const StyledMenu = styled.aside`
  display: none;

  ${media.md`
  display: flex;
  background-color: rgba(208, 162, 247, 0.1);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;

  section {
    color: white;
    width: 70%;
    height: 100vh;
    position: fixed;
    right: 0;
    background-color: var(--background);
    z-index: 1000;

    nav {
      height: 100%;
      display: flex;
      justify-content: center;
      padding-top: 50%;
      font-size: var(--fs-md);
      ul {
        list-style: none;
        li a {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 50%;
          span {
            color: var(--purple);
          }
        }
      }
    }
  }
  `}

  ${media.xs`
  section {
    nav {
      font-size: var(--fs-sm);
    }
  }
  `}
`;
