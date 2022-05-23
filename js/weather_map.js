"use strict";
$(function () {


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

// function formatTime(timeStamp){
//     let dateTime = new Date(timeStamp * 1000);
//     let year = dateTime.getFullYear();
//     let month = months[dateTime.getMonth()];
//     let day = dateTime.getDate();
//     let hour = appendLeadingZeroes(dateTime.getHours());
//     let minutes = appendLeadingZeroes(dateTime.getMinutes());
//     let seconds = appendLeadingZeroes(dateTime.getSeconds());
//     let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
//     return formattedDateTime;
// }

    // $.get("https://api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 30.50919521933195,
    //     lon: -97.68168822541604,
    //     units: "imperial"
    // }).done(function (data) {
    //     console.log('current weather', data);
    //     // return(data.main.temp + 'is the current temperature in Round Rock');
    //
    //     $('#location').append(data.name);
    //
    // });
    //
    //     console.log(formatTime(data.dt));
    //
    //     $('#date').append(formatTime(data.dt));
    //     $('#currentTemp').append('  ' + data.main.temp_min + " / " + data.main.temp_max + '\u00B0 F');
    //     $('#description').append('  ' + data.weather[0].description);
    //     $('#humidity').append('  ' + data.main.humidity);
    //     $('#wind').append('  ' + data.wind.speed);
    //     $('#pressure').append('  ' + data.main.pressure);
    //
    // });


//returns 5 day forecast weather in F, by coords:

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: 30.50919521933195,
        lon: -97.68168822541604,
        units: "imperial"
    }).done(function (data) {
        console.log('5 day forecast', data);

        // data.daily.(function (dailyForecast, index) {
            // if (index < 5)

                for (var i = 0; i < 5; i++) {
                    var dailyForecast = data.daily[i]
                    $("#five-day").append(
                        '<div class="col">' +
                        '<div class="card">' +
                        '<p class="card-header d-flex justify-content-center"> formatTime(dailyForecast.dt) + </p>' +
                        '<div class="card-body">' +
                        '<p class="card-text d-flex justify-content-center">' + dailyForecast.temp.min + " / " + dailyForecast.temp.max + "\u00B0 F" + '</p>' +
                        '<p class="weekly"> Description: ' + dailyForecast.weather[0].description + '</p>' +
                        '<p class="weekly"> Humidity: ' + dailyForecast.humidity + '</p>' +
                        '<p class="weekly"> Wind: ' + dailyForecast.wind + '</p>' +
                        '<p class="weekly"> Pressure: ' + dailyForecast.pressure + '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>')
                    // });
                }
    });



    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    function formatTime(time) {
        let dateTime = new Date(time * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        // let hour = appendLeadingZeroes(dateTime.getHours());
        // let minutes = appendLeadingZeroes(dateTime.getMinutes());
        // let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = year + "-" + month + "-" + day;

        return formattedDateTime;
    };
                                //mapbox geocoder for address input...

    // function geocode(search, token) {
    //     var baseUrl = 'https://api.mapbox.com';
    //     var endPoint = '/geocoding/v5/mapbox.places/';
    //     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
    //         .then(function(res) {
    //             return res.json();
    //             // to get all the data from the request, comment out the following three lines...
    //         }).then(function(data) {
    //             return data.features[0].center;
    //         });
    // }

});