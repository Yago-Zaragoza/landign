import styles from "../components_css/Start.module.css";
import backgroundImage from "../../public/assets/start_background.jpg";

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
              <span className={styles.Dynalight}>Café </span><span>de especialidad preparado con pasión</span>
            </p>
            <p className={styles.description}>
              <span className={styles.secondDescription}>VISÍTANOS Y DISFRUTÁ UNA TAZA PERFECTA EN UN AMBIENTE ACOGEDOR</span>
            </p>
            <button className={styles.menuButton}>Ver menú</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Start;
