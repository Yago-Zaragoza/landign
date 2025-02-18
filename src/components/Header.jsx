// Header.jsx
import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import styles from '../components_css/Header.module.css';
import logoBernardina from '../../public/assets/logo_bernardina.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logoBernardina} alt="Logo" className={styles.logoImage} />
        </div>

        {/* Botón de menú para móviles */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>

        {/* Navegación */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About Us</a>
          <a href="#location" className={styles.navLink}>Location</a>
        </nav>

        {/* Redes Sociales */}
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIconLink}>
            <FaInstagram size={20} />
          </a>
          <a href="#" className={styles.socialIconLink}>
            <FaWhatsapp size={20} />
          </a>
          <a href="#" className={styles.socialIconLink}>
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;