import { Link } from "react-router-dom";
import { handleImageError } from "../../utils/imageUtils";
import { commonProjectAlt } from "../../data/projectsData";

function ProjectCard({ project }) {
  return (
    <div className="card" role="listitem" tabIndex={0} aria-describedby="desc1">
      <div className="card-img">
        <img
          src={project.image}
          alt={commonProjectAlt}
          onError={handleImageError}
        />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2 className="project-title">{project.title}</h2>
        </div>
        <div className="card-description">
          <p className="project-desc" id="desc1">
            {project.description}
          </p>
          <div className="links">
            {project.links.map((link) => (
              <Link
                to={link.href}
                className="project-link"
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noreferrer" : undefined}
                key={`${project.title}-${link.label}`}
              >
                <i className={link.icon}></i> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
