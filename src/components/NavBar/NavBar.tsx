import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.linkTitle}>
          <span>{`>felipe`}</span>
          <span className={styles.linkSubtitle}>{`.dev_`}</span>
        </a>
        <ul className={isOpen ? styles.menuOpen : styles.menu}>
          <li className={styles.list}>
            <a href="#about" onClick={handleNavClick} className={styles.link}>
              Sobre mim
            </a>
          </li>
          <li className={styles.list}>
            <a href="#" onClick={handleNavClick} className={styles.link}>
              Projetos
            </a>
          </li>
          <li className={styles.list}>
            <a href="#" onClick={handleNavClick} className={styles.link}>
              Habilidades
            </a>
          </li>
          <li className={styles.list}>
            <a href="#" onClick={handleNavClick} className={styles.link}>
              Contato
            </a>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className={styles.menuButton}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
