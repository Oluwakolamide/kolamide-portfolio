import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--transparent);
  outline: none;
  color: var(--purple);
  border: var(--button-border) var(--purple);
  padding: var(--button-padding);
  font-size: var(--fs-sm);
  &:hover {
    color: var(--gray);
    border: var(--button-border) var(--gray);
  }
`