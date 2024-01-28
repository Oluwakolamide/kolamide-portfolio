import { StyledTitle } from "../../styles/title.style";

const Title = ({ sn, title }) => {
  return (
    <StyledTitle>
      <span>{sn}.</span>
      <h4>{title}</h4>
    </StyledTitle>
  );
};

export default Title;
