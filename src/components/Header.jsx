import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "../components_css/Header.module.css";
import logoBernardina from "../../public/img/logo_bernardina.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [offsets, setOffsets] = useState({
    home: -100,
    about: -120,
    products: -180,
    location: -150,
    gallery: 0
  });

  // Función para actualizar los offsets según la resolución
  useEffect(() => {
    const updateOffsets = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 480) {
        // Teléfonos pequeños
        setOffsets({
          home: -80,
          about: -100,
          products: -140,
          location: -120,
          gallery: 0
        });
      } else if (screenWidth <= 768) {
        // Teléfonos grandes y tablets
        setOffsets({
          home: -90,
          about: -110,
          products: -160,
          location: -130,
          gallery: 0
        });
      } else if (screenWidth <= 1024) {
        // Tablets grandes
        setOffsets({
          home: -100,
          about: -50,
          products: -250,
          location: -140,
          gallery: 0
        });
      } else {
        // Escritorio y pantallas grandes
        setOffsets({
          home: -100,
          about: -120,
          products: -180,
          location: -150,
          gallery: 0
        });
      }
    };

    // Llamar a la función en la carga inicial y en cada resize
    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

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
          <Link to="home" smooth={true} duration={500} offset={offsets.home} className={styles.navLink}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} offset={offsets.about} className={styles.navLink}>
            About Us
          </Link>
          <Link to="products" smooth={true} duration={500} offset={offsets.products} className={styles.navLink}>
            Products
          </Link>
          <Link to="location" smooth={true} duration={500} offset={offsets.location} className={styles.navLink}>
            Location
          </Link>
          <Link to="gallery" smooth={true} duration={500} offset={offsets.gallery} className={styles.navLink}>
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
