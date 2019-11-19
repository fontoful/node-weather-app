const request = require("request");

const API_KEY = "1087c6a4144d3dbd060eee81188e3274";

const address = process.argv[2];

const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${API_KEY}`;

if (!address) {
    return console.log("Please enter a valid address");
}

request(url, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data.main.temp);
});
