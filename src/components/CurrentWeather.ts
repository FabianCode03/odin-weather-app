import { Card } from './Card';
import type { WeatherData } from '../types/weatherTypes';
import { weatherIcons } from '../img/weather_Icons/weatherIcons';
import { toCamelCase } from '../utils/toCamelCase';

export function CurrentWeather(weather: WeatherData): HTMLElement {
  //  create elements
  const cardBody = document.createElement('div');
  const tempContainer = document.createElement('div');
  const currentTemp = document.createElement('h3');
  const tempUnit = document.createElement('span');
  const weatherIcon = document.createElement('img');
  const conditions = document.createElement('p');
  const preciptype = document.createElement('p');
  const precipprob = document.createElement('p');
  const humidity = document.createElement('p');

  // add content
  currentTemp.textContent = `${weather.currentConditions.temp.toFixed(0)}°`;
  tempUnit.textContent = `${weather.tempUnit.slice(1)}`;
  conditions.textContent = weather.currentConditions.conditions;
  weatherIcon.src = weatherIcons.clearDay;

  // Dynamically assign the weather icon based on conditions
  const condition = toCamelCase(weather.currentConditions.icon);
  weatherIcon.src = weatherIcons[condition];

  // add classes
  cardBody.classList.add('card-body', 'current-weather-body');
  tempContainer.classList.add('temp-container');
  currentTemp.classList.add('current-temp');
  tempUnit.classList.add('temp-unit');
  weatherIcon.classList.add('weather-icon');
  conditions.classList.add('conditions');
  preciptype.classList.add('preciptype');
  precipprob.classList.add('precipprob');
  humidity.classList.add('humidity');

  // assemble
  cardBody.appendChild(weatherIcon);
  tempContainer.appendChild(currentTemp);
  tempContainer.appendChild(tempUnit);
  cardBody.appendChild(tempContainer);
  cardBody.appendChild(conditions);
  // cardBody.appendChild(preciptype);
  // cardBody.appendChild(precipprob);
  // cardBody.appendChild(humidity);

  return Card('Current Weather', weather.currentConditions.datetime, cardBody);
}
