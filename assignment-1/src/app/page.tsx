import Navbar from "./components/NavBar";

import styles from './styles/Home.module.css';


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.heading}>Welcome to Home Page.</h1>
    </div>
  )
};