const API_KEY = "";

const coordinates = {
  Latitude: '',
  Longitude: ''
}

export const getLatLng = async (query) => {
  const geoLink = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;
  return await fetch(geoLink)
    .then(async (response) => { 
        try {
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        } 
    });
};

export const getWeather = async (longitude, latitude) => {
  coordinates.Longitude  = latitude;
  coordinates.Latitude = longitude;
  return await fetch('https://localhost:44336/weather', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(coordinates)
  }).then(async (response) => { 
    try {
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    } 
  });
}

