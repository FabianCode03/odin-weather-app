import './style.css';
import { Header } from './components/Header';
import { Card } from './components/Card';

const app = document.getElementById('app');
const header = Header();
const cardBodyExample = document.createElement('div');
cardBodyExample.textContent = 'This is an example card body.';

const card = Card('Current Weather', '12:52', cardBodyExample);

if (app !== null) {
  app.appendChild(header);
  app.appendChild(card);
}
