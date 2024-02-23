import { StyledFooter } from "../styles/footer.style";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <div>Designed & Built by Jesse Adesina</div>
      <div>&copy; {currentYear}. All rights reserved.</div>
    </StyledFooter>
  );
};

export default Footer;
