// JavaScript to handle hamburger menu toggle

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.getElementById('mainNav');

hamburgerMenu.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});

document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;
    const file = document.getElementById("file").value;

    // Validate form data
    if (name && rating && review) {
        /*
        // Construct the message
        const message = `Review Details: \nName: ${name} \nRating: ${rating} \nReview: ${review} \nFile: ${file ? file : "Not provided"}`;

        // Show success message
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // Display form data in the success message
        successMessage.textContent = message;

        // Reset the form
        document.getElementById("review-form").reset();
        */

        const message_array = [
            'Review Details:', 
            `Name: ${name}`,
            `Rating: ${rating}`,
            `Review: ${review}`,
            `File: ${file ? file: "Not Provided"}`
        ]

        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        while (successMessage.firstChild) {
            successMessage.removeChild(successMessage.firstChild);
        }

        for (let a = 0; a < 5; a++) {
            var p = document.createElement('p');
            p.textContent = message_array[a];
            successMessage.appendChild(p);
        }
    } else {
        alert("Please fill out all required fields.");
    }
});
