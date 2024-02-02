import { projectlist } from "../static/projectlist";
import { StyledProject } from "../styles/project.style";
import Button from "./sections/button";
import ProjectCard from "./sections/projectcard";
import Title from "./sections/title";

const Projects = () => {
  return (
    <StyledProject>
      <Title sn={"03"} title={"Projects"} />
      <h2>Featured Projects:</h2>
      {projectlist.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
      <Button text={"View All Projects"} />
    </StyledProject>
  );
};

export default Projects;
