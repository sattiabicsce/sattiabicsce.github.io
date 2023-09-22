const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");
const exercise1Content = document.getElementById("exercise1-content");
const exercise2Content = document.getElementById("exercise2-content");
const exercise1Button = document.getElementById("exercise1");
const exercise2Button = document.getElementById("exercise2");
const donationAmountInput = document.getElementById("donationAmount");
const fundRaising = document.getElementById("fundRaising");
const progress = document.getElementById("progress");
const result1 = document.getElementById("result1");

menuToggle.onclick = function () {
    menuToggle.classList.toggle("active"); // Toggle the active class on the menu toggle
    nav.classList.toggle("active");
};

nav.onclick = function (event) {
    if (event.target.tagName === "LI") {
        // Remove the "active" class from menu toggle and navigation menu
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
    }
};

// Show Exercise 1 content and hide Exercise 2
exercise1Button.classList.add("active");
exercise2Content.style.display = "none";

exercise1Button.onclick = function () {
    exercise1Content.style.display = "block";
    exercise2Content.style.display = "none";
    exercise1Button.classList.add("active");
    exercise2Button.classList.remove("active");
    fundRaising.style.display = "none";
};

exercise2Button.onclick = function () {
    exercise1Content.style.display = "none";
    exercise2Content.style.display = "block";
    exercise1Button.classList.remove("active");
    exercise2Button.classList.add("active");
    fundRaising.style.display = "block";
};

// Determine oldest person
const determineOldestButton = document.getElementById("determineOldest");
determineOldestButton.onclick = function () {
    const name1 = document.getElementById("name1").value;
    const age1 = parseFloat(document.getElementById("age1").value);
    const name2 = document.getElementById("name2").value;
    const age2 = parseFloat(document.getElementById("age2").value);
    const name3 = document.getElementById("name3").value;
    const age3 = parseFloat(document.getElementById("age3").value);

    if (!name1 || isNaN(age1) || !name2 || isNaN(age2) || !name3 || isNaN(age3)) {
        result1.textContent = "Please enter valid information for all three persons.";
    } else {
        const people = [
            { name: name1, age: age1 },
            { name: name2, age: age2 },
            { name: name3, age: age3 }
        ];

        people.sort((a, b) => b.age - a.age);

        const sortedNames = people.map(person => person.name).join(", ");
        result1.textContent = `Oldest to youngest: ${sortedNames}`;
    }
};

// Update the fund raising meter
const updateThermometerButton = document.getElementById("updateThermometer");
updateThermometerButton.onclick = function () {
    const donationAmount = parseFloat(donationAmountInput.value);
    if (!isNaN(donationAmount)) {
        const goal = 10000;
        const percentage = Math.min(100, (donationAmount / goal) * 100);
        progress.style.width = percentage + "%";
    }
};
