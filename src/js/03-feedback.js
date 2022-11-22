import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedBackFormRef = document.querySelector('.feedback-form');

feedBackFormRef.addEventListener('submit', onFormSubmit);
feedBackFormRef.addEventListener('input', throttle(onDataInput, 500));

getDataFunction();

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.email.value;
  const message = event.target.message.value;

  if (email === '' || message === '') {
    alert('Заполни форму, балда!');
  } else {
    console.log({ email, message });
  }
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onDataInput(event) {
  let getItemsEl = localStorage.getItem(LOCALSTORAGE_KEY);
  getItemsEl = getItemsEl ? JSON.parse(getItemsEl) : {};
  getItemsEl[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(getItemsEl));
}

function getDataFunction() {
  let getItemsEl = localStorage.getItem(LOCALSTORAGE_KEY);
  if (getItemsEl) {
    getItemsEl = JSON.parse(getItemsEl);
    Object.entries(getItemsEl).forEach(([name, value]) => {
      feedBackFormRef.elements[name].value = value;
    });
  }
}