import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "../components_css/Galery.module.css";

// Array de imágenes con rutas corregidas
const images = [
  "/img/galery_1.png",
  "/img/galery_2.png",
  "/img/galery_3.png",
  "/img/galery_4.png",
  "/img/galery_5.png",
  "/img/galery_6.png",
  "/img/galery_6.png",
  "/img/galery_5.png",
  "/img/galery_4.png",
  "/img/galery_3.png",
  "/img/galery_2.png",
  "/img/galery_1.png",
];

// Separar imágenes en dos sliders (las primeras 6 y las últimas 6)
const firstRowImages = images.slice(0, 6);
const secondRowImages = images.slice(6, 12);

function Galery() {
  return (
    <div className={styles.galeryContainer}>
      {/* Texto superior */}
      <div className={styles.topText}>
        <p>Capturando momentos</p>
      </div>

      {/* Primer slider (arriba) */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3} // Muestra 3 imágenes a la vez
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        allowTouchMove={false} // Bloquea el deslizamiento manual
        grabCursor={false} // No muestra el cursor de agarre
        className={styles.swiperContainer}
      >
        {firstRowImages.map((img, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto inferior */}
      <div className={styles.bottomText}>
        <p>Lo mejor del take away</p>
      </div>

      {/* Segundo slider (abajo) */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3} // Muestra 3 imágenes a la vez
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        allowTouchMove={false} // Bloquea el deslizamiento manual
        className={styles.swiperContainer}
      >
        {secondRowImages.map((img, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Galery;
