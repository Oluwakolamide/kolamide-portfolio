import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react";
import { StyledSocials } from "../../styles/socials.style";

const Socials = () => {
  return (
    <StyledSocials>
      <ul>
        <li>
          <a
            href="https://github.com/Jessepelumi"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jeolad/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={24} />
          </a>
        </li>
        <li>
          <a href="https://x.com/jeolad_?s=09" target="_blank" rel="noreferrer">
            <XLogo size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jeolad_?igsh=YTh2OHM0ZmJlNXdx"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={24} />
          </a>
        </li>
      </ul>
    </StyledSocials>
  );
};

export default Socials;
