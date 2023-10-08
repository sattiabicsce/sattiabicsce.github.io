const slide = () => {
    const currentQuote = document.querySelector("#slideshow :not(.hidden)");
    currentQuote.classList.add("hidden");

    let nextQuote = currentQuote.nextElementSibling;

    if (nextQuote == null) {
        nextQuote = document.querySelector("#slideshow :first-child");
    }

    nextQuote.classList.remove("hidden");
};

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const showRainbow = () => {
    let result = document.getElementById("result");
    result.innerHTML = "";

    const addColorLine = (color) => {
        const colorLine = document.createElement("p");
        colorLine.classList.add("color-line");
        colorLine.style.backgroundColor = color;
        colorLine.style.color = color;
        colorLine.textContent = "hide";
        result.appendChild(colorLine);
    };

    const gold = document.querySelector("#pot");

    colors.forEach((color, index) => {
        setTimeout(() => {
            addColorLine(color);
            if (index === colors.length - 1) {
                gold.classList.remove("hidden");
            }
        }, index * 250);
    });
};

window.onload = () => {
    setInterval(slide, 2000);
    document.getElementById("draw-rainbow").onclick = showRainbow;
};
