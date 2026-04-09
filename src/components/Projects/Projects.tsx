// Componente de projetos, onde são listados os projetos desenvolvidos pelo portfólio. Cada projeto é exibido em um card com imagem, título, descrição, tags e links para demo e código-fonte.
// O componente utiliza os dados dos projetos importados de um arquivo de dados e é estilizado com CSS Modules para garantir um design moderno e responsivo.

import { projectsData } from "../../data/projectsData";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container containerSection">
        <p className="sectionLabel">// Projetos</p>
        <h2 className="title">Meus projetos</h2>
        <div className={styles.projectsContainer}>
          {/* Mapeia os dados dos projetos e cria um card para cada projeto */}
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img
                src={project.image}
                alt={`Screenshot do projeto ${project.titulo}`}
                className={styles.projectImage}
                loading="lazy"
              />

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.titulo}</h3>
                <div className={styles.projectTagsContainer}>
                  {/* Mapeia as tags do projeto e cria um elemento para cada tag */}
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={styles.projectDescription}>{project.descricao}</p>
                <div className={styles.projectLinksContainer}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button buttonPrimary"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button buttonOutline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.seeMoreContainer}>
        <a
          href="https://www.github.com/felipedev90"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.seeMoreButton}
        >
          Ver mais Projetos
        </a>
      </div>
    </section>
  );
}
