const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=1eaf9e02b38ff7c781479b09c9cf35d9&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});
