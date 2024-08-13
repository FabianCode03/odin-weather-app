import './style.css';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { CurrentWeather } from './components/CurrentWeather';

import { getWeather } from './modules/getWeather';
import { extractWeatherData } from './modules/extractWeatherData';
import { switchTempUnit } from './utils/switchTempUnit';

const app = document.getElementById('app');
const header = Header();
const body = document.createElement('div');

if (app !== null) {
  app.appendChild(header);
  app.appendChild(body);
}

const cardBodyExample = document.createElement('div');
cardBodyExample.textContent = 'This is an example card body.';

const card = Card('Example Card', '12:52', cardBodyExample);
body.appendChild(card);

getWeather('friedrichshafen')
  .then((data) => {
    const weatherData = extractWeatherData(data);
    const weatherInCelsius = switchTempUnit(weatherData);
    const currentWeatherCard = CurrentWeather(weatherInCelsius);
    body.appendChild(currentWeatherCard);
  })
  .catch((error) => {
    console.error(error);
  });
