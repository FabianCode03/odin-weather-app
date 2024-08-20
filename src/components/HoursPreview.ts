import type { Hour } from '../types/weatherTypes';
import { Card } from './Card';
import { HourColumn } from './HourColumn';

export function HoursPreview(hours: Hour[]): HTMLElement {
  //   create elements
  const cardBody = document.createElement('div');

  //   set classes
  cardBody.classList.add('hours-preview-body');

  //   create hour rows
  const hourRows = hours.map((hour) => HourColumn(hour));

  //   assemble
  cardBody.append(...hourRows);
  cardBody.lastElementChild?.classList.remove('separator');
  const hoursPreview = Card('Hours Preview', '⌚', cardBody);
  hoursPreview.id = 'hours-preview';
  return hoursPreview;
}
