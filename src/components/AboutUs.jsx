import styles from "../components_css/AboutUs.module.css";
import logoBernardina from "../../public/img/logo_bernardina.png";

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logoBernardina} alt="Logo" className={styles.logoImage} />
        <div className={styles.logoText}>
          <span className={styles.logoTextTitle}>BERNARDINA</span>
          <span className={styles.logoTextSubTitle}>Sandwich & Coffee</span>
        </div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.quoteBox}>
          <span className={styles.quoteText}>
            “Todos los días son buenos para regalarse un momento”
          </span>
        </div>
        <div className={styles.lineContent}>
          <div className={styles.line}>
            <div className={styles.textContainer}>
              <p>En Bernardina, creemos que el café es mucho más que una bebida: Es una experiencia que
                conecta a las personas y despierta los sentidos. Nuestro objetivo es ofrecer un café de calidad
                excepcional, cultivado con dedicación y tostado con el máximo cuidado para resaltar sus sabores
                más puros.<br></br>
                Pero la experiencia no estaría completa sin una buena compañía en la mesa. Por eso, en nuestro
                menú encontrarás una variedad de opciones dulces y saladas para acompañar tu café: desde
                tostados crocantes y esponjosos budines hasta exquisitas tortas caseras y medialunas recién
                horneadas. Cada bocado está pensado para complementar y realzar los sabores de nuestro café,
                creando el equilibrio perfecto entre aroma, textura y sabor.
              </p>
            </div>
            <div className={styles.footer}>
              <span className={styles.specialty}>Café de especialidad</span>
              <div className={styles.logoWrapper}>
                <img
                  src={logoBernardina}
                  alt="Logo"
                  className={styles.logoImageFooter}
                />
              </div>
              <span className={styles.moments}>Momentos únicos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
