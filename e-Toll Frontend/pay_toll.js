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

    document.getElementById('payTollForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const vehicleNumber = document.getElementById('vehicleNumberPay').value;
    const tollAmount = document.getElementById('tollAmount').value;

    postData('http://localhost:9000/payToll', { vehicleNumber, tollAmount })
      .then(data => alert('Toll paid successfully!'))
      .catch(error => alert('Error paying toll'));
  });