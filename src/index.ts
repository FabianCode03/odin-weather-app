import './style.css';
import { Header } from './components/Header';
import { getWeather } from './modules/getWeather';
import { extractWeatherData } from './modules/extractWeatherData';
import { switchTempUnit } from './utils/switchTempUnit';
import { CurrentWeather } from './components/CurrentWeather';

const app = document.getElementById('app');
const header = Header();

if (app !== null) {
  app.appendChild(header);
}

const weather = getWeather('friedrichshafen');
weather
  .then((data) => {
    const weatherData = extractWeatherData(data);
    const weatherInCelsius = switchTempUnit(weatherData);
    const currentWeather = new CurrentWeather(weatherInCelsius);
    const weatherWidget = document.createElement('div');
    weatherWidget.innerHTML = currentWeather.render();
    if (app !== null) {
      app.appendChild(weatherWidget);
    }
  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
  });
