const express = require('express');
const app = express();

const carsData = require('./data.json');

app.use(express.static('public'));

app.get('/api/cars', (req, res) => {
  cars.json(cars);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});