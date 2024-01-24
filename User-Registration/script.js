        function validateForm() {
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var url = document.getElementById("url").value;
            var mobile = document.getElementById("mobile").value;
            var search = document.getElementById("search").value;
            var dob = document.getElementById("dob").value;
            var time = document.getElementById("time").value;
            var salary = document.getElementById("salary").value;
            var password = document.getElementById("password").value;

            // Regular expressions for validation
            var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            var mobileRegex = /^[0-9]{2} [0-9]{10}$/;
            var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            // validation
            if (username === "") {
                alert("Username is required.");
            } else if (!emailRegex.test(email)) {
                alert("Invalid email format");
            } else if (!/^https?:\/\/.*/.test(url)) {
                alert("Invalid URL format");
            } else if (!mobileRegex.test(mobile)) {
                alert("Invalid mobile number format");
            } else if (search === "") {
                alert("Search field cannot be empty");
            } else if (dob === "") {
                alert("Date of Birth is required");
            } else if (time === "") {
                alert("Time is required");
            } else if (salary === "") {
                alert("Salary is required");
            } else if (!passwordRegex.test(password)) {
                alert("Invalid password format. Password must meet all rules.");
            } else {
                alert("Form submitted successfully!");
            }
        }
   