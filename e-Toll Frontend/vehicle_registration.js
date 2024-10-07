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

  document.getElementById('registerVehicleForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const ownerName = document.getElementById('ownerName').value;
    const vehicleNumber = document.getElementById('vehicleNumber').value;

    postData('http://localhost:9000/vehicle', { ownerName, vehicleNumber })
      .then(data => alert('Vehicle registered successfully!'))
      .catch(error => alert('Error registering vehicle'));
  });