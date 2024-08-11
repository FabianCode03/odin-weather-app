import './style.css';
import { Header } from './components/Header';
import { getWeather } from './modules/getWeather';

const app = document.getElementById('app');
const header = Header();

if (app) {
  app.appendChild(header);
}
