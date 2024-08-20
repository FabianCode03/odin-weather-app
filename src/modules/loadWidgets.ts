import { CurrentWeather } from '../components/CurrentWeather';
import { SolarCycle } from '../components/SolarCycle';
import { Forecast } from '../components/Forecast';
import { HoursPreview } from '../components/HoursPreview';
import { Today } from '../components/TodaysDetails';
import { type Hour, type WeatherData } from '../types/weatherTypes';
import { getNext24Hours } from '../utils/getNext24Hours';

export function loadWidgets(body: HTMLElement, weather: WeatherData): void {
  const hoursArray: Hour[] = getNext24Hours(weather);
  const hoursPreview = HoursPreview(hoursArray);
  const currentWeather = CurrentWeather(weather);
  const solarCycle = SolarCycle(weather.currentConditions.sunrise, weather.currentConditions.sunset);
  const forecast = Forecast(weather.description);
  const today = Today(weather);

  body.appendChild(currentWeather);
  body.appendChild(today);
  body.appendChild(forecast);

  body.appendChild(solarCycle);
  body.appendChild(hoursPreview);
}
