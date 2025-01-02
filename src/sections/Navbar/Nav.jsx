import styles from "./navStyles.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#hero" className={styles.navLink}>
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#skills" className={styles.navLink}>
            Skills
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
