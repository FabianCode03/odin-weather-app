import type { Hour } from '../types/weatherTypes';
import { Card } from './Card';
import { HourColumn } from './HourColumn';

export function HourlyWeather(hours: Hour[]): HTMLElement {
  //   create elements
  const cardBody = document.createElement('div');

  //   set classes
  cardBody.classList.add('hourly-weather-body');

  //   create hour rows
  const hourRows = hours.map((hour) => HourColumn(hour));

  //   assemble
  cardBody.append(...hourRows);
  const hoursPreview = Card('Hourly Weather', '⌚', cardBody);
  hoursPreview.id = 'hours-preview';
  return hoursPreview;
}
