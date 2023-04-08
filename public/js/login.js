const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === 'jatin@gmail.com' && password === 'jatin') {
    window.location.href = 'main.html';
  } else {
    alert('Incorrect username or password. Please try again.');
  }
});