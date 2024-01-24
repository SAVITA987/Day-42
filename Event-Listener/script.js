document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
    }
});

function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var age = document.getElementById('age').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    if (age < 18) {
        alert('You must be at least 18 years old.');
        return false;
    }

    return true; 
}
