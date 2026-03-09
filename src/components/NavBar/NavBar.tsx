// Componente responsivo de barra de navegação para o portfólio, com links para as seções "Sobre mim", "Projetos", "Habilidades" e "Contato". O menu é ocultado em telas menores e pode ser aberto com um botão de menu. O estado do menu é gerenciado usando o hook useState do React.
// O componente utiliza ícones do pacote lucide-react para o botão de menu e estilos personalizados definidos em NavBar.module.css.

import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./NavBar.module.css";

export default function Navbar() {
  // Estado para controlar a abertura do menu em telas menores
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.linkTitle}>
          <span>{`>felipe`}</span>
          <span className={styles.linkSubtitle}>{`.dev_`}</span>
        </a>
        {/* Lista de links de navegação, que é exibida ou ocultada com base no estado isOpen */}
        <ul className={isOpen ? styles.menuOpen : styles.menu}>
          <li className={styles.list}>
            <a href="#about" onClick={handleNavClick} className={styles.link}>
              Sobre mim
            </a>
          </li>
          <li className={styles.list}>
            <a
              href="#projects"
              onClick={handleNavClick}
              className={styles.link}
            >
              Projetos
            </a>
          </li>
          <li className={styles.list}>
            <a href="#skills" onClick={handleNavClick} className={styles.link}>
              Habilidades
            </a>
          </li>
          <li className={styles.list}>
            <a href="#contact" onClick={handleNavClick} className={styles.link}>
              Contato
            </a>
          </li>
        </ul>
        {/* Botão para abrir ou fechar o menu em telas menores */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className={styles.menuButton}
        >
          {/* Ícone do botão de menu, que muda dependendo do estado isOpen */}
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
