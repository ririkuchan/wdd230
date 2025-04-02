document.addEventListener("DOMContentLoaded", function () {
    // 年・最終更新日
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // ハンバーガー
    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("open");
        navigation.classList.toggle("open");

    });

    //ダークモード
    const darkToggle = document.getElementById("darkToggle");
    const main = document.querySelector("main");

    darkToggle.addEventListener("click", () => {
        main.classList.toggle("dark");

    });

    const visitsDisplay = document.getElementById("visits");
    let numVisits = Number(localStorage.getItem("visits-ls")) || 0;

    if (visitsDisplay) {
        visitsDisplay.textContent = numVisits;
        numVisits++;
        localStorage.setItem("visits-ls", numVisits);
    }
});