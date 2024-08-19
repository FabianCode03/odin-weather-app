import { type WeatherData, type Day, type Hour, type CurrentConditions } from '../types/weatherTypes';
import { isValidWeatherData } from './isValidWeatherData';
import { formatDateTime } from '../utils/formatDateTime';
import { Ok, Err, type Result } from 'ts-results';
import { ExtractWeatherDataError } from '../errors/extractWeatherDataError';

function extractHour(hour: Hour): Hour {
  const { datetime, conditions, icon, temp, humidity, precipprob, preciptype } = hour;
  return {
    datetime: formatDateTime(datetime).unwrapOr('formatting error'),
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
    datetime: formatDateTime(datetime).unwrapOr('formatting error'),
    description,
    conditions,
    icon,
    temp,
    humidity,
    precipprob,
    preciptype,
    tempmax,
    tempmin,
    sunrise: formatDateTime(sunrise).unwrapOr('formatting error'),
    sunset: formatDateTime(sunset).unwrapOr('formatting error'),
    hours: hours.map(extractHour),
  };
}

function extractCurrentConditions(currentConditions: CurrentConditions): CurrentConditions {
  const { datetime, conditions, icon, temp, humidity, precipprob, preciptype, sunrise, sunset } = currentConditions;
  return {
    datetime: formatDateTime(datetime).unwrapOr('formatting error'),
    conditions,
    icon,
    temp,
    humidity,
    precipprob,
    preciptype,
    sunrise: formatDateTime(sunrise).unwrapOr('formatting error'),
    sunset: formatDateTime(sunset).unwrapOr('formatting error'),
  };
}

export function extractWeatherData(json: any): Result<WeatherData, ExtractWeatherDataError> {
  if (!isValidWeatherData(json)) {
    return Err(new ExtractWeatherDataError('Invalid weather data: (missing required fields or wrong types)'));
  }

  try {
    const weatherData = json as unknown as WeatherData;

    const extractedWeatherData: WeatherData = {
      tempUnit: '°F',
      resolvedAddress: weatherData.resolvedAddress,
      description: weatherData.description,
      days: weatherData.days.map(extractDay),
      currentConditions: extractCurrentConditions(weatherData.currentConditions),
    };

    return Ok(extractedWeatherData);
  } catch (error) {
    return Err(new ExtractWeatherDataError('Error extracting weather data', error as Error));
  }
}
