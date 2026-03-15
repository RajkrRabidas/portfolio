import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section className="projects-section" id="work" aria-labelledby="projects">
      <h1>PROJECTS</h1>
      <div className="projects-wrapper" role="list" aria-label="Creative project gallery">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
