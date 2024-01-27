import { StyledNavbar } from "../styles/navbar.style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <span>JEOLAD</span>
      <div>
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
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
