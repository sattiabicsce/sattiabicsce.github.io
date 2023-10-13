class Toy {
    constructor(name, price, ageRange, rating, imageFileName) {
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.imageFileName = imageFileName;
    }
    
    getDetails() {
        return `${this.name}<br><strong>Price:</strong> ${this.price}<br><strong>Age Range:</strong> ${this.ageRange}<br><strong>Rating:</strong> ${this.rating}`;
    }
    
    getToyItem() {
        return {
            name: this.name,
            price: this.price,
            ageRange: this.ageRange,
            rating: this.rating,
            imageFileName: this.imageFileName
        };
    }
}

const toys = [
    new Toy('Truck', '$17.99', '3-8 years', '4.5', 'truck.jpg'),
    new Toy('Train', '$29.99', '5-10 years', '4.2', 'train.jpg'),
    new Toy('Teddy Bear', '$9.99', '2-6 years', '4.7', 'teddy.png'),
    new Toy('Robot', '$24.99', '4-9 years', '4.3', 'robot.jpg'),
    new Toy('Monkey', '$14.99', '6-8 years', '4.8', 'monkey.jpg'),
    new Toy('Rubber Duck', '$9.99', '1-5 years', '4.0', 'duck.jpg')
];

const container = document.getElementById('toy-container');

function createToyElement(toy) {
    const toyDiv = document.createElement('div');
    toyDiv.className = 'toy';
    const img = document.createElement('img');
    img.src = `images/${toy.imageFileName}`;
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'toy-details';
    detailsDiv.innerHTML = toy.getDetails();
    toyDiv.appendChild(img);
    toyDiv.appendChild(detailsDiv);
    return toyDiv;
}

function displayToys(toys) {
    toys.forEach(toy => {
        const toyElement = createToyElement(toy);
        container.appendChild(toyElement);
    });
}

displayToys(toys);
