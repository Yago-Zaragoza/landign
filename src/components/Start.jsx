import styles from "../components_css/Start.module.css";
import backgroundImage from "../../public/assets/start_background.jpg";

function Start() {
  return (
    <div className={styles.divBlack}>
      <section className={styles.startSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            <span className={styles.highlight}>UN CAFÉ</span> UNA EXPERIENCIA
          </h1>
          <p className={styles.italicText}>
            <i>Café de especialidad preparado con pasión.</i>
          </p>
          <p className={styles.description}>
            VISÍTANOS Y DISFRUTÁ UNA TAZA PERFECTA EN UN AMBIENTE ACOGEDOR.
          </p>
          <button className={styles.menuButton}>Ver menú</button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Start;
