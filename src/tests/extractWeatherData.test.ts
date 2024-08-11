import { extractWeatherData } from '../modules/extractWeatherData';

describe('extractWeatherData', () => {
  it('should return the correct data', async () => {
    const json = {
      location: {
        name: 'Friedrichshafen',
        region: 'Baden-Württemberg',
        country: 'Deutschland',
      },
      current: {
        last_updated: '2024-08-11 06:20',
        temp_c: 64.5,
        condition: {
          text: 'Clear',
          icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
        },
        humidity: 93.2,
        precip_mm: 0,
        sunrise: '06:12',
        sunset: '20:40',
      },
      forecast: {
        forecastday: [
          {
            date: '2024-08-11',
            day: {
              condition: {
                text: 'Becoming cloudy in the afternoon with storms possible',
                icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
              },
              maxtemp_c: 84.6,
              mintemp_c: 62.5,
              avgtemp_c: 74.4,
              avghumidity: 80,
              daily_chance_of_rain: 87.1,
              daily_will_it_rain: 1,
              daily_will_it_snow: 0,
              astro: {
                sunrise: '06:12',
                sunset: '20:40',
              },
            },
            hour: [
              {
                time: '00:00',
                condition: {
                  text: 'Clear',
                  icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
                },
                temp_c: 67.9,
                humidity: 100,
                precip_mm: 0,
              },
            ],
          },
        ],
      },
    };

    const result = await extractWeatherData(json);

    expect(result).toEqual({
      resolvedAddress: 'Friedrichshafen, Baden-Württemberg, Deutschland',
      description:
        'Similar temperatures continuing with a chance of rain multiple days.',
      days: [
        {
          date: '2024-08-11',
          description: 'Becoming cloudy in the afternoon with storms possible.',
          sunrise: '06:12:00',
          sunset: '20:40:00',
          tempMax: 84.6,
          tempMin: 62.5,
          conditions: 'Rain, Partially cloudy',
          icon: 'rain',
          temp: 74.4,
          humidity: 80,
          precipprob: 87.1,
          preciptype: ['rain'],
          hours: [
            {
              time: '00:00:00',
              conditions: 'Clear',
              icon: 'clear-night',
              temp: 67.9,
              humidity: 100,
              precipprob: 0,
              preciptype: null,
            },
          ],
        },
      ],
      currentConditions: {
        time: '06:20:00',
        conditions: 'Clear',
        icon: 'clear-day',
        temp: 64.5,
        humidity: 93.2,
        precipprob: 0,
        preciptype: null,
        sunrise: '06:12:00',
        sunset: '20:40:00',
      },
    });
  });
});
