// Componente de rodapé do site, exibindo informações de direitos autorais e tecnologias utilizadas no desenvolvimento.

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          {/* Exibe o ano atual */}
          <p>© {new Date().getFullYear()} Felipe Augusto</p>
          <p> · Todos os direitos reservados · </p>
        </div>
        <div className={styles.development}>
          <p>Desenvolvido com </p>
          <span>React</span> <p> · TypeScript · CSS Modules · </p>
          <p>
            Deploy na <span>Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
