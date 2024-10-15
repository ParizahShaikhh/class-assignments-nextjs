import styles from '../../styles/Hero.module.css'

const Hero: React.FC = () => {
    return  (
        <section className={styles.hero}>
        <h1>Hi, I am Parizah Shaikh</h1>
        <p>A passionate web developer exploring the world of coding and creativity. This is a simple Next.js application for practice.</p>
        <button className={styles.button}>Check Out My Work</button>
        </section>
    )
};

export default Hero;