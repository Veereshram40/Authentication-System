document.getElementById("registerBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("register.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  })
    .then(res => res.text())
    .then(data => {
      alert(data === "success" ? "Registration successful!" : "Registration failed!");
    });
});

document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("login.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  })
    .then(res => res.text())
    .then(data => {
      if (data === "success") {
        alert("Login successful!");
      } else if (data === "invalid") {
        alert("Invalid password!");
      } else {
        alert("Email not found!");
      }
    });
});