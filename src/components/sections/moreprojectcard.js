import { StyledMoreProjectCard } from "../../styles/moreprojectcard.style";
import { FolderSimple } from "@phosphor-icons/react";

const MoreProjectCard = ({
  item: { id, image, project_title, description, tools, links },
}) => {
  return (
    <StyledMoreProjectCard text={id % 2 === 0 && "left"} backgroundimg={image}>
      <aside>
        <div>
          <span>
            <FolderSimple size={50} weight="light" />
          </span>
          <i>
            {links.map((link, index) => (
              <a href={link.link} key={index} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            ))}
          </i>
        </div>
        <h2>{project_title}</h2>
        <div className="description">{description}</div>
        <b>
          {tools.map((tool, index) => (
            <p key={index}>{tool}</p>
          ))}
        </b>
      </aside>
    </StyledMoreProjectCard>
  );
};

export default MoreProjectCard;
