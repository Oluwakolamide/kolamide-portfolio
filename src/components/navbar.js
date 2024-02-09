import { StyledNavbar, StyledMenu } from "../styles/navbar.style";
import { Link } from "react-scroll";
import { SquaresFour, DiamondsFour } from "@phosphor-icons/react";
import useNavbarState from "../hooks/useNavbarState";

const Navbar = () => {
  const { open, setOpen, handleClick } = useNavbarState();
  const icon = open ? (
    <DiamondsFour size={32} weight="fill" />
  ) : (
    <SquaresFour size={32} weight="fill" />
  );

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
        <div className="menu" onClick={() => setOpen(!open)}>
          {icon}
        </div>
      </StyledNavbar>

      {open && (
        <StyledMenu className={open ? "show" : "hide"}>
          <section>
            <nav>
              <ul>
                <li>
                  <Link to="about" onClick={handleClick}>
                    <span>01.</span>About
                  </Link>
                </li>
                <li>
                  <Link to="experience" onClick={handleClick}>
                    <span>02.</span>Experience
                  </Link>
                </li>
                <li>
                  <Link to="projects" onClick={handleClick}>
                    <span>03.</span>Projects
                  </Link>
                </li>
                <li>
                  <Link to="contact" onClick={handleClick}>
                    <span>04.</span>Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </StyledMenu>
      )}
    </>
  );
};

export default Navbar;
