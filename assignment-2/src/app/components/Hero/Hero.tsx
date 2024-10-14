import styles from '../../styles/Hero.module.css'

const Hero: React.FC = () => {
    return  (
        <section className={styles.hero}>
        <h1>Parizah Shaikh</h1>
        <p>Your journey to explore my projects and work starts here!</p>
        <button className={styles.button}>Explore Now</button>
        </section>
    )
};

export default Hero;