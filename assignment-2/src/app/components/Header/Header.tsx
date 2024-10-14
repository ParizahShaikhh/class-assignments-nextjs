import Link from 'next/link';

import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/services'>Services</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
};

export default Header;