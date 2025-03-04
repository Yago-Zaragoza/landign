import styles from "../components_css/Start.module.css";
import backgroundImage from "../../public/img/start_background.jpg";

function Start() {
  return (
    <div className={styles.divBlack}>
      <section
        className={styles.startSection}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.playfairHighlight}>
              <span className={styles.Highlight}>UN CAFÉ</span>
              <span className={styles.secondHighlight}>UNA EXPERIENCIA</span>
            </h1>
            <p className={styles.italicText}>
              <span className={styles.Dynalight}>Café </span>
              <span>de especialidad preparado con pasión</span>
            </p>
            <p className={styles.description}>
              <span className={styles.secondDescription}>
                VISÍTANOS Y DISFRUTÁ UNA TAZA PERFECTA EN UN AMBIENTE ACOGEDOR
              </span>
            </p>

            {/* Enlace con estilo de botón y sin subrayado */}
            <a
              href="https://drive.google.com/file/d/12KfhmwwxjmziyIvhTmpgKEug1evRfmDF/view"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuButton}
            >
              Ver menú
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Start;
