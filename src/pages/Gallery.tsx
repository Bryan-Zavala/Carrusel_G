import styles from "./Gallery.module.css";

const galleryItems = [
  { src: "https://picsum.photos/id/120/800/520", alt: "Montañas" },
  { src: "https://picsum.photos/id/220/800/520", alt: "Lago" },
  { src: "https://picsum.photos/id/320/800/520", alt: "Ciudad" },
  { src: "https://picsum.photos/id/420/800/520", alt: "Bosque" },
  { src: "https://picsum.photos/id/520/800/520", alt: "Desierto" },
  { src: "https://picsum.photos/id/620/800/520", alt: "Playa" },
  { src: "https://picsum.photos/id/780/800/520", alt: "Selva" },
  { src: "https://picsum.photos/id/790/800/520", alt: "Reno" },
];

export default function Gallery() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>Galería</h1>
        <p>Una selección visual breve y ordenada para navegar cómodamente.</p>
      </header>

      <div className={styles.grid}>
        {galleryItems.map((item) => (
          <article key={item.src} className={styles.card}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </article>
        ))}
      </div>
    </section>
  );
}
