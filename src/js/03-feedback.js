import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

feedbackForm.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', throttle(onTextAreaInput, 500));
email.addEventListener('input', throttle(onEmailInput, 500));

populateTextArea();
populateEmailInput();

function onFormSubmit(evt) {
  evt.preventDefault();

  const date = {
    email: email.value,
    massage: textArea.value,
  };
  console.log(date);

  evt.currentTarget.reset();
  localStorage.clear();
}

function onTextAreaInput(evt) {
  const feedback = evt.target.value;
  localStorage.setItem('feedback-msg', feedback);
}

function onEmailInput(evt) {
  const email = evt.target.value;
  localStorage.setItem('current-email', email);
}

function populateTextArea() {
  const savedMassage = localStorage.getItem('feedback-msg');
  if (savedMassage) {
    textArea.value = savedMassage;
  }
}

function populateEmailInput() {
  const savedEmail = localStorage.getItem('current-email');
  if (savedEmail) {
    email.value = savedEmail;
  }
}
