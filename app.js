document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const user = { name, email, password };

    // Add user to local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Send user data via AJAX POST
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('User registered successfully');
        }
    };
    xhr.send(JSON.stringify(user));

    // Redirect to new page to display data
    window.location.href = 'users.html';
});
