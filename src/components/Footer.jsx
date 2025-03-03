import { Link } from "react-scroll";
import styles from "../components_css/Footer.module.css";
import logoBernardina from "../../public/img/logo_bernardina.png";
import instagramIcon from "../../public/img/instagram_logo.png";
import whatsappIcon from "../../public/img/whatsapp_logo.png";
import twitterIcon from "../../public/img/x_logo.png";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.line}></div>
      <div className={styles.topSection}>
        {/* Logo y dirección */}
        <div className={styles.logoContainer}>
          <img src={logoBernardina} alt="Logo" className={styles.logoImage} />
          <div className={styles.logoText}>
            <span className={styles.logoTextTitle}>BERNARDINA</span>
            <span className={styles.logoTextSubTitle}>Sandwich & Coffee</span>
          </div>
        </div>

        {/* Menú de navegación */}
        <nav className={styles.navMenu}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            className={styles.navLink}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-120}
            className={styles.navLink}
          >
            About Us
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            offset={-180}
            className={styles.navLink}
          >
            Products
          </Link>
          <Link
            to="location"
            smooth={true}
            duration={500}
            offset={-150}
            className={styles.navLink}
          >
            Location
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            offset={0}
            className={styles.navLink}
          >
            Gallery
          </Link>
        </nav>
      </div>

      {/* Información de contacto y redes sociales */}
      <div className={styles.middleSection}>
        <div className={styles.contactInfo}>
          <p>Dirección: Del Valle Iberlucea 2600 | Lanús. O.</p>
          <p>Teléfono: 11-000-000</p>
          <p>Correo: Bernardina@gmail.com</p>
        </div>

        <div className={styles.secondMiddleSection}>
          {/* Botón de menú */}
          <a href="#" className={styles.menuButton}>
            Conocé nuestro menú
          </a>

          {/* Redes sociales */}
          <div className={styles.socialIcons}>
            <img src={instagramIcon} alt="Instagram" />
            <img src={whatsappIcon} alt="WhatsApp" />
            <img src={twitterIcon} alt="Twitter" />
          </div>
        </div>
      </div>

      {/* Sección final con derechos y desarrollador */}
      <div className={styles.bottomSection}>
        <a className={styles.reviewButton}>Calificá nuestro servicio</a>

        <div className={styles.secondMiddleSection}>
          <p className={styles.developer}>
            Desarrollado por: <span>YANA Web Studio</span>
          </p>
          <p className={styles.developer_two}>©2024 TOSTADO CAFÉ CLUB | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
