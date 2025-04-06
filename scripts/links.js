const linksURL = "data/links.json";
const linksContainer = document.querySelector("#activity-links");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        const li = document.createElement("li");
        li.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.label;

            li.appendChild(a);

            // 区切り（最後のリンク以外に）
            if (index < week.links.length - 1) {
                li.append(" | ");
            }
        });

        linksContainer.appendChild(li);
    });
}

getLinks();