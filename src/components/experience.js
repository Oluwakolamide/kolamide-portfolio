import { technologies } from "../static/technologies";
import {
  StyledExperience,
  StyledTechnologies,
} from "../styles/experience.style";
import Title from "./sections/title";

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <Title sn={"02"} title={"Experience"} />
      <section>
        <p>Technical skills:</p>
        <StyledTechnologies>
          {technologies.map(function (technology) {
            console.log(technology);
            return <span key={technology.id}>{technology.name}</span>;
          })}
        </StyledTechnologies>
        {/* <p>Skills summary:</p>
        <StyledSkills>
          {skills.map(function (skill) {
            console.log(skill);
            return (
              <span>
                <div key={skill.id}>{skill.icon}</div>
                <div key={skill.id}>{skill.name}</div>
              </span>
            );
          })}
        </StyledSkills> */}
      </section>
    </StyledExperience>
  );
};

export default Experience;
