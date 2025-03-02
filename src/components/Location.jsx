import { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import styles from "../components_css/Location.module.css";
import bernardinaMaps from "../../public/img/Bernardina_maps.jpg";
import clockIcon from "../../public/img/clock_icon.png";

const locations = [
  {
    id: 1,
    name: "Bernardina Sandwich & Coffee",
    addres:
      "E. Del Valle Iberlucea 2592, B1824 Lanús, Provincia de Buenos Aires",
    description: "Un espacio acogedor con los mejores cafés y sandwiches",
    position: { lat: -34.701202213956954, lng: -58.39321580300122 },
    image: bernardinaMaps,
  },
  // Agrega más locales según sea necesario
];

function Location() {
  // Obtener la primera ubicación para centrar el mapa
  const initialCenter = locations[0]?.position || { lat: 0, lng: 0 };
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <>
      {/* Contenedor principal con el mapa y la información */}
      <div className={styles.locationContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Encuéntranos y disfruta</h2>
          <p className={styles.description}>
            Visítanos en nuestro espacio acogedor y disfruta de un buen café en el momento perfecto.
          </p>
        </div>
        <div className={styles.mapContainer}>
          <APIProvider apiKey="AIzaSyBfEqYuvhmHWTChyNPyLeJWYrvMZXvNY_4">
            <Map
              defaultZoom={17}
              defaultCenter={initialCenter} // Centro inicial del mapa
              style={{ width: "585px", height: "445px" }}
            >
              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={loc.position}
                  onClick={() => setSelectedLocation(loc)}
                />
              ))}

              {selectedLocation && (
                <InfoWindow
                  position={selectedLocation.position}
                  onCloseClick={() => setSelectedLocation(null)}
                >
                  <div className={styles.infoWindow}>
                    <img
                      src={selectedLocation.image}
                      alt={selectedLocation.name}
                      className={styles.locationImage}
                    />
                    <h3>{selectedLocation.name}</h3>
                    <p>{selectedLocation.address}</p>
                    <p>{selectedLocation.description}</p>
                    <a
                      href={`https://www.google.com.ar/maps/place/Bernardina+Sandwich+%26+Coffee/@-34.7011802,-58.3957907,17z/data=!4m15!1m8!3m7!1s0x95bccd1a559b63f7:0x11af7f98b0da0a14!2sBernardina+Sandwich+%26+Coffee!8m2!3d-34.7011846!4d-58.3932158!10e1!16s%2Fg%2F11sz4ccf8n!3m5!1s0x95bccd1a559b63f7:0x11af7f98b0da0a14!8m2!3d-34.7011846!4d-58.3932158!16s%2Fg%2F11sz4ccf8n?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapButton}
                    >
                      Ir a Google Maps
                    </a>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
      </div>

      {/* Sección de horarios (ubicada debajo) */}
      <div className={styles.scheduleContainer}>
        <p className={styles.scheduleText}>TODOS LOS DÍAS</p>
        <p className={styles.scheduleHours}>
          DE <img src={clockIcon} alt="Ícono de reloj" className={styles.clockIcon} /> 8 A 20 HS
        </p>
      </div>
    </>
  );
}

export default Location;

