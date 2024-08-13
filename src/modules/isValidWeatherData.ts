import { type WeatherData } from '../types/weatherTypes';
import { isString, isNumber, isNullableStringArray } from '../utils/validation';

const isValidHour = (data: any): boolean => {
  return (
    isString(data.datetime) &&
    isString(data.conditions) &&
    isString(data.icon) &&
    isNumber(data.temp) &&
    isNumber(data.humidity) &&
    isNumber(data.precipprob) &&
    isNullableStringArray(data.preciptype)
  );
};

const isValidDay = (data: any): boolean => {
  return (
    isString(data.datetime) &&
    isString(data.description) &&
    isString(data.sunrise) &&
    isString(data.sunset) &&
    isNumber(data.tempmax) &&
    isNumber(data.tempmin) &&
    isString(data.conditions) &&
    isString(data.icon) &&
    isNumber(data.temp) &&
    isNumber(data.humidity) &&
    isNumber(data.precipprob) &&
    isNullableStringArray(data.preciptype) &&
    Array.isArray(data.hours) &&
    data.hours.every(isValidHour)
  );
};

const isValidCurrentConditions = (weatherJSON: any): boolean => {
  return (
    isString(weatherJSON.datetime) &&
    isString(weatherJSON.conditions) &&
    isString(weatherJSON.icon) &&
    isNumber(weatherJSON.temp) &&
    isNumber(weatherJSON.humidity) &&
    isNumber(weatherJSON.precipprob) &&
    isNullableStringArray(weatherJSON.preciptype) &&
    isString(weatherJSON.sunrise) &&
    isString(weatherJSON.sunset)
  );
};

export const isValidWeatherData = (data: unknown): data is WeatherData => {
  if (data === null || typeof data !== 'object') {
    return false;
  }

  const weatherData = data as Record<string, unknown>;

  return (
    isString(weatherData.resolvedAddress) &&
    isString(weatherData.description) &&
    Array.isArray(weatherData.days) &&
    weatherData.days.every(isValidDay) &&
    isValidCurrentConditions(weatherData.currentConditions)
  );
};
