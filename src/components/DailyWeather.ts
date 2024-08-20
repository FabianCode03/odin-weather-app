import type { Day } from '../types/weatherTypes';
import { Card } from './Card';
import { DayColumn } from './DayColumn';

export function DailyWeather(days: Day[]): HTMLElement {
  //   create elements
  const cardBody = document.createElement('div');

  //   set classes
  cardBody.classList.add('daily-weather-body');

  //   create day rows
  const dayRows = days.map((day) => DayColumn(day));

  if (dayRows.length > 0 && dayRows[0].firstElementChild !== null) {
    dayRows[0].firstElementChild.textContent = 'Today';
  }

  //   assemble
  cardBody.append(...dayRows);
  cardBody.lastElementChild?.classList.remove('separator');
  const daysPreview = Card('Daily Weather', '📅', cardBody);
  daysPreview.id = 'daily-weather';
  return daysPreview;
}
