import styled from "styled-components";

export const StyledExperience = styled.div`
  padding-inline: var(--padding-body);
  color: var(--white);
  padding-block: var(--padding-body-sm);
  section {
    padding-block: var(--padding-subject);
    p {
      margin-bottom: var(--padding-subject);
      color: var(--purple);
      font-size: var(--fs-sm);
    }
  }
`;

export const StyledTechnologies = styled.div`
  white-space: wrap;
  padding-bottom: var(--padding-subject);
  span {
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 50px;
    padding: 5px;
    border-bottom: 3px solid var(--purple);
    cursor: default;
    &:hover {
      color: var(--gray);
      border-bottom: 3px solid var(--gray);
    }
  }
`;

export const StyledSkills = styled.div`
  white-space: wrap;
  span {
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 50px;
    padding: 30px;
    border-bottom: 3px solid var(--purple);
    cursor: default;
    &:hover {
      color: var(--gray);
      border-bottom: 3px solid var(--gray);
    }
  }
`;
