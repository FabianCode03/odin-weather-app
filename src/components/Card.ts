export function Card(title: string, infoCorner: string, body: HTMLElement): HTMLElement {
  // create elements
  const card = document.createElement('div');
  const cardHeader = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardInfoCorner = document.createElement('div');
  const cardBody = document.createElement('div');

  // add content
  cardTitle.textContent = title;
  cardInfoCorner.textContent = infoCorner;
  cardBody.appendChild(body);

  // add classes
  card.classList.add('card');
  cardHeader.classList.add('card-header');
  cardTitle.classList.add('card-title');
  cardInfoCorner.classList.add('card-info-corner');
  cardBody.classList.add('card-body');

  // assemble
  cardHeader.appendChild(cardTitle);
  cardHeader.appendChild(cardInfoCorner);
  card.appendChild(cardHeader);

  card.appendChild(cardBody);

  return card;
}
