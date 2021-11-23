const API_KEY = "84b1ef9b49bc1ba762f42a1d171593f1";
let address = "";
let lon = null;
let lat = null;

const coordinates = {
  Latitude: '',
  Longitude: ''
}
const getLatLng = async (query) => {
  const geoLink = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;
  const fetchData = await fetch(geoLink);
  
  return await fetchData.json();
};

getLatLng("Stockholm").then((data) => {
  coordinates.Longitude  = data.coord.lon;
  coordinates.Latitude = data.coord.lat;
  console.log(JSON.stringify(coordinates))

  fetch('https://localhost:44336/weather', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(coordinates)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Unable to fetch data.', error));
});
