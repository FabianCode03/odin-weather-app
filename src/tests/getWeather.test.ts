import { fetchWeather } from '../modules/fetchWeather';

global.fetch = jest.fn();

describe('getWeather', () => {
  const city = 'Berlin';
  const API_KEY = 'QMZ3LX3H3DNTBKFLT3BGJS5A5';
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;

  const mockResponse = {}; // no properties needed because only fetching and json parsing is tested

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a JSON object', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const data = await fetchWeather(city);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(URL);
    expect(typeof data).toBe('object');
    expect(data).toEqual(mockResponse);
  });

  it('should throw an error when the city is not found', async () => {
    const city = 'NonExistentCity';
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;

    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 400,
      json: jest.fn().mockResolvedValueOnce({
        error: 'City not found',
      }),
    });

    await expect(fetchWeather(city)).rejects.toThrow('Status != 200: 400');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(URL);
  });

  it('should throw an error if JSON parsing fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockRejectedValueOnce(new Error('Invalid JSON')),
    });

    await expect(fetchWeather(city)).rejects.toThrow('Failed to fetch data');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(URL);
  });

  it('should throw an error if fetch fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchWeather(city)).rejects.toThrow('Failed to fetch data');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(URL);
  });
});
