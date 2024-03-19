// script.js

// const registeredUsers = [
//   { email: "user1@example.com", password: "password1" },
//   { email: "user2@example.com", password: "password2" },
// ];

function validateLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("loginErrorMsg");

  const user = registeredUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    errorMessage.textContent = "Invalid email or password.";
    errorMessage.style.display = "block"; // Show error message
    return false;
  }

  errorMessage.textContent = "";
  errorMessage.style.display = "none";

  // Redirect to home page after successful login
  window.location.href = "home.html";
  return false; // Prevent form submission
}

function validateSignupForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("cpassword").value;
  const errorMessage = document.getElementById("signupErrorMessage");

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
    errorMessage.style.display = "block"; // Show error message
    return false;
  }

  // Check if email already exists
  if (registeredUsers.some((user) => user.email === email)) {
    errorMessage.textContent = "Email already exists.";
    errorMessage.style.display = "block"; // Show error message
    return false;
  }

  // Redirect to login page after successful signup
  window.location.href = "login.html";
  return false; // Prevent form submission
}
