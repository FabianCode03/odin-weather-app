import { fetchWeather } from './fetchWeather';
import { extractWeatherData } from './extractWeatherData';
import { switchTempUnit } from '../utils/switchTempUnit';
import type { WeatherData } from '../types/weatherTypes';

export async function getWeather(city: string): Promise<WeatherData> {
  try {
    const data = await fetchWeather(city);
    const weatherData = extractWeatherData(data);
    return switchTempUnit(weatherData);
  } catch (error) {
    if ((error as Error).message === 'City not found') {
      throw new Error('City not found');
    }
    throw error;
  }
}
