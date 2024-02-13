import { projectlist } from "../static/projectlist";
import { StyledProject } from "../styles/project.style";
// import Button from "./sections/button";
import ProjectCard from "./sections/projectcard";
import Title from "./sections/title";

const Projects = () => {
  const featuredProjects = projectlist.slice(0, 4);

  return (
    <StyledProject id="projects">
      <Title sn={"03"} title={"Projects"} />
      <h2>Featured Projects:</h2>
      <div className="project-div">
        {featuredProjects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
      <div className="more">View More Projets</div>
    </StyledProject>
  );
};

export default Projects;
