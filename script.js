document.querySelector('form').addEventListener('submit', function(e) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;
    var phone = document.getElementById('phone').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        e.preventDefault();  // Prevent form submission
        alert("Passwords do not match!");
        return;
    }

    // Check if phone number is valid (10 digits)
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        e.preventDefault();  // Prevent form submission
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
});