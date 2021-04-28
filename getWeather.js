async function getWeather(path) {
  const res = await fetch(path);
  const json = await res.json();
  return {
    name: json.name,
    temp: json.main.temp,
    desc: json.weather[0].description,
  };
}

function getWeatherByZip(zip, apiKey, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
  return getWeather(path);
}

function getWeatherByCity(city, apiKey, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  return getWeather(path);
}

function getWeatherByGeo(lat, lon, apiKey, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  return getWeather(path);
}

export { getWeatherByZip, getWeatherByCity, getWeatherByGeo };
