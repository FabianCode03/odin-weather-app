export function InfoRow(title: string, info: string | number): HTMLElement {
  // create elements
  const infoRow = document.createElement('div');
  const infoTitle = document.createElement('p');
  const infoContent = document.createElement('p');

  // add content
  infoTitle.textContent = title;
  infoContent.textContent = info.toString();

  // add classes
  infoRow.classList.add('info-row', 'separator');
  infoTitle.classList.add('info-title');
  infoContent.classList.add('info-content');

  // assemble
  infoRow.appendChild(infoTitle);
  infoRow.appendChild(infoContent);

  return infoRow;
}
