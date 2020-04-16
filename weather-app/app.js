const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=1eaf9e02b38ff7c781479b09c9cf35d9&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
