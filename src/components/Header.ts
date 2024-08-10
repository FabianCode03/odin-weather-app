export function Header() {
  // create elements
  const header = document.createElement('header');
  const title = document.createElement('h1');

  // add content
  title.textContent = 'Wheatherrino';

  // add classes
  header.classList.add('header');
  title.classList.add('title');

  // assemble
  header.appendChild(title);

  return header;
}
