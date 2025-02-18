import Header from "../components/Header";
import Start from "../components/Start";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Location from "../components/Location";
import Galery from "../components/Galery";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.fullWidth}>
        <Header />
      </div>
      <div className={styles.fullWidth}>
        <Start />
      </div>
      <div className={styles.fullWidth}>
        <AboutUs />
      </div>
      <div className={styles.fullWidth}>
        <Products />
      </div>
      <div className={styles.fullWidth}>
        <Location />
      </div>
      <div className={styles.fullWidth}>
        <Galery />
      </div>
      <div className={styles.fullWidth}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
