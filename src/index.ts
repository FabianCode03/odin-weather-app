import './style.css';
import { Header } from './components/Header';

const app = document.getElementById('app');
const header = Header();

if (app) {
  app.appendChild(header);
}
