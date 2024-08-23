import Title from "./sections/title";
import Socials from "./sections/socials";
import { StyledContact } from "../styles/contact.style";
import { EnvelopeSimple } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <Title sn={"04"} title={"Contact"} />
      <h2>Get in Touch</h2>
      <p>
        I'm currently seeking full-time data roles. Open to opportunities in
        analysis, engineering, or science. Feel free to email me or contact me
        via LinkedIn or X.
      </p>
      <span className="btn">
        <a href="mailto: kg.noble1911@gmail.com">
          <EnvelopeSimple size={24} />
          Send me an Email
        </a>
      </span>
      <Socials />
    </StyledContact>
  );
};

export default Contact;
