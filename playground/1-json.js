const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Jon";
data.age = 38;
const dataString = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataString);
