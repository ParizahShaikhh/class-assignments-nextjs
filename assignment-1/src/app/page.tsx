import Navbar from "./components/NavBar";

import styles from './styles/Home.module.css';


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.heading}>
      Welcome to My Portfolio!</h1>
      <p className="text-center grid ">I am Parizah Shaikh, a passionate frontend developer with a focus on building responsive, user-friendly web applications. Explore my work and get in touch!</p>
    </div>
  )
};