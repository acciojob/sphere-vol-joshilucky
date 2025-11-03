function volume_sphere() {
  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);

  // Validate input: must be a non-negative number
  if (isNaN(radius) || radius < 0) {
    document.getElementById('volume').value = 'NaN';
    return;
  }

  // Volume of sphere formula: (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display rounded value (4 decimal places)
  document.getElementById('volume').value = volume.toFixed(4);
}

// Optional: Prevent form from refreshing on submit
document.getElementById('MyForm').addEventListener('submit', function (e) {
  e.preventDefault();
  volume_sphere();
});
