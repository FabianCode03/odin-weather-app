import logo from '../img/weatherrino_logo.png';
import searchIcon from '../img/searchIcon.svg';

export function Header(): HTMLElement {
  // create elements
  const header = document.createElement('header');
  const logoContainer = document.createElement('div');
  const searchIconElement = document.createElement('img');
  const title = document.createElement('h1');

  // add content
  title.textContent = 'Weatherrhino';
  logoContainer.style.backgroundImage = `url(${logo})`;
  searchIconElement.src = searchIcon;
  searchIconElement.alt = 'Search icon';
  searchIconElement.classList.add('search-icon-container');

  // add classes
  header.classList.add('header');
  logoContainer.classList.add('logo-container');
  title.classList.add('title');

  // assemble
  header.appendChild(logoContainer);
  header.appendChild(title);
  header.appendChild(searchIconElement);

  return header;
}
