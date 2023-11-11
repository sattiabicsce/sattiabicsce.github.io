const getCars = async () => {
    try {
        return await (await fetch("/api/cars")).json();
    } catch (error) {
        console.log(error);
    }
};

const showCars = async () => {
    try {
        let cars = await getCars();
        let carsDiv = document.getElementById("car-list");
        carsDiv.innerHTML = "";
        cars.forEach((car) => {
            const section = document.createElement("section");
            section.classList.add("car");
            carsDiv.append(section);

            const a = document.createElement("a");
            a.href = "#";
            section.append(a);

            const h3 = document.createElement("h3");
            h3.innerHTML = `${car.year} ${car.make} ${car.model}`;
            a.append(h3);

            a.onclick = (e) => {
                e.preventDefault();
                displayDetails(car);
            };
        });
    } catch (error) {
        console.log(error);
    }
};

const displayDetails = (car) => {
    const carDetails = document.getElementById("car-details");
    carDetails.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.innerHTML = `${car.year} ${car.make} ${car.model}`;
    carDetails.append(h3);

    const dLink = document.createElement("a");
    dLink.innerHTML = "	&#x2715;";
    carDetails.append(dLink);
    dLink.id = "delete-link";

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    carDetails.append(eLink);
    eLink.id = "edit-link";

    const p = document.createElement("p");
    carDetails.append(p);
    p.innerHTML = `Color: ${car.color}, Price: $${car.price}`;

    const ul = document.createElement("ul");
    carDetails.append(ul);

    car.features.forEach((feature) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = feature;
    });

    eLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("add-edit-title").innerHTML = "Edit Car";
    };

    dLink.onclick = (e) => {
        e.preventDefault();
        // delete car
    };

    populateEditForm(car);
};

const populateEditForm = (car) => {
    const form = document.getElementById("add-edit-car-form");
    form._id.value = car._id;
    form.make.value = car.make;
    form.model.value = car.model;
    form.year.value = car.year;
    form.color.value = car.color;
    form.price.value = car.price;

    // Clear and add features to the form
    const featureSection = document.getElementById("feature-boxes");
    featureSection.innerHTML = "";
    car.features.forEach((feature) => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = feature;
        featureSection.append(input);
    });
};

const addEditCar = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-car-form");
    const formData = new FormData(form);

    // Adding a new car
    formData.delete("_id");

    let response = await fetch("/api/cars", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        console.log("Error posting data");
    } else {
        response = await response.json();
        resetForm();
        document.querySelector(".dialog").classList.add("transparent");
        showCars();
    }
};

const resetForm = () => {
    const form = document.getElementById("add-edit-car-form");
    form.reset();
    form._id.value = "-1";
    document.getElementById("feature-boxes").innerHTML = "";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Add Car";
    resetForm();
};

const addFeature = (e) => {
    e.preventDefault();
    const section = document.getElementById("feature-boxes");
    const input = document.createElement("input");
    input.type = "text";
    section.append(input);
};

window.onload = () => {
    showCars();
    document.getElementById("add-edit-car-form").onsubmit = addEditCar;
    document.getElementById("add-link").onclick = showHideAdd;

    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };

    document.getElementById("add-feature").onclick = addFeature;
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".dialog").classList.remove("transparent");
    document.querySelector(".dialog").classList.add("transparent");
});
