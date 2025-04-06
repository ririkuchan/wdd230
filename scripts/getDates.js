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

    // ハンバーガーメニュー
    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("open");
            navigation.classList.toggle("open");
        });
    }

    // ダークモード
    const darkToggle = document.getElementById("darkToggle");
    const main = document.querySelector("main");

    if (darkToggle && main) {
        darkToggle.addEventListener("click", () => {
            main.classList.toggle("dark");
        });
    }

    // Visit Counter (localStorage使用)
    const visitsDisplay1 = document.querySelector("#visits"); // 情報カード用
    const visitsDisplay2 = document.querySelector("#visits-total"); // もう1箇所表示用（あれば）

    let visitCount = Number(localStorage.getItem("visits-count")) || 0;
    visitCount++;
    localStorage.setItem("visits-count", visitCount);

    if (visitsDisplay1) visitsDisplay1.textContent = visitCount;
    if (visitsDisplay2) visitsDisplay2.textContent = visitCount;
});