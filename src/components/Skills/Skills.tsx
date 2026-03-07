import styles from "./Skills.module.css";
import { skillsData } from "../../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container containerSection">
        <p className="sectionLabel">// Habilidades</p>
        <h2 className="title">Minhas Habilidades</h2>
        <div className={styles.skillsContainer}>
          {skillsData.map((skill) => (
            <div key={skill.id} className={styles.skillCard}>
              <h3 className={styles.skillTitle}>{skill.titulo}</h3>
              <div className={styles.skillTagsContainer}>
                {skill.tags.map((tag, i) => (
                  <span key={i} className={styles.skillTag}>
                    {tag.icon && <i className={tag.icon}></i>}
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
