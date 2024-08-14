import './style.css';
import { Header } from './components/Header';
import { CurrentWeather } from './components/CurrentWeather';
import { validWeatherJSON } from './data/validWeatherJSON';

// import { getWeather } from './modules/getWeather';
import { extractWeatherData } from './modules/extractWeatherData';
import { switchTempUnit } from './utils/switchTempUnit';

const app = document.getElementById('app');
const header = Header();
const body = document.createElement('div');
body.classList.add('body');

if (app !== null) {
  app.appendChild(header);
  app.appendChild(body);
}

const exampleWeather = switchTempUnit(extractWeatherData(validWeatherJSON));

const currentWeather = CurrentWeather(exampleWeather);

body.appendChild(currentWeather);

// Promise.all([
//   getWeather('irvine'),
//   getWeather('new york'),
//   getWeather('london'),
//   getWeather('tokyo'),
//   getWeather('sydney'),
// ])
//   .then((results) => {
//     results.forEach((data) => {
//       const weatherData = extractWeatherData(data);
//       const weatherInCelsius = switchTempUnit(weatherData);
//       const currentWeatherCard = CurrentWeather(weatherInCelsius);
//       body.appendChild(currentWeatherCard);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
