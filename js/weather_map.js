"use strict";

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "Round, US"
// });

// $.get("https://api.openweathermap.org/data/2.5/onecall", {
//     APPID: OPEN_WEATHER_APPID,
//     //Round Rock
//     lat:    30.50919521933195,
//     lon:   -97.68168822541604,
//
//     units: "imperial"
// }).done(function(data) {
//
//     // console.log('The entire response:', data);
//     // console.log('Diving in - here is current information: ', data.current);
//     // console.log('A step further - information for tomorrow: ', data.daily[1]);
//     // console.log(data.current.temp);
//     // console.log(data.current.weather[0].description);
//
//     data.daily.forEach(function(dailyForecast, index){
//         if (index < 5){
//             // console.log(dailyForecast.temp.max);
//             // console.log(dailyForecast.temp.min);
//         }
//     })
// });

//returns current weather in Farhenheit, by coords:

$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    lat:    30.50919521933195,
    lon:   -97.68168822541604,
    units: "imperial"
}).done(function(data) {
    console.log('current weather', data);
    return(data.main.temp + 'is the current temperature in Round Rock');
});



//returns 5 day forecast weather in F, by coords:

$.get("https://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    lat:    30.50919521933195,
    lon:   -97.68168822541604,
    units: "imperial"
}).done(function(data) {
    console.log('5 day forecast', data);
});

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}