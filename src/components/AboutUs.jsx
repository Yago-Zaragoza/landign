import styles from '../components_css/AboutUs.module.css';
import logoBernardina from '../../public/assets/logo_bernardina.png';


function AboutUs() {
    return (
      <div>
        
          <div className={styles.logoContainer}>
                    <img src={logoBernardina} alt="Logo" className={styles.logoImage} />
                    <div className={styles.logoText}>
                      <span className={styles.logoTextTitle}>BERNARDINA</span>
                      <span className={styles.logoTextSubTitle}>Sandwich & Coffee</span>
                    </div>
          </div>
        
      </div>
    );
  }
  
  export default AboutUs;

  
