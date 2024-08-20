import type { Day } from '../types/weatherTypes';
import { weatherIcons } from '../img/weather_Icons/weatherIcons';
import { getDayName } from '../utils/getDayName';
import { toCamelCase } from '../utils/toCamelCase';
// import { getPrecipEmoji } from '../utils/getPrecipEmoji';

export function DayColumn(day: Day): HTMLElement {
  // create elements
  const column = document.createElement('div');
  const dayName = document.createElement('div');
  const dayDate = document.createElement('div');
  const icon = document.createElement('img');
  //   const temp = document.createElement('div');
  //   const conditions = document.createElement('div');
  //   const precipContainer = document.createElement('div');
  //   const precipIcon = document.createElement('div');
  //   const precipValue = document.createElement('div');

  // set classes
  column.classList.add('day-column');
  dayDate.classList.add('day-date');
  dayName.classList.add('day-name');
  icon.classList.add('day-icon');
  //   temp.classList.add('day-temp');
  //   icon.classList.add('day-icon');
  //   conditions.classList.add('day-conditions');
  //   precipContainer.classList.add('day-precip-container');
  //   precipIcon.classList.add('day-precip-icon');
  //   precipValue.classList.add('day-precip-value');

  // add content
  dayName.textContent = getDayName(day.datetime);
  dayDate.textContent = day.datetime.slice(0, 7);
  icon.src = weatherIcons[toCamelCase(day.icon)];
  //   temp.textContent = `${day.tempHigh.toFixed(0)}°/${day.tempLow.toFixed(0)}°`;
  //   conditions.textContent = day.conditions;
  //   precipIcon.textContent = getPrecipEmoji(day.preciptype);
  //   precipValue.textContent = `${day.precipprob.toFixed(0)}%`;

  // append elements
  //   precipContainer.appendChild(precipValue);
  //   precipContainer.appendChild(precipIcon);
  column.appendChild(dayName);
  column.appendChild(dayDate);
  column.appendChild(icon);
  //   column.appendChild(temp);
  // column.appendChild(conditions);
  //   column.appendChild(precipContainer);

  return column;
}
