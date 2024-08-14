import { Card } from './Card';
import type { WeatherData } from '../types/weatherTypes';
import { weatherIcons } from '../img/weather_Icons/weatherIcons';
import { toCamelCase } from '../utils/toCamelCase';

export function CurrentWeather(weather: WeatherData): HTMLElement {
  //  create elements
  const cardBody = document.createElement('div');
  const currentTemp = document.createElement('h3');
  const weatherIcon = document.createElement('img');
  const conditions = document.createElement('p');
  const preciptype = document.createElement('p');
  const precipprob = document.createElement('p');
  const humidity = document.createElement('p');

  // add content
  currentTemp.textContent = `${weather.currentConditions.temp} ${weather.tempUnit}`;
  conditions.textContent = weather.currentConditions.conditions;
  weatherIcon.src = weatherIcons.clearDay;

  // Dynamically assign the weather icon based on conditions
  const condition = toCamelCase(weather.currentConditions.icon);
  weatherIcon.src = weatherIcons[condition];

  // add classes
  cardBody.classList.add('card-body');
  currentTemp.classList.add('current-temp');
  weatherIcon.classList.add('weather-icon');
  conditions.classList.add('conditions');
  preciptype.classList.add('preciptype');
  precipprob.classList.add('precipprob');
  humidity.classList.add('humidity');

  // assemble
  cardBody.appendChild(weatherIcon);
  cardBody.appendChild(currentTemp);
  cardBody.appendChild(conditions);
  // cardBody.appendChild(weatherIcon);
  // cardBody.appendChild(preciptype);
  // cardBody.appendChild(precipprob);
  // cardBody.appendChild(humidity);

  return Card('Current Weather', weather.currentConditions.datetime, cardBody);
}
