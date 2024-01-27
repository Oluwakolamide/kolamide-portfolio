import styled from "styled-components";

export const StyledNavbar = styled.div`
  padding: 0 8.33vw;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 40%;
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      li {
        span {
          padding-right: 5px;
        }
      }
    }
  }
`
