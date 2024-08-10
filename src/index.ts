import './style.css';
import exampleModule from './modules/exampleModule';

const testTitle = 'Template working!';
const testModule = exampleModule('Hello, world!');

const titleElement = document.createElement('h1');
titleElement.textContent = testTitle;
titleElement.classList.add('title');

const moduleElement = document.createElement('p');
moduleElement.textContent = testModule;
moduleElement.classList.add('module');

document.body.appendChild(titleElement);
document.body.appendChild(moduleElement);
