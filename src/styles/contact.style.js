import styled from "styled-components";

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 5rem;

  h2 {
    color: var(--white);
    font-size: var(--fs-xxl);
  }

  p {
    font-size: var(--fs-sm);
    color: var(--gray);
    width: 30%;
    text-align: center;
  }

  span.btn {
    a {
      text-decoration: none;
      color: var(--white);
      font-size: var(--fs-sm);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 3px solid var(--purple);
      padding: 0.5rem;
    }
  }
`;
