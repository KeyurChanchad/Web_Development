function updateMap() {
  const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
  fetch("/CoronaMap/data.json")
    .then((res) => res.json())
    .then((res) => {
      res.data.forEach((data) => {
        mapboxClient.geocoding
          .forwardGeocode({
            query: `${data.name}, ${data.country}`,
            autocomplete: false,
            limit: 1
          })
          .send()
          .then((response) => {
            if (
              !response ||
              !response.body ||
              !response.body.features ||
              !response.body.features.length
            ) {
              console.error("Invalid response:");
              console.error(response);
              return;
            }
            const feature = response.body.features[0];

            // Create a marker and add it to the map.
            new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
          });
      });
    });
}

updateMap();
