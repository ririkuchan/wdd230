const url = "data/members.json";
const container = document.querySelector("#directory");

// JSONデータを取得して表示
fetch(url)
    .then(res => res.json())
    .then(data => displayMembers(data.members));

function displayMembers(members) {
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");

        // ロゴとテキストを分ける構造にする
        card.innerHTML = `
            <img src="images/${member.logo}" alt="${member.name} logo">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p class="membership">${member.membership} Member</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// カード表示とリスト表示の切り替え
document.getElementById("cardView").addEventListener("click", () => {
    container.classList.add("cards");
    container.classList.remove("list");
});

document.getElementById("listView").addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("cards");
});