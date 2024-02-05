import { StyledButton } from "../../styles/button.style";

const Button = ({ text, link }) => {
  return (
    <a href={process.env.PUBLIC_URL + link} target="_blank" rel="noreferrer">
      <StyledButton>{text}</StyledButton>
    </a>
  );
};

export default Button;
