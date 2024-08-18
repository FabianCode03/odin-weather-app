import { fetchWeather } from './fetchWeather';
import { extractWeatherData } from './extractWeatherData';
import { switchTempUnit } from '../utils/switchTempUnit';
import type { WeatherData } from '../types/weatherTypes';
import { Err, Ok } from 'ts-results';
import type { Result } from 'ts-results';
import {
  type GetWeatherError,
  CityNotFoundError,
  DataParsingError,
  NetworkError,
  UnknownError,
} from '../errors/getWeatherError';

import {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  TooManyRequestsError,
  InternalServerError,
  UnknownFetchError,
  JSONParsingError,
} from '../errors/fetchWeatherError';

export async function getWeather(city: string): Promise<Result<WeatherData, GetWeatherError>> {
  const data = await fetchWeather(city);

  // Valid endpoint but invalid parameters -> 400 Bad Request -> CityNotFoundError
  if (data.err && data.val instanceof BadRequestError) {
    return Err(new CityNotFoundError(data.val));
  }

  // API key or subscription problem -> 401 Unauthorized -> NetworkError
  if (data.err && data.val instanceof UnauthorizedError) {
    return Err(new NetworkError(data.val));
  }

  // No valid endpoint for request -> 404 Not Found -> NetworkError
  if (data.err && data.val instanceof NotFoundError) {
    return Err(new NetworkError(data.val));
  }

  // Too Many Requests -> 429 Too Many Requests -> NetworkError
  if (data.err && data.val instanceof TooManyRequestsError) {
    return Err(new NetworkError(data.val));
  }

  // Internal server error -> 500 Internal Server Error -> NetworkError
  if (data.err && data.val instanceof InternalServerError) {
    return Err(new NetworkError(data.val));
  }

  // Error parsing JSON -> JSONParsingError
  if (data.err && data.val instanceof JSONParsingError) {
    return Err(new DataParsingError(data.val));
  }

  // Unknown error -> UnknownError
  if (data.err && data.val instanceof UnknownFetchError) {
    return Err(new UnknownError(data.val));
  }

  const weatherData = extractWeatherData(data.val);

  if (weatherData.err) {
    return Err(new DataParsingError(weatherData.val));
  }

  return Ok(switchTempUnit(weatherData.val));
}
