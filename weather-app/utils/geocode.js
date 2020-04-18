const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoiam9uZzY0OSIsImEiOiJjanpuODZoZDYwMThtM2Rqa3RwNXd0dmY3In0.Qp2uWC_yLxIJKVCG_TmOTA`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (
      response.body.message === "Not Found" ||
      response.body.features[0].length === 0
    ) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
