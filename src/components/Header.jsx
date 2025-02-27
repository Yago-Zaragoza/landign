import  { useState } from 'react';
import styles from '../components_css/Header.module.css';
import logoBernardina from '../../public/img/logo_bernardina.png';


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


        {/* Navegación */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About Us</a>
          <a href="#location" className={styles.navLink}>Products</a>
          <a href="#location" className={styles.navLink}>Location</a>
          <a href="#location" className={styles.navLink}>Galery</a>
        </nav>
      </div>
    </header>
  );
}


export default Header;