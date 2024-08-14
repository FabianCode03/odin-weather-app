import { Card } from './Card';
import type { WeatherData } from '../types/weatherTypes';
import { Hero } from './Hero';

export function CurrentWeather(weather: WeatherData): HTMLElement {
  //  create elements
  const cardBody = document.createElement('div');
  const preciptype = document.createElement('p');
  const precipprob = document.createElement('p');
  const humidity = document.createElement('p');

  // add classes
  cardBody.classList.add('card-body', 'current-weather-body');
  preciptype.classList.add('preciptype');
  precipprob.classList.add('precipprob');
  humidity.classList.add('humidity');

  // create hero element using Hero component
  const hero = Hero({
    address: weather.resolvedAddress,
    weatherIcon: weather.currentConditions.icon,
    currentTemp: weather.currentConditions.temp,
    tempUnit: weather.tempUnit,
    conditions: weather.currentConditions.conditions,
  });

  cardBody.appendChild(hero);

  const currentWeather = Card(
    'Current Weather',
    weather.currentConditions.datetime.concat(' 🌎'),
    cardBody,
  );
  currentWeather.id = 'current-weather';

  return currentWeather;
}
