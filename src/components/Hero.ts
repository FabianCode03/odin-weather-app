import { weatherIcons } from '../img/weather_Icons/weatherIcons';
import { toCamelCase } from '../utils/toCamelCase';

interface HeroProps {
  address: string;
  currentTemp: number;
  tempUnit: string;
  weatherIcon: string;
  conditions: string;
}

export function Hero({
  address,
  weatherIcon,
  currentTemp,
  tempUnit,
  conditions,
}: HeroProps): HTMLElement {
  const hero = document.createElement('div');
  const addressElement = document.createElement('p');
  const weatherIconElement = document.createElement('img');
  const temperatureElement = document.createElement('p');
  const tempUnitElement = document.createElement('span');
  const tempContainer = document.createElement('div');
  const conditionsElement = document.createElement('p');

  // add content
  weatherIconElement.src = weatherIcons[toCamelCase(weatherIcon)];
  addressElement.textContent = address;
  temperatureElement.textContent = `${currentTemp.toFixed(0)}°`;
  tempUnitElement.textContent = tempUnit.slice(1);
  conditionsElement.textContent = conditions;

  // add classes
  hero.classList.add('current-weather-hero', 'separator');
  addressElement.classList.add('address');
  weatherIconElement.classList.add('weather-icon');
  temperatureElement.classList.add('current-temp');
  tempUnitElement.classList.add('temp-unit');
  tempContainer.classList.add('temp-container');
  conditionsElement.classList.add('conditions');

  // assemble
  tempContainer.appendChild(temperatureElement);
  tempContainer.appendChild(tempUnitElement);

  hero.appendChild(weatherIconElement);
  hero.appendChild(tempContainer);
  hero.appendChild(addressElement);
  hero.appendChild(conditionsElement);

  return hero;
}
