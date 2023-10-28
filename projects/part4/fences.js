document.addEventListener("DOMContentLoaded", () => {
    const fenceContainer = document.getElementById("fence-container");

    async function fetchData() {
        try {
            const response = await fetch("");
            const data = await response.json();

            data.forEach((fence) => {
                const fenceCard = document.createElement("div");
                fenceCard.classList.add("fence-card");

                const img = document.createElement("img");
                img.src = fence.img;
                img.alt = fence.type;
                img.classList.add("fence-img");

                const details = document.createElement("div");
                details.classList.add("fence-details");
                details.innerHTML = `<p><strong>Type:</strong> ${fence.type}</p>
                                     <p><strong>Materials:</strong> ${fence.materials.join(", ")}</p>
                                     <p><strong>Pricing:</strong> ${fence.pricing}</p>
                                     <p><strong>Dimensions:</strong> ${fence.dimensions}</p>
                                     <p><strong>Description:</strong> ${fence.description}</p>`;

                fenceCard.appendChild(img);
                fenceCard.appendChild(details);
                fenceContainer.appendChild(fenceCard);
            });
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    fetchData();
});
