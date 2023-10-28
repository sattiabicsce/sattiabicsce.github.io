// JavaScript to handle hamburger menu toggle

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.getElementById('mainNav');

hamburgerMenu.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});

// JS for contact form
const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if (response.status == 200) {
        result.innerHTML = "Email Successfully Sent";
    } else {
        result.innerHTML = "Sorry, your email was not sent.";
    }
};

const getEmailResult = async () => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        return response;
    } catch (error) {
        console.error(error);
        document.getElementById("result").innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("contact-form").onsubmit = showEmailResult;

/*JS for Reviews
document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;
    const file = document.getElementById("file").value;

    // Validate form data
    if (name && rating && review) {
        // Construct the message
        const message = `Review Details:\n\nName: ${name}\nRating: ${rating}\nReview: ${review}\nFile: ${file ? file : "Not provided"}`;

        // Show success message
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // Display form data in the success message
        successMessage.textContent = message;

        // Reset the form
        document.getElementById("review-form").reset();
    } else {
        alert("Please fill out all required fields.");
    }
});

Try copy and pasting to another js file
*/
