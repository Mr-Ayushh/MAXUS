document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Perform validation and submit form data to register.php using AJAX
  // Example validation: ensure passwords match
  if (password === confirmPassword) {
    var formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("Registration Successful!");
        window.location.href = "login.html"; // Redirect to login page
      } else {
        alert("Registration Failed. Please try again.");
      }
    };
    xhr.send(formData);
  } else {
    alert("Passwords do not match. Please try again.");
  }
});
