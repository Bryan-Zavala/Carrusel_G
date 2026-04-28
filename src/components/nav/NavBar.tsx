import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.linkActive)
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.linkActive)
        }
      >
        Galería
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.linkActive)
        }
      >
        Contacto
      </NavLink>
    </nav>
  );
}
