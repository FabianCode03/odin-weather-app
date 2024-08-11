import { isValidWeatherData } from '../modules/isValidWeatherData';

describe('isValidWeatherData', () => {
  const validWeatherJSON = {
    queryCost: 1,
    latitude: 47.652,
    longitude: 9.47576,
    resolvedAddress: 'Friedrichshafen, Baden-Württemberg, Deutschland',
    address: 'friedrichshafen',
    timezone: 'Europe/Berlin',
    tzoffset: 2,
    description:
      'Similar temperatures continuing with a chance of rain multiple days.',
    days: [
      {
        datetime: '2024-08-10',
        datetimeEpoch: 1723240800,
        tempmax: 84.1,
        tempmin: 60.7,
        temp: 73.9,
        feelslikemax: 86.4,
        feelslikemin: 60.7,
        feelslike: 74.4,
        dew: 64.7,
        humidity: 75.8,
        precip: 0,
        precipprob: 0,
        precipcover: 0,
        preciptype: null,
        snow: 0,
        snowdepth: 0,
        windgust: 9.8,
        windspeed: 6.9,
        winddir: 210.8,
        pressure: 1021.7,
        cloudcover: 23.2,
        visibility: 8.8,
        solarradiation: 259.3,
        solarenergy: 22.5,
        uvindex: 9,
        severerisk: 30,
        sunrise: '06:11:34',
        sunriseEpoch: 1723263094,
        sunset: '20:42:27',
        sunsetEpoch: 1723315347,
        moonphase: 0.19,
        conditions: 'Partially cloudy',
        description: 'Clearing in the afternoon.',
        icon: 'partly-cloudy-day',
        stations: [
          '06258',
          '03927',
          'EDNY',
          '04094',
          '04704',
          '02712',
          'AT546',
          '07403',
        ],
        source: 'comb',
        hours: [
          {
            datetime: '00:00:00',
            datetimeEpoch: 1723240800,
            temp: 70.9,
            feelslike: 70.9,
            humidity: 71.99,
            dew: 61.5,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 9.8,
            windspeed: 1.7,
            winddir: 21,
            pressure: 1020.3,
            visibility: 25.8,
            cloudcover: 13,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-night',
            stations: [
              '06258',
              '03927',
              '04094',
              '04704',
              '02712',
              'AT546',
              '07403',
            ],
            source: 'obs',
          },
          {
            datetime: '01:00:00',
            datetimeEpoch: 1723244400,
            temp: 68,
            feelslike: 68,
            humidity: 83.86,
            dew: 63,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 9.2,
            windspeed: 3.3,
            winddir: 342,
            pressure: 1020.6,
            visibility: 30.4,
            cloudcover: 74.5,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-night',
            stations: [
              '06258',
              '03927',
              '04094',
              '04704',
              '02712',
              'AT546',
              '07403',
            ],
            source: 'obs',
          },
          {
            datetime: '02:00:00',
            datetimeEpoch: 1723248000,
            temp: 64.3,
            feelslike: 64.3,
            humidity: 100,
            dew: 64.3,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 4.5,
            windspeed: 2.2,
            winddir: 50,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 88,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-night',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '03:00:00',
            datetimeEpoch: 1723251600,
            temp: 64.3,
            feelslike: 64.3,
            humidity: 100,
            dew: 64.3,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 4.9,
            windspeed: 2.2,
            winddir: 40,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 73.6,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-night',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '04:00:00',
            datetimeEpoch: 1723255200,
            temp: 62.5,
            feelslike: 62.5,
            humidity: 100,
            dew: 62.5,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 3.4,
            windspeed: 2.2,
            winddir: 320.1,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 25,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-night',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '05:00:00',
            datetimeEpoch: 1723258800,
            temp: 62.5,
            feelslike: 62.5,
            humidity: 100,
            dew: 62.5,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2,
            windspeed: 2.2,
            winddir: 40,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 25,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-night',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '06:00:00',
            datetimeEpoch: 1723262400,
            temp: 60.7,
            feelslike: 60.7,
            humidity: 100,
            dew: 60.7,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 1.6,
            windspeed: 2.2,
            winddir: 41.6,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 41.3,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-night',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '07:00:00',
            datetimeEpoch: 1723266000,
            temp: 60.7,
            feelslike: 60.7,
            humidity: 100,
            dew: 60.7,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 0.9,
            windspeed: 3.4,
            winddir: 70,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 57.6,
            solarradiation: 74,
            solarenergy: 0.3,
            uvindex: 1,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '08:00:00',
            datetimeEpoch: 1723269600,
            temp: 66.1,
            feelslike: 66.1,
            humidity: 100,
            dew: 66.1,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 1.8,
            windspeed: 2.2,
            winddir: 26.1,
            pressure: 1023,
            visibility: 6.2,
            cloudcover: 49.4,
            solarradiation: 361,
            solarenergy: 1.3,
            uvindex: 4,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '09:00:00',
            datetimeEpoch: 1723273200,
            temp: 69.7,
            feelslike: 69.7,
            humidity: 88.35,
            dew: 66.1,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2.7,
            windspeed: 2.2,
            winddir: 17,
            pressure: 1023,
            visibility: 6.2,
            cloudcover: 88,
            solarradiation: 604,
            solarenergy: 2.2,
            uvindex: 6,
            severerisk: 10,
            conditions: 'Partially cloudy',
            icon: 'partly-cloudy-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '10:00:00',
            datetimeEpoch: 1723276800,
            temp: 75.1,
            feelslike: 75.1,
            humidity: 78.35,
            dew: 67.9,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2.9,
            windspeed: 1.1,
            winddir: 341.1,
            pressure: 1023,
            visibility: 6.2,
            cloudcover: 18.1,
            solarradiation: 359,
            solarenergy: 1.3,
            uvindex: 4,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '11:00:00',
            datetimeEpoch: 1723280400,
            temp: 76.9,
            feelslike: 76.9,
            humidity: 73.79,
            dew: 67.9,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2.7,
            windspeed: 4.7,
            winddir: 240,
            pressure: 1023,
            visibility: 6.2,
            cloudcover: 2.5,
            solarradiation: 870,
            solarenergy: 3.1,
            uvindex: 9,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '12:00:00',
            datetimeEpoch: 1723284000,
            temp: 78.7,
            feelslike: 78.7,
            humidity: 65.35,
            dew: 66.1,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2.7,
            windspeed: 2.2,
            winddir: 345.8,
            pressure: 1023,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 947,
            solarenergy: 3.4,
            uvindex: 9,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '13:00:00',
            datetimeEpoch: 1723287600,
            temp: 80.5,
            feelslike: 81.7,
            humidity: 54.32,
            dew: 62.5,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 3.8,
            windspeed: 2.2,
            winddir: 332.4,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 886,
            solarenergy: 3.2,
            uvindex: 9,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '14:00:00',
            datetimeEpoch: 1723291200,
            temp: 82.3,
            feelslike: 83.9,
            humidity: 54.57,
            dew: 64.3,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2.5,
            windspeed: 5.8,
            winddir: 190,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 792,
            solarenergy: 2.9,
            uvindex: 8,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '15:00:00',
            datetimeEpoch: 1723294800,
            temp: 84.1,
            feelslike: 86.4,
            humidity: 54.82,
            dew: 66.1,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2.7,
            windspeed: 3.4,
            winddir: 268.4,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 589,
            solarenergy: 2.1,
            uvindex: 6,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '16:00:00',
            datetimeEpoch: 1723298400,
            temp: 84.1,
            feelslike: 84.3,
            humidity: 45.36,
            dew: 60.7,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 1.6,
            windspeed: 4.7,
            winddir: 300,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 0.6,
            solarradiation: 380,
            solarenergy: 1.4,
            uvindex: 4,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '17:00:00',
            datetimeEpoch: 1723302000,
            temp: 84.1,
            feelslike: 86.4,
            humidity: 54.82,
            dew: 66.1,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2.2,
            windspeed: 6.9,
            winddir: 200,
            pressure: 1022,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 222,
            solarenergy: 0.8,
            uvindex: 2,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '18:00:00',
            datetimeEpoch: 1723305600,
            temp: 84.1,
            feelslike: 84.9,
            humidity: 48.34,
            dew: 62.5,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 2,
            windspeed: 6.9,
            winddir: 170,
            pressure: 1021,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 57,
            solarenergy: 0.2,
            uvindex: 1,
            severerisk: 3,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '19:00:00',
            datetimeEpoch: 1723309200,
            temp: 84.1,
            feelslike: 84.9,
            humidity: 48.34,
            dew: 62.5,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 1.3,
            windspeed: 5.8,
            winddir: 200,
            pressure: 1021,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 47,
            solarenergy: 0.2,
            uvindex: 0,
            severerisk: 30,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '20:00:00',
            datetimeEpoch: 1723312800,
            temp: 80.5,
            feelslike: 83.2,
            humidity: 65.55,
            dew: 67.9,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 1.3,
            windspeed: 1.1,
            winddir: 85.8,
            pressure: 1021,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 30,
            solarenergy: 0.1,
            uvindex: 0,
            severerisk: 10,
            conditions: 'Clear',
            icon: 'clear-day',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '21:00:00',
            datetimeEpoch: 1723316400,
            temp: 75.1,
            feelslike: 75.1,
            humidity: 78.35,
            dew: 67.9,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 1.8,
            windspeed: 1.1,
            winddir: 115.8,
            pressure: 1021,
            visibility: 6.2,
            cloudcover: 0,
            solarradiation: 4,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 3,
            conditions: 'Clear',
            icon: 'clear-night',
            stations: ['EDNY', 'AT546'],
            source: 'obs',
          },
          {
            datetime: '22:00:00',
            datetimeEpoch: 1723320000,
            temp: 78.3,
            feelslike: 78.3,
            humidity: 72.57,
            dew: 68.8,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 3.4,
            windspeed: 2.5,
            winddir: 143.2,
            pressure: 1020,
            visibility: 15,
            cloudcover: 0,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 5,
            conditions: 'Clear',
            icon: 'clear-night',
            stations: null,
            source: 'fcst',
          },
          {
            datetime: '23:00:00',
            datetimeEpoch: 1723323600,
            temp: 76.6,
            feelslike: 76.6,
            humidity: 79.43,
            dew: 69.7,
            precip: 0,
            precipprob: 0,
            snow: 0,
            snowdepth: 0,
            preciptype: null,
            windgust: 4,
            windspeed: 2.7,
            winddir: 145.9,
            pressure: 1020,
            visibility: 15,
            cloudcover: 0,
            solarradiation: 0,
            solarenergy: 0,
            uvindex: 0,
            severerisk: 5,
            conditions: 'Clear',
            icon: 'clear-night',
            stations: null,
            source: 'fcst',
          },
        ],
      },
    ],
    alerts: [
      {
        event: 'strong heat',
        headline: 'Official WARNING of STRONG HEAT',
        ends: '2024-08-11T19:00:00',
        endsEpoch: 1723395600,
        onset: '2024-08-10T11:00:00',
        onsetEpoch: 1723280400,
        id: '2.49.0.0.276.0.DWD.PVW.1723274940000.be9087a9-b09f-49b0-8cee-efd907690aba',
        language: 'en',
        link: 'https://dwd.de/warnungen',
        description:
          'The expected weather will bring a situation of strong heat stress. (level 1 of 3)\nHeight range: < 600 m',
      },
    ],
    stations: {
      '06258': {
        distance: 4463,
        latitude: 47.685,
        longitude: 9.441,
        useCount: 0,
        id: '06258',
        name: 'Friedrichshafen-Unterraderach',
        quality: 100,
        contribution: 0,
      },
    },
    currentConditions: {
      datetime: '21:50:00',
      datetimeEpoch: 1723319400,
      temp: 71.1,
      feelslike: 71.1,
      humidity: 86.7,
      dew: 67,
      precip: 0,
      precipprob: 0,
      snow: 0,
      snowdepth: 0,
      preciptype: null,
      windgust: null,
      windspeed: 3.3,
      winddir: 70,
      pressure: 1022,
      visibility: 6.2,
      cloudcover: 0,
      solarradiation: 0,
      solarenergy: 0,
      uvindex: 0,
      conditions: 'Clear',
      icon: 'clear-night',
      stations: ['06258', 'EDNY', 'LSZR'],
      source: 'obs',
      sunrise: '06:11:34',
      sunriseEpoch: 1723263094,
      sunset: '20:42:27',
      sunsetEpoch: 1723315347,
      moonphase: 0.19,
    },
  };

  it('should return true for valid weather data', () => {
    expect(isValidWeatherData(validWeatherJSON)).toBe(true);
  });

  it('should return false for invalid weather data with incorrect type', () => {
    const invalidWeatherData = { ...validWeatherJSON, resolvedAddress: 123 };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid weather data with missing property', () => {
    const { resolvedAddress, ...rest } = validWeatherJSON;
    const invalidWeatherData = { ...rest };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid nested property type', () => {
    const invalidWeatherData = {
      ...validWeatherJSON,
      days: validWeatherJSON.days.map((day) => ({ ...day, tempmax: '84.6' })),
    };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid nested property missing', () => {
    const invalidWeatherData = {
      ...validWeatherJSON,
      days: validWeatherJSON.days.map(({ tempmax, ...rest }) => ({ ...rest })),
    };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid nested array property type', () => {
    const invalidWeatherData = {
      ...validWeatherJSON,
      days: validWeatherJSON.days.map((day) => ({
        ...day,
        hours: day.hours.map((hour) => ({ ...hour, temp: '67.9' })),
      })),
    };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid nested array property missing', () => {
    const invalidWeatherData = {
      ...validWeatherJSON,
      days: validWeatherJSON.days.map((day) => ({
        ...day,
        hours: day.hours.map(({ temp, ...rest }) => ({ ...rest })),
      })),
    };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });
});
