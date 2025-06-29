function login() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      // Simple check: hardcoded values
      const correctUsername = "admin";
      const correctPassword = "12345";

      if (username === correctUsername && password === correctPassword) {
        document.getElementById("message").textContent = "Login successful!";
        document.getElementById("message").style.color = "green";
      } else {
        document.getElementById("message").textContent = "Invalid credentials.";
        document.getElementById("message").style.color = "red";
      }
    }