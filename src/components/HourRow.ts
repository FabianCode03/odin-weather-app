import type { Hour } from '../types/weatherTypes';
import { weatherIcons } from '../img/weather_Icons/weatherIcons';
import { toCamelCase } from '../utils/toCamelCase';
import { getPrecipEmoji } from '../utils/getPrecipEmoji';

export function HourRow(hour: Hour): HTMLElement {
  // create elements
  const row = document.createElement('div');
  const time = document.createElement('div');
  const temp = document.createElement('div');
  const icon = document.createElement('img');
  const conditions = document.createElement('div');
  const precipContainer = document.createElement('div');
  const precipIcon = document.createElement('div');
  const precipValue = document.createElement('div');

  // set classes
  row.classList.add('hour-row', 'separator');
  time.classList.add('hour-time');
  temp.classList.add('hour-temp');
  icon.classList.add('hour-icon');
  conditions.classList.add('hour-conditions');
  precipContainer.classList.add('hour-precip-container');
  precipIcon.classList.add('hour-precip-icon');
  precipValue.classList.add('hour-precip-value');

  // add content
  time.textContent = hour.datetime;
  temp.textContent = `${hour.temp.toFixed(0)}°`;
  icon.src = weatherIcons[toCamelCase(hour.icon)];
  conditions.textContent = hour.conditions;
  precipIcon.textContent = getPrecipEmoji(hour.preciptype);
  precipValue.textContent = `${hour.precipprob.toFixed(0)}%`;

  // append elements
  precipContainer.appendChild(precipValue);
  precipContainer.appendChild(precipIcon);
  row.appendChild(time);
  row.appendChild(temp);
  row.appendChild(icon);
  row.appendChild(conditions);
  row.appendChild(precipContainer);

  return row;
}
