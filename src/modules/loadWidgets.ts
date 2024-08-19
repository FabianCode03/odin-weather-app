import { CurrentWeather } from '../components/CurrentWeather';
import { SolarCycle } from '../components/SolarCycle';
import { Forecast } from '../components/Forecast';
import { type WeatherData } from '../types/weatherTypes';

export function loadWidgets(body: HTMLElement, weather: WeatherData): void {
  const currentWeather = CurrentWeather(weather);
  const solarCycle = SolarCycle(weather.currentConditions.sunrise, weather.currentConditions.sunset);
  const forecast = Forecast(weather.description);

  body.appendChild(currentWeather);
  body.appendChild(solarCycle);
  body.appendChild(forecast);
}
