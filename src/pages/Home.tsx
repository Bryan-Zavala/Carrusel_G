import Carrusel from "../components/shared/carrusel/Carrusel";
import styles from "./Home.module.css";

const images = [
  {
    // Paisaje 3:2 → encaja perfecto, sin negro
    src: "https://picsum.photos/id/600/600/400",
    alt: "Forest",
  },
  {
    // Retrato → negro a los lados
    src: "https://picsum.photos/id/100/400/600",
    alt: "Beach",
  },
  {
    // Muy apaisada → negro arriba y abajo
    src: "https://picsum.photos/id/200/900/300",
    alt: "Yak",
  },
  {
    // Cuadrada → negro a los lados
    src: "https://picsum.photos/id/300/500/500",
    alt: "Hay",
  },
  {
    src: "https://picsum.photos/id/400/600/400",
    alt: "Plants",
  },
  {
    src: "https://picsum.photos/id/500/600/400",
    alt: "Building",
  },
];
export default function Home() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>Explora inspiración visual</h1>
        <p>
          Descubre y colecciona imágenes que te inspiren para tus próximos
          proyectos.
        </p>
      </header>
      <div className={styles.carruselWrap}>
        <Carrusel images={images} />
      </div>

      <section className={styles.infoSection}>
        <h2 className={styles.title}>Descubre lugares únicos</h2>
        <p className={styles.description}>
          Explora destinos visuales, guarda inspiración y encuentra tu próximo
          rincón favorito.
        </p>

        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Explora</h3>
            <p>Recorre imágenes destacadas y cambia de categoría fácilmente.</p>
          </article>
          <article className={styles.card}>
            <h3>Guarda ideas</h3>
            <p>Organiza tus referencias visuales para futuros proyectos.</p>
          </article>
          <article className={styles.card}>
            <h3>Comparte</h3>
            <p>Muestra tus hallazgos con un diseño limpio y fácil de leer.</p>
          </article>
        </div>

        <div className={styles.highlightGrid}>
          <article className={styles.highlightCard}>
            <h3>+1200</h3>
            <p>Imágenes inspiradoras listas para explorar.</p>
          </article>
          <article className={styles.highlightCard}>
            <h3>Diseño ágil</h3>
            <p>Interfaz clara, navegación rápida y enfoque visual.</p>
          </article>
        </div>
      </section>
    </section>
  );
}
