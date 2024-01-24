
document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submitBtn');

    submitButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return; 
        }
        var formData = {
            name: name,
            email: email,
            password: password
        };
        console.log('Form Data:', formData);
        alert('Form submitted successfully!');
    });
});

