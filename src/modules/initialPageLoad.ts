import { Header } from '../components/Header';
import { Body } from '../components/Body';

export function initialPageLoad(): { header: HTMLElement; body: HTMLElement } {
  const app = document.getElementById('app');
  if (app === null) {
    throw new Error('Root element not found');
  }

  //   create elements
  const header = Header();
  const body = Body();

  app.appendChild(header);
  app.appendChild(body);

  return { header, body };
}
