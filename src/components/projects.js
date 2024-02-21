import useViewMoreState from "../hooks/useViewMoreState";
import { projectlist } from "../static/projectlist";
import { MoreProjects, StyledProject } from "../styles/project.style";
import MoreProjectCard from "./sections/moreprojectcard";
// import Button from "./sections/button";
import ProjectCard from "./sections/projectcard";
import Title from "./sections/title";

const Projects = () => {
  const featuredProjects = projectlist.slice(0, 4);

  const { viewMore, toogleViewMore } = useViewMoreState();

  return (
    <StyledProject id="projects">
      <Title sn={"03"} title={"Projects"} />
      <h2>Featured Projects:</h2>
      <div className="project-div">
        {featuredProjects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
      {viewMore && (
        <aside>
          <h3>Other Noteworthy Projects</h3>
          <MoreProjects>
            {projectlist.map((item, index) => (
              <MoreProjectCard key={index} item={item} />
            ))}
          </MoreProjects>
        </aside>
      )}

      <div className="more" onClick={toogleViewMore}>
        {viewMore ? "View Less Projects" : "View More Projects"}
      </div>
    </StyledProject>
  );
};

export default Projects;
