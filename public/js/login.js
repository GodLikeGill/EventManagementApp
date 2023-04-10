const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  if (emailValue === storedEmail && passwordValue === storedPassword) {
    window.location.href = 'main.html';
  } else {
    alert('Incorrect email or password. Please try again.');
  }
});
