import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav aria-label="Main Navigation">
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>About</Link>
          </li>
          <li>
            <Link href="/services" className={styles.navLink}>Services</Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
