const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");
const imageContainer = document.getElementById("imageContainer");
const animateButton = document.getElementById("animateButton");
const animationContainer = document.getElementById("animationContainer");
const commentInput = document.getElementById("commentInput");
const addCommentButton = document.getElementById("addCommentButton");
const commentsContainer = document.getElementById("commentsContainer");

showButton.addEventListener("click", () => {
    imageContainer.style.display = "block";
});

hideButton.addEventListener("click", () => {
    imageContainer.style.display = "none";
});

animateButton.addEventListener("click", () => {
    const circle = document.createElement("div");
    circle.className = "circle";

    // Add the circle to the animation container
    animationContainer.appendChild(circle);

    // Remove the circle after animation completes
    setTimeout(() => {
        circle.remove();
    }, 4000); // The animation duration is 4 seconds
});

addCommentButton.addEventListener("click", () => {
    const productName = document.getElementById("productName").value;
    const userName = document.getElementById("userName").value;
    const commentText = document.getElementById("commentInput").value;
    const rating = document.getElementById("rating").value;

    if (productName && userName && commentText && rating) {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `
            <strong>${productName}</strong> by <em>${userName}</em><br>
            Rating: ${rating}/5<br>
            Comment: ${commentText}
        `;
        commentsContainer.appendChild(commentElement);

        // Clear input fields
        document.getElementById("productName").value = "";
        document.getElementById("userName").value = "";
        document.getElementById("commentInput").value = "";
        document.getElementById("rating").value = "";
    }
});
