import { useState } from "react";
import { Link } from "react-scroll";
import styles from "../components_css/Header.module.css";
import logoBernardina from "../../public/img/logo_bernardina.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src={logoBernardina} alt="Logo" className={styles.logoImage} />
          <div className={styles.logoText}>
            <span className={styles.logoTextTitle}>BERNARDINA</span>
            <span className={styles.logoTextSubTitle}>Sandwich & Coffee</span>
          </div>
        </div>

        {/* Botón de menú para móviles */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>

        {/* Navegación con React Scroll */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <Link to="home" smooth={true} duration={500} offset={-100} className={styles.navLink}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500}  offset={-120}className={styles.navLink}>
            About Us
          </Link>
          <Link to="products" smooth={true} duration={500} offset={-180} className={styles.navLink}>
            Products
          </Link>
          <Link to="location" smooth={true} duration={500} offset={-150} className={styles.navLink}>
            Location
          </Link>
          <Link to="gallery" smooth={true} duration={500} offset={0} className={styles.navLink}>
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
