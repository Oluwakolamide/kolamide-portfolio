import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
} from "@phosphor-icons/react";
import { StyledSocials } from "../../styles/socials.style";

const Socials = () => {
  return (
    <StyledSocials>
      <ul>
        <li>
          <a href="/">
            <GithubLogo size={24} />
          </a>
        </li>
        <li>
          <a href="/">
            <LinkedinLogo size={24} />
          </a>
        </li>
        <li>
          <a href="/">
            <TwitterLogo size={24} />
          </a>
        </li>
        <li>
          <a href="/">
            <InstagramLogo size={24} />
          </a>
        </li>
      </ul>
    </StyledSocials>
  );
};

export default Socials;
