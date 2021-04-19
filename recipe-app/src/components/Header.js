import styles from "../styles/Header.module.css"
import Navbar from "../components/Navbar";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Recipes</div>
      <Navbar />
    </div>
  );
}

export default Header;
