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
      <div id="home" className={styles.fullWidth}>
        <Header />
      </div>
      <div id="start" className={styles.fullWidth}>
        <Start />
      </div>
      <div id="about" className={styles.fullWidth}>
        <AboutUs />
      </div>
      <div id="products" className={styles.fullWidth}>
        <Products />
      </div>
      <div id="location" className={styles.fullWidth}>
        <Location />
      </div>
      <div id="gallery" className={styles.fullWidth}>
        <Galery />
      </div>
      <div className={styles.fullWidth}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
