const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  localStorage.setItem('email', emailValue);
  localStorage.setItem('password', passwordValue);

  window.location.href = 'main.html';
});