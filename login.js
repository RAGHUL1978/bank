document.querySelector('LOGIN 2').addEventListener('submit', function(event) {
    alert('Form submitted!');
});
document.querySelector('LOGIN 2').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    }
});
const passwordField = document.getElementById('password');
const togglePassword = document.createElement('button');
togglePassword.textContent = 'Show Password';
togglePassword.type = 'button';

togglePassword.addEventListener('click', function() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.textContent = 'Hide Password';
    } else {
        passwordField.type = 'password';
        togglePassword.textContent = 'Show Password';
    }
});

passwordField.parentNode.appendChild(togglePassword);
const usernameField = document.getElementById('username');
const charCounter = document.createElement('span');
charCounter.textContent = '0/20';
usernameField.parentNode.appendChild(charCounter);

usernameField.addEventListener('input', function() {
    charCounter.textContent = `${usernameField.value.length}/20`;
});
