import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.column}>
          <h3 className={styles.heading}>Carrusel</h3>
          <p className={styles.text}>
            Descubre destinos, galerías y contenido visual de forma simple.
          </p>
        </section>

        <section className={styles.column}>
          <h3 className={styles.heading}>Enlaces</h3>
          <nav aria-label="Enlaces del pie de página">
            <ul className={styles.list}>
              <li>
                <Link to="/" className={styles.link}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={styles.link}>
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className={styles.column}>
          <h3 className={styles.heading}>Sígueme</h3>
          <ul className={styles.list}>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className={styles.bottomBar}>
        <p>© {currentYear} Bryan Zavala. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
