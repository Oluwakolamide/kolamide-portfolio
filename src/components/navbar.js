import { ThemeProvider } from "styled-components";
import { StyledNavbar } from "../styles/navbar.style";
import { theme } from "../styles/theme";

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledNavbar>
      <div>JEOLAD</div>
      <nav>
        <ul>
          <li>
            <span>01.</span>About
          </li>
          <li>
            <span>02.</span>Experience
          </li>
          <li>
            <span>03.</span>Projects
          </li>
          <li>
            <span>04.</span>Contact
          </li>
        </ul>
      </nav>
    </StyledNavbar>
    </ThemeProvider>
  );
};

export default Navbar;
