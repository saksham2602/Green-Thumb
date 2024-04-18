document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const signupLink = document.getElementById('signup-link');

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform login validation and submit data to backend
        // Redirect user to index.html upon successful login
        window.location.href = 'index.html';
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform signup validation and submit data to backend
        // Redirect user to index.html upon successful signup
        window.location.href = 'index.html';
    });
});
