import './style.css';
import { Header } from './components/Header';
import { getWeather } from './modules/getWeather';

const app = document.getElementById('app');
const header = Header();

if (app) {
  app.appendChild(header);
}

// getWeather('friedrichshafen')
//   .then((msg) => console.log(msg))
//   .catch((err) => console.error(err.message));
