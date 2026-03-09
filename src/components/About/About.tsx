// Este componente representa a seção "Sobre mim" do portfólio, onde o desenvolvedor compartilha sua trajetória profissional, habilidades e estatísticas relevantes.

// Ele é estruturado em três partes principais:
// 1. Introdução: Um breve parágrafo que destaca a experiência do desenvolvedor, sua mentalidade analítica e as tecnologias que utiliza.
// 2. Estatísticas: Uma seção que exibe estatísticas relevantes sobre o desenvolvedor, como anos de experiência, projetos concluídos, etc., utilizando dados importados de um arquivo externo.
// 3. Estilização: O componente é estilizado usando CSS Modules para garantir que os estilos sejam aplicados de forma isolada e organizada.

import styles from "./About.module.css";
import { aboutStats } from "../../data/aboutStats";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} container`}>
        <p className="sectionLabel">// Sobre mim</p>
        <h2 className="title">Quem sou eu</h2>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <p>
              Desenvolvedor Front-End com mais de
              <strong> 10 anos de experiência profissional </strong>em
              processos, qualidade e melhoria contínua na indústria automotiva.
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

        {/* Seção de estatísticas, onde os dados são mapeados a partir do array importado "aboutStats" 
        e exibidos em cards estilizados.*/}
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
