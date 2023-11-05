const express = require('express');
const app = express();

const cars = [
  {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Blue',
    features: ['GPS', 'Bluetooth', 'Backup Camera'],
    image: 'https://example.com/toyota_corolla.jpg'
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2019,
    color: 'Red',
    features: ['Leather Seats', 'Navigation System', 'Keyless Entry'],
    image: 'https://example.com/ford_mustang.jpg'
  },
  {
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    color: 'Silver',
    features: ['Apple CarPlay', 'Lane Departure Warning', 'Sunroof'],
    image: 'https://example.com/honda_civic.jpg'
  },
  {
    brand: 'Chevrolet',
    model: 'Malibu',
    year: 2018,
    color: 'White',
    features: ['Heated Seats', 'Remote Start', 'Blind Spot Monitoring'],
    image: 'https://example.com/chevrolet_malibu.jpg'
  },
  {
    brand: 'Nissan',
    model: 'Altima',
    year: 2017,
    color: 'Black',
    features: ['Push Button Start', 'Adaptive Cruise Control', 'Rear Cross Traffic Alert'],
    image: 'https://example.com/nissan_altima.jpg'
  }
];

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});