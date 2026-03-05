import { FolderCode, Download, Linkedin, Github, Mail } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.containerContent}>
          <div className={styles.intro}>
            <span className={styles.sectionLabel}>// Olá, eu sou</span>
            <h1 className={styles.title}>Felipe Augusto</h1>
            <span className={styles.textSpan}>
              Desenvolvedor <br /> Front-end
            </span>
            <p>
              Construindo experiências digitais modernas com React, Next.js e
              TypeScript.
            </p>
          </div>
          <div className={styles.buttons}>
            <a
              href="#projetos"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              <FolderCode /> Ver Projetos
            </a>
            <a
              href="/cv-felipe-augusto.pdf"
              download
              className={`${styles.button} ${styles.buttonOutline}`}
            >
              <Download /> Baixar CV
            </a>
          </div>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/felipesilva90"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/felipedev90"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a href="mailto:augusto.felipedev@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
        <div className={styles.profileImg}>
          <img src="/foto-felipe.webp" alt="Foto de perfil de Felipe Augusto" />
        </div>
      </div>
    </section>
  );
}
