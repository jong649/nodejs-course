const request = require("request");

const getWeather = () => {
  const url =
    "http://api.weatherstack.com/current?access_key=1eaf9e02b38ff7c781479b09c9cf35d9&query=37.8267,-122.4233&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to weather service!");
    } else if (response.body.error) {
      console.log("Unable to find location");
    } else {
      console.log(
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
      );
    }
  });
};

const getCoords = () => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9uZzY0OSIsImEiOiJjanpuODZoZDYwMThtM2Rqa3RwNXd0dmY3In0.Qp2uWC_yLxIJKVCG_TmOTA";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to location services!");
    } else if (
      response.body.message === "Not Found" ||
      response.body.features[0].length === 0
    ) {
      console.log("Unable to find location. Try again please.");
    } else {
      console.log(`Latitude: ${response.body.features[0].center[1]}`);
      console.log(`Longitude: ${response.body.features[0].center[0]}`);
    }
  });
};

getCoords();
//getWeather();
