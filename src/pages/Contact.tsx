import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>Contacto</h1>
        <p>Cuéntame tu idea y te respondo lo antes posible.</p>
      </header>

      <div className={styles.contentGrid}>
        <form className={styles.form}>
          <h2>Envíame un mensaje</h2>

          <div className={styles.field}>
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" placeholder="Tu nombre" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Cuéntame brevemente tu idea..."
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Enviar mensaje
          </button>
        </form>

        <div className={styles.card}>
          <h2>Información de contacto</h2>
          <p>
            <strong>Email:</strong> bryan.zavala@example.com
          </p>
          <p>
            <strong>Ubicación:</strong> Madrid, España
          </p>
          <p>
            <strong>Disponibilidad:</strong> Lunes a Viernes · 09:00 - 18:00
          </p>
        </div>
      </div>
    </section>
  );
}
