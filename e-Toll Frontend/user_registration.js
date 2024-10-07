
async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  document.getElementById('registerUserForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    postData('http://localhost:9000/register', { fullName, email, phoneNumber })
      .then(data => alert('User registered successfully!'))
      .catch(error => alert('Error registering user'));
  });