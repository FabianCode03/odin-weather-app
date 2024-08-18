export function InfoRow(title: string, info: string | number, prependingIcon: string | null): HTMLElement {
  // create elements
  const infoRow = document.createElement('div');
  const infoTitle = document.createElement('p');
  const infoContent = document.createElement('p');
  const icon = document.createElement('img');

  // add content
  infoTitle.textContent = title;
  infoContent.textContent = info.toString();

  // add classes
  infoRow.classList.add('info-row', 'separator');
  infoTitle.classList.add('info-title');
  infoContent.classList.add('info-content');
  icon.classList.add('info-icon');

  // assemble
  if (prependingIcon !== null) {
    icon.src = prependingIcon;
    console.log(icon.src);

    infoRow.appendChild(icon);
  }
  infoRow.appendChild(infoTitle);
  infoRow.appendChild(infoContent);

  return infoRow;
}
