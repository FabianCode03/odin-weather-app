import {
  type WeatherData,
  type Day,
  type Hour,
  type CurrentConditions,
} from '../types/weatherTypes';
import { isValidWeatherData } from './isValidWeatherData';
import { formatDateTime } from '../utils/formatDateTime';

function extractHour(hour: Hour): Hour {
  const { datetime, conditions, icon, temp, humidity, precipprob, preciptype } =
    hour;
  return {
    datetime: formatDateTime(datetime),
    conditions,
    icon,
    temp,
    humidity,
    precipprob,
    preciptype,
  };
}

function extractDay(day: Day): Day {
  const {
    datetime,
    description,
    conditions,
    icon,
    temp,
    humidity,
    precipprob,
    preciptype,
    tempmax,
    tempmin,
    sunrise,
    sunset,
    hours,
  } = day;
  return {
    datetime: formatDateTime(datetime),
    description,
    conditions,
    icon,
    temp,
    humidity,
    precipprob,
    preciptype,
    tempmax,
    tempmin,
    sunrise: formatDateTime(sunrise),
    sunset: formatDateTime(sunset),
    hours: hours.map(extractHour),
  };
}

function extractCurrentConditions(
  currentConditions: CurrentConditions,
): CurrentConditions {
  const {
    datetime,
    conditions,
    icon,
    temp,
    humidity,
    precipprob,
    preciptype,
    sunrise,
    sunset,
  } = currentConditions;
  return {
    datetime: formatDateTime(datetime),
    conditions,
    icon,
    temp,
    humidity,
    precipprob,
    preciptype,
    sunrise: formatDateTime(sunrise),
    sunset: formatDateTime(sunset),
  };
}

export function extractWeatherData(json: any): WeatherData {
  if (!isValidWeatherData(json)) {
    throw new Error('Invalid weather data: (missing fields or invalid types)');
  }

  try {
    const { resolvedAddress, description, days, currentConditions } = json;

    const weatherData: WeatherData = {
      tempUnit: '°F',
      resolvedAddress,
      description,
      days: days.map(extractDay),
      currentConditions: extractCurrentConditions(currentConditions),
    };

    return weatherData;
  } catch (error) {
    throw new Error(
      'Invalid weather data: (extracting data failed or formatting error)',
    );
  }
}
