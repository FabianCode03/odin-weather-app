import { Ok, Err, type Result } from 'ts-results';
import {
  type FetchWeatherError,
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  TooManyRequestsError,
  InternalServerError,
  UnknownError,
  JSONParsingError,
} from '../errors/fetchWeatherError';

export async function fetchWeather(city: string): Promise<Result<unknown, FetchWeatherError>> {
  const API_KEY = 'QMZ3LX3H3DNTBKFLT3BGJS5A5';
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;

  try {
    const response = await fetch(URL);

    switch (response.status) {
      case 400:
        return Err(new BadRequestError());
      case 401:
        return Err(new UnauthorizedError());
      case 404:
        return Err(new NotFoundError());
      case 429:
        return Err(new TooManyRequestsError());
      case 500:
        return Err(new InternalServerError());
      default:
        if (response.status !== 200) {
          return Err(new UnknownError(new Error(`Unexpected status code: ${response.status}`)));
        }
    }

    const data = await response.json();
    return Ok(data);
  } catch (error: unknown) {
    if (error instanceof JSONParsingError) {
      return Err(new JSONParsingError());
    }
    return Err(new UnknownError(error as Error));
  }
}
