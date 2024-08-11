import {
  WeatherData,
  Day,
  Hour,
  CurrentConditions,
} from '../types/weatherTypes';
import { isValidWeatherData } from './isValidWeatherData';
import { formatDateTime } from '../utils/formatDateTime';

function extractHour(hour: any): Hour {
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

function extractDay(day: any): Day {
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
    sunrise,
    sunset,
    hours: hours.map(extractHour),
  };
}

function extractCurrentConditions(currentConditions: any): CurrentConditions {
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
    sunrise,
    sunset,
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
