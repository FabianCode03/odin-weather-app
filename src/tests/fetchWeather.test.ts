import { fetchWeather } from '../modules/fetchWeather';
import {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  TooManyRequestsError,
  InternalServerError,
  JSONParsingError,
  UnknownError,
} from '../errors/fetchWeatherError';

global.fetch = jest.fn();

describe('fetchWeather', () => {
  const city = 'London';
  const API_KEY = 'QMZ3LX3H3DNTBKFLT3BGJS5A5';
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a JSON object when the request is successful', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockResolvedValueOnce(expect.any(Object)),
    });

    const result = await fetchWeather(city);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(URL);
    expect(result.ok).toBe(true);
    expect(result.val).toEqual({});
  });

  it('should return a BadRequestError when the status code is 400', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 400,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const result = await fetchWeather('InvalidCityName');
    expect(result.err).toBe(true);
    expect(result.val).toBeInstanceOf(BadRequestError);
  });

  it('should return an UnauthorizedError when the status code is 401', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 401,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const result = await fetchWeather(city);
    expect(result.err).toBe(true);
    expect(result.val).toBeInstanceOf(UnauthorizedError);
  });

  it('should return a NotFoundError when the status code is 404', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 404,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const result = await fetchWeather('InvalidCityName');
    expect(result.err).toBe(true);
    expect(result.val).toBeInstanceOf(NotFoundError);
  });

  it('should return a TooManyRequestsError when the status code is 429', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 429,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const result = await fetchWeather(city);
    expect(result.err).toBe(true);
    expect(result.val).toBeInstanceOf(TooManyRequestsError);
  });

  it('should return an InternalServerError when the status code is 500', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 500,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const result = await fetchWeather(city);
    expect(result.err).toBe(true);
    expect(result.val).toBeInstanceOf(InternalServerError);
  });

  it('should return a JSONParsingError when the response is not a valid JSON', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockRejectedValueOnce(new JSONParsingError()),
    });

    const result = await fetchWeather(city);
    expect(result.err).toBe(true);
    expect(result.val).toBeInstanceOf(JSONParsingError);
  });

  it('should return an UnknownError when an unexpected error occurs', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

    const result = await fetchWeather(city);
    expect(result.err).toBe(true);
    expect(result.val).toBeInstanceOf(UnknownError);
  });
});
