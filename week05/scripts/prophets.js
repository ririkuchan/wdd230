const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cardsContainer = document.querySelector("#cards");

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const prophets = data.prophets;
        prophets.forEach((prophet) => {
            const card = document.createElement("section");
            card.classList.add("card");

            const name = document.createElement("h2");
            name.textContent = `${prophet.name} ${prophet.lastname}`;

            const birthdate = document.createElement("p");
            birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

            const birthplace = document.createElement("p");
            birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

            const image = document.createElement("img");
            image.src = prophet.imageurl;
            image.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
            image.loading = "lazy";
            image.width = 300;
            image.height = 400;

            card.appendChild(name);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(image);

            cardsContainer.appendChild(card);
        });
    })
    .catch((error) => console.error("Error loading data:", error));