import { StyledNavbar, StyledMenu } from "../styles/navbar.style";
import { Link } from "react-scroll";
import { SquaresFour } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <>
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
        <div className="menu">
          <SquaresFour size={32} weight="fill" />
        </div>
      </StyledNavbar>

      <StyledMenu>
        <section>
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
        </section>
      </StyledMenu>
    </>
  );
};

export default Navbar;
