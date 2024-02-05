import { ThemeProvider } from "styled-components";
import { StyledNavbar } from "../styles/navbar.style";
import { theme } from "../styles/theme";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledNavbar>
        <div>
          <Link to="hero">JEOLAD</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="about">
                <span>01.</span>About
              </Link>
            </li>
            <li>
              <Link to="experience">
                <span>02.</span>Experience
              </Link>
            </li>
            <li>
              <Link to="projects">
                <span>03.</span>Projects
              </Link>
            </li>
            <li>
              <Link to="contact">
                <span>04.</span>Contact
              </Link>
            </li>
          </ul>
        </nav>
      </StyledNavbar>
    </ThemeProvider>
  );
};

export default Navbar;
