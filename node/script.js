document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the server
    fetch('/api/cars')
      .then(response => response.json())
      .then(cars => {
        const container = document.getElementById('data-container');
  
        // Loop through the array of cars and create HTML elements to display them
        cars.forEach(car => {
          const carCard = document.createElement('div');
          carCard.classList.add('car-card');
  
          // Create image element
          const image = document.createElement('img');
          image.src = car.image;
          image.alt = `${car.brand} ${car.model}`;
          carCard.appendChild(image);
  
          // Create car details element
          const details = document.createElement('div');
          details.classList.add('car-details');
  
          // Populate car details
          details.innerHTML = `
            <h2>${car.brand} ${car.model}</h2>
            <p><strong>Year:</strong> ${car.year}</p>
            <p><strong>Color:</strong> ${car.color}</p>
            <p><strong>Features:</strong> ${car.features.join(', ')}</p>
          `;
  
          carCard.appendChild(details);
          container.appendChild(carCard);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  