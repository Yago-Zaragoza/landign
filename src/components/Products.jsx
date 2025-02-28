import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "../components_css/Products.module.css";

// Importa las imágenes de tus productos
import ensalada from "../../public/img/ensalada.png";
import redvelvet from "../../public/img/redvelvet.png";
import flatwhite from "../../public/img/flatwhite.png";
import sandwich from "../../public/img/sandwich.png";

// Datos de los productos
const products = [
  {
    id: 1,
    name: "Ensalada Josefina",
    description:
      "Atún, mix de verdes, cebolla, tomate cherry, huevo duro, palta, olivas negras.",
    image: ensalada,
  },
  {
    id: 2,
    name: "Red Velvet",
    description:
      "Torta esponjosa de color rojo intenso, con un sutil sabor a cacao y un toque ácido, cubierta con un suave y cremoso frosting de queso.",
    image: redvelvet,
  },
  {
    id: 3,
    name: "Flatwhite",
    description:
      "Un café intenso pero con cremosidad. El aliado perfecto para comenzar el día.",
    image: flatwhite,
  },
  {
    id: 4,
    name: "Sándwich FEDE",
    description:
      "Pan de chipá tipo ciabatta, rúcula, queso sardo, tomates secos y cantimpalo.",
    image: sandwich,
  },
  {
    id: 5,
    name: "Producto 5",
    description: "Descripción del producto 5.",
    image: flatwhite,
  },
  {
    id: 6,
    name: "Producto 6",
    description: "Descripción del producto 6.",
    image: ensalada,
  },
];

function Products() {
  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.title}>Productos destacados</h2>
      <div className={styles.underline}></div>

      <div className={styles.productContainer}>
        <div className={styles.swiperButtonPrev}></div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20} /* Espacio entre productos */
          slidesPerView={4} /* Muestra exactamente 4 imágenes */
          centeredSlides={false} /* Centra el carrusel */
          loop={true} /* Mantiene el scroll infinito */
          slidesOffsetBefore={20} /* Espacio a la izquierda */
          slidesOffsetAfter={0} /* Espacio a la derecha */
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className={styles.product}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.swiperButtonNext}></div>
      </div>

      <button className="menuButton">Ver menú</button>
    </div>
  );
}

export default Products;
