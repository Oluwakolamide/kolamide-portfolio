const Project = ({img, project, description}) => {
    return (
        <div>
            <div>
                <img src={img} alt={project} />
            </div>
            <div>
                <div>{project}</div>
                <div>{description}</div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Project;