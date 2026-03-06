import styles from "./About.module.css";
import { aboutStats } from "../../data/aboutStats";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} container`}>
        <p className={styles.sectionLabel}>// Sobre mim</p>
        <h2 className={styles.title}>Quem sou eu</h2>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <p>
              Sou Desenvolvedor Front-End em transição de carreira, após mais de
              <strong> 10 anos de experiência na indústria</strong>, atuando com
              controle de qualidade, análise de processos e melhoria contínua.
            </p>
            <p>
              Essa trajetória desenvolveu uma{" "}
              <strong>mentalidade analítica</strong> e forte atenção a detalhes,
              características que hoje aplico diretamente no desenvolvimento de
              software, com foco em código limpo, organização de arquitetura e
              performance.
            </p>
            <p>
              Atualmente desenvolvo aplicações utilizando <strong>React</strong>
              , <strong>TypeScript</strong> e <strong>JavaScript</strong>,
              criando interfaces responsivas, acessíveis e bem estruturadas. Com
              cobertura de testes, pipelines de CI/CD e otimização de
              performance em cada entrega.
            </p>
          </div>
        </div>

        <div className={styles.statContainer}>
          {aboutStats.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <span className={styles.statValor}>{stat.valor}</span>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statDesc}>{stat.descricao}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
