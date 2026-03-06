import { projectsData } from "../../data/projectsData";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={`${styles.container} container`}>
        <p className={styles.sectionLabel}>// Projetos</p>
        <h2 className={styles.title}>Meus projetos</h2>
        <div className={styles.projectsContainer}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img
                src={project.image}
                alt={`Screenshot do projeto ${project.titulo}`}
                className={styles.projectImage}
              />
              <h3 className={styles.projectTitle}>{project.titulo}</h3>
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={styles.projectDescription}>{project.descricao}</p>
              <div className={styles.projectLinks}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectDemoLink}
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectGithubLink}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
