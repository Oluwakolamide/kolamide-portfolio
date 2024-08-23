import Title from "./sections/title";
import Socials from "./sections/socials";
import { StyledAbout, StyledAboutImage } from "../styles/about.style";

const About = () => {
  return (
    <StyledAbout id="about">
      <Title sn={"01"} title={"About Me"} />
      <section>
        <div>
          <p>
            I'm a <span>Data Polymath</span> specializing in transforming complex information
            into actionable insights. My expertise spans the entire data
            lifecycle, from database administration to advanced analytics and
            visualization. I excel in using tools like Power BI, Tableau, SQL,
            and Python to extract meaningful patterns from diverse datasets.
          </p>
          <p>
            With experience in roles from Data Analyst to Database
            Administrator, I build scalable, user-centric data solutions that
            drive business impact.
          </p>
          <p>
            My background in computer science and cybersecurity ensures robust
            data integrity and security.
          </p>
          <p>
            Always open to new collaborations in the data space. Feel free to
            reach out via email, LinkedIn, or X.
          </p>
          <p>
            <span>Kolamide/Oluwakolamide</span> is my first name, but you can call me
            Gideon.
          </p>
        </div>
        <StyledAboutImage>
          <div className="back">
            <img src={require("./images/kolamide.JPG")} alt="jeolad" />
          </div>
        </StyledAboutImage>
      </section>
      <Socials />
    </StyledAbout>
  );
};

export default About;
