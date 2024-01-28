import Title from "./sections/title";
import Socials from "./sections/socials";
import { StyledContact } from "../styles/contact.style";
import { EnvelopeSimple } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <StyledContact>
      <Title sn={"04"} title={"Contact"} />
      <h2>Get in Touch</h2>
      <p>
        Right now, I’m looking to join a team of innovative designers and
        developers, to put my abilities to use and gain more knowledge.
      </p>
      <span className="btn">
        <a href="mailto: jesseoluwapelumi01@gmail.com">
          <EnvelopeSimple size={24} />
          Send me an e-mail
        </a>
      </span>
      <Socials />
    </StyledContact>
  );
};

export default Contact;
