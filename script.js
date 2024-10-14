document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
  
    // Simple form validation (additional checks can be added as needed)
    if (!username || !email || !password || !age) {
      alert('All fields are required!');
      return;
    }
  
    // Display a result message after form submission
    const resultMessage = `Registration successful for:
    Username: ${username}
    Email: ${email}
    Age: ${age}`;
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultMessage;
    resultElement.classList.add('visible');  // Adds animation effect
  });
  