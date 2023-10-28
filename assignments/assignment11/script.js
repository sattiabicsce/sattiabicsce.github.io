document.addEventListener("DOMContentLoaded", () => {
    const movieContainer = document.getElementById("movie-container");

    async function fetchData() {
        try {
            const response = await fetch(
                "https://portiaportia.github.io/json/movies.json"
            );
            const data = await response.json();

            data.forEach((movie) => {
                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                const img = document.createElement("img");
                img.src = `https://portiaportia.github.io/json/${movie.img}`;
                img.alt = movie.title;
                img.classList.add("movie-img");

                const title = document.createElement("div");
                title.classList.add("movie-title");
                title.textContent = movie.title;

                const details = document.createElement("div");
                details.classList.add("movie-details");
                const actors = movie.actors.join(", ");
                details.innerHTML = `<p><strong>Director:</strong> ${movie.director}</p>
                                     <p><strong>Year:</strong> ${movie.year}</p>
                                     <p><strong>Actors:</strong> <span class="movie-actors">${actors}</span></p>
                                     <p><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
                                     <p><strong>Description:</strong> ${movie.description}</p>`;

                movieCard.appendChild(img);
                movieCard.appendChild(title);
                movieCard.appendChild(details);

                movieContainer.appendChild(movieCard);
            });
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    fetchData();
});
