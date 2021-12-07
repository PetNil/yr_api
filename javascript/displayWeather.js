export const weatherDisplay = async (weather) => {

    console.log(weather);
    const geometry = weather.geometry;
    const meta = weather.properties.meta;
    const data = weather.properties.timeseries;

    //console.log(geometry);  // Ger koordinaterna
    //console.log(meta);  // metadatan, ex hPa, Celsius
    // for (let d in data) {
    //     console.log(data[d]); // output 'testing'
    // }

    // console.log(data[0]);  // ger första tidsserien

    // console.log(data[1]);  // ger andra tidsserien

    var weatherSize = Object.keys(data).length;

    //console.log(weatherSize);  // ger antalet tidsserier

    // För att ta fram högsta och lägsta temperatur kommande 24 timmar
    let airTemps = [];
    for(let i = 0; i < 24; i++) {
    let temp = data[i].data.instant.details.air_temperature;
    airTemps.push(temp);
    }
    let highTemp = -50, lowTemp = 100;
    for (let i = 0;  i < airTemps.length; i++) {
    if (airTemps[i] > highTemp) {
        highTemp = airTemps[i];
    }
    if (airTemps[i] < lowTemp) {
        lowTemp = airTemps[i];
    }
    }
    let airTemp = [highTemp, lowTemp];

    const weatherNow = data[0].data.instant.details;
    const weather1H = data[1].data.instant.details;

    //console.log(weatherNow);
    // console.log(weather1H);

    const lat = geometry.coordinates[1];
    const long = geometry.coordinates[0];
    const height = geometry.coordinates[2];

    const updated = meta.updated_at;

    const prognosTime = data[0].time;
    const airP = weatherNow.air_pressure_at_sea_level;
    const temp = weatherNow.air_temperature + "&#176;";
    let rain = weatherNow.precipitation_amount;
    if (rain === undefined) {
    rain = 0;
    }
    const hum = weatherNow.relative_humidity;
    const direction = weatherNow.wind_from_direction;
    const wSpeed = weatherNow.wind_speed;


    const weatherArray = Object.entries(weatherNow);

    // Tar bort molnighet som vi inte använder just nu
    // const prognos = weatherArray.filter(w => !w.includes("cloud_area_fraction"));

    // console.log(prognos); 

    const thisDate = prognosTime.slice(0, 10);
    const thisTime = prognosTime.slice(11, 16);

    document.getElementById("lat").innerHTML = lat;
    document.getElementById("long").innerHTML = long;
    document.getElementById("height").innerHTML = height + " m.ö.h.";

    document.getElementById("updated").innerHTML = updated;

    document.getElementById("datum").innerHTML = thisDate;
    document.getElementById("tid").innerHTML = thisTime;

    document.getElementById("airpressure").innerHTML = airP;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("rain").innerHTML = rain;
    document.getElementById("hum").innerHTML = hum;
    document.getElementById("direction").innerHTML = direction;
    document.getElementById("wSpeed").innerHTML = wSpeed;


    document.getElementById("hTemp").innerHTML = airTemp[0] + "&#176;";
    document.getElementById("lTemp").innerHTML = airTemp[1] + "&#176;";

    // console.log(airTemp[0]);
    // console.log(airTemp[1]);

    const nextHour = data[0].data.next_1_hours.details.precipitation_amount;
    const nextHourSum = data[0].data.next_1_hours.summary;
    const nextHourImg = nextHourSum.symbol_code + ".png";
    const imgSource = "img/png/" + nextHourImg;

    // Separat för regn eftersom den verkar ligga i nästa timma
    // document.getElementById("precipitation_amount").innerHTML = nextHour;

    const sixHour = data[0].data.next_6_hours.details.precipitation_amount;
    const sixHourImg = data[0].data.next_6_hours.summary.symbol_code + ".png";
    const imgSource6 = "img/png/" + sixHourImg;

    const twelveHourImg = data[0].data.next_12_hours.summary.symbol_code + ".png";
    const imgSource12 = "img/png/" + twelveHourImg;

    //console.log(data[0].data.next_6_hours);
    // console.log(nextHour);
    // console.log(nextHourSum);
    // console.log(nextHourImg);

    document.getElementById("prognos_1h").innerHTML = nextHour + " mm";
    document.getElementById("bild_1h").innerHTML = "<img class='img-fluid' src=" +imgSource + " />";
    document.getElementById("prognos_6h").innerHTML = sixHour + " mm";
    document.getElementById("bild_6h").innerHTML = "<img class='img-fluid' src=" +imgSource6 + " />";
    document.getElementById("bild_12h").innerHTML = "<img class='img-fluid' src=" +imgSource12 + " />";
}