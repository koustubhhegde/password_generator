
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const weak = document.getElementById('weak');
    const moderate = document.getElementById('moderate');
    const strong = document.getElementById('strong');
    const loginBtn = document.getElementById('loginBtn');

    weak.classList.remove('active');
    moderate.classList.remove('active');
    strong.classList.remove('active');

    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
    const mediumPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (/^[!@#\$%\^&\*]/.test(password)) {
        message.textContent = 'Password should not start with special characters';
        message.style.color = 'red';
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
        return;
    }

    if (password.length === 0) {
        message.textContent = '';
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
        return;
    }

    if (password.length < 8) {
        message.textContent = 'Password must be at least 8 characters long';
        message.style.color = 'red';
        weak.classList.add('active');
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
    } else if (strongPasswordPattern.test(password)) {
        message.textContent = 'Strong Password';
        message.style.color = 'green';
        strong.classList.add('active');
        loginBtn.disabled = false;
        loginBtn.classList.add('active');
    } else if (mediumPasswordPattern.test(password)) {
        message.textContent = 'Moderate Password';
        message.style.color = 'orange';
        moderate.classList.add('active');
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
    } else {
        message.textContent = 'Weak Password';
        message.style.color = 'red';
        weak.classList.add('active');
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
    }
}

function login() {
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    if (password) {
        loginMessage.textContent = 'Login Successful!';
        loginMessage.style.color = 'green';
    } else {
        loginMessage.textContent = 'Please enter a password.';
        loginMessage.style.color = 'red';
    }
}
