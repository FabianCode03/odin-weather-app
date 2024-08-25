export function Modal(onSubmit: (city: string) => void): HTMLElement {
  // create elements
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const closeButton = document.createElement('span');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const submitButton = document.createElement('button');

  // add content
  closeButton.innerHTML = '&times;';
  input.type = 'text';
  input.placeholder = 'Enter city name';
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  // add classes
  modal.classList.add('modal');
  modalContent.classList.add('modal-content');
  closeButton.classList.add('close-button');
  form.classList.add('modal-form');
  input.classList.add('modal-input');
  submitButton.classList.add('modal-submit-button');

  // assemble
  form.appendChild(input);
  form.appendChild(submitButton);
  modalContent.appendChild(closeButton);
  modalContent.appendChild(form);
  modal.appendChild(modalContent);

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // add event listener
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim() !== '') {
      onSubmit(input.value.trim());
      modal.style.display = 'none';

      // Clear the input field
      input.value = '';
    }
  });

  return modal;
}
