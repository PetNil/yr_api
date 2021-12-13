import * as ApiService from './apiService.js';
import { weatherDisplay } from './displayWeather.js';

document.querySelector('#searchBtn').addEventListener('click', async () => {
    let searchResult = document.querySelector('#searchInput').value;
    const [longitude, latitude] = await ApiService.getLatLng(searchResult).then((data) => {
        return [data.coord.lon, data.coord.lat]
    });

    let weather = await ApiService.getWeather(longitude, latitude).then((data) => {
        return data;
    }); 

    weatherDisplay(weather);
})

