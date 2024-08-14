import { CurrentWeather } from '../components/CurrentWeather';
import { SolarCycle } from '../components/SolarCycle';
import { type WeatherData } from '../types/weatherTypes';

export function loadWidgets(body: HTMLElement, weather: WeatherData): void {
  const currentWeather = CurrentWeather(weather);
  const solarCycle = SolarCycle(
    weather.currentConditions.sunrise,
    weather.currentConditions.sunset,
  );

  body.appendChild(currentWeather);
  body.appendChild(solarCycle);
}
