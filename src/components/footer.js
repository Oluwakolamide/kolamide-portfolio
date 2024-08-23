import { StyledFooter } from "../styles/footer.style";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <div>
        Designed & Built by{" "}
        <a
          href="https://www.linkedin.com/in/jeolad/"
          target="_blank"
          rel="noreferrer"
        >
          Jesse Adesina
        </a>
      </div>
      <div>&copy; {currentYear}. All rights reserved.</div>
    </StyledFooter>
  );
};

export default Footer;
