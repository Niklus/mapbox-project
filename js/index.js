const initMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibmlrbHVzIiwiYSI6ImNrZm51bm11MDJjOXoycm52Y3V1Z2VoMjcifQ.ZdjynuwEJtkaktmIpVCyqg";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [36.8219, -1.2921],
    zoom: 12,
  });

  const popup = new mapboxgl.Popup().setHTML(
    ` <h2>Nairobi</h2>
      <p>
        Welcome to Nairobi City.
        <a href="https://en.wikipedia.org/wiki/Nairobi" target="_blank">Learn more.</a>
      </p>
      <img src="img/nairobi.webp" alt="Nairobi City">
    `
  );

  const marker = new mapboxgl.Marker()
    .setLngLat([36.8219, -1.2921])
    .setPopup(popup)
    .addTo(map);
};

initMap();
