function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const weak = document.getElementById('weak');
    const moderate = document.getElementById('moderate');
    const strong = document.getElementById('strong');
    const loginBtn = document.getElementById('loginBtn');
    const lockIndicator = document.getElementById('lock-indicator');

    weak.classList.remove('active');
    moderate.classList.remove('active');
    strong.classList.remove('active');

    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
    const mediumPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (/^[!@#\$%\^&\*]/.test(password)) {
        message.textContent = 'Password should not start with special characters';
        message.style.color = 'red';
        lockIndicator.textContent = '🔓'; // Open lock
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
        return;
    }

    if (password.length === 0) {
        message.textContent = '';
        lockIndicator.textContent = '🔓'; // Default open lock
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
        return;
    }

    if (password.length < 8) {
        message.textContent = 'Password must be at least 8 characters long';
        message.style.color = 'red';
        lockIndicator.textContent = '🔓';
        weak.classList.add('active');
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
    } else if (strongPasswordPattern.test(password)) {
        message.textContent = 'Strong Password';
        message.style.color = 'green';
        lockIndicator.textContent = '🔒'; // Fully locked
        strong.classList.add('active');
        loginBtn.disabled = false;
        loginBtn.classList.add('active');
    } else if (mediumPasswordPattern.test(password)) {
        message.textContent = 'Moderate Password';
        message.style.color = 'orange';
        lockIndicator.textContent = '🟡'; // Half-locked
        moderate.classList.add('active');
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
    } else {
        message.textContent = 'Weak Password';
        message.style.color = 'red';
        lockIndicator.textContent = '🔓'; // Open lock
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

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
