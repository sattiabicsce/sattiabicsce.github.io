const runningMan = document.getElementById('runningMan');
const temperatureInput = document.getElementById('temperatureInput');
const mercury = document.querySelector('.mercury');

let currentPosition = -10; // Start from a position off-screen on the left side
let isWalking = true;
let isImagesLoaded = false;
let isAnimationStarted = false;

const walkingImage = new Image();
walkingImage.src = 'images/man-walking.png';

const runningImage = new Image();
runningImage.src = 'images/man-running.png';

// Check if both images are loaded
walkingImage.onload = runningImage.onload = function() {
    isImagesLoaded = true;
};

runningMan.addEventListener('click', function() {
    if (!isAnimationStarted && isImagesLoaded) {
        startAnimation();
        isAnimationStarted = true;
    }
});

function startAnimation() {
    setInterval(() => {
        if (isWalking) {
            currentPosition += 10; // Adjust this value based on the speed of the animation
        } else {
            currentPosition -= 1;
        }

        runningMan.style.marginLeft = `${currentPosition}%`;
        runningMan.src = isWalking ? walkingImage.src : runningImage.src;
        isWalking = !isWalking;

        // If the running man reaches the end, reset the position
        if (currentPosition >= 100) {
            currentPosition = -100; // Start from a position off-screen on the left side
        }
    }, 100); // Adjust this value to control the speed of the animation
}

function increaseTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    if (!isNaN(temperature)) {
        const maxHeight = 10000; // Goal amount
        const mercuryHeight = (temperature / maxHeight) * 100;
        mercury.style.height = `${mercuryHeight}%`;
    }
}
