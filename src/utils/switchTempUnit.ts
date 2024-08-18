import { type WeatherData } from '../types/weatherTypes';

function convertCelsiusToFahrenheit(temp: number): number {
  return parseFloat(((temp * 9) / 5 + 32).toFixed(1));
}

function convertFahrenheitToCelsius(temp: number): number {
  return parseFloat((((temp - 32) * 5) / 9).toFixed(1));
}

function convertTemperature(temp: number, toUnit: string): number {
  return toUnit === '°F'
    ? convertCelsiusToFahrenheit(temp)
    : convertFahrenheitToCelsius(temp);
}

export function switchTempUnit(weather: WeatherData): WeatherData {
  // check if the current unit is Celsius or Fahrenheit
  const tempUnit: string = weather.tempUnit === '°C' ? '°F' : '°C';

  // create a new object with the updated unit
  const newWeather: WeatherData = { ...weather, tempUnit };

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
}
