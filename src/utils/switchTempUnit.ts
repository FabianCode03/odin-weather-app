import { type WeatherData } from '../types/weatherTypes';

function convertCelsiusToFahrenheit(temp: number): number {
  return parseFloat(((temp * 9) / 5 + 32).toFixed(1));
}

function convertFahrenheitToCelsius(temp: number): number {
  return parseFloat((((temp - 32) * 5) / 9).toFixed(1));
}

function convertTemperature(
  temp: number | undefined,
  toUnit: '°C' | '°F',
): number {
  if (typeof temp !== 'number') {
    throw new Error(`typeof temp: ${typeof temp}`);
  }
  return toUnit === '°F'
    ? convertCelsiusToFahrenheit(temp)
    : convertFahrenheitToCelsius(temp);
}

export function switchTempUnit(weather: WeatherData): WeatherData {
  try {
    const tempUnit = weather.tempUnit === '°C' ? '°F' : '°C';
    const newWeather = { ...weather, tempUnit };

    for (const day of newWeather.days) {
      day.temp = convertTemperature(day.temp, tempUnit);
      day.tempmax = convertTemperature(day.tempmax, tempUnit);
      day.tempmin = convertTemperature(day.tempmin, tempUnit);

      for (const hour of day.hours) {
        hour.temp = convertTemperature(hour.temp, tempUnit);
      }
    }

    newWeather.currentConditions.temp = convertTemperature(
      newWeather.currentConditions.temp,
      tempUnit,
    );

    return newWeather;
  } catch (error) {
    console.error('Error switching temperature unit:', error);
    throw error;
  }
}
