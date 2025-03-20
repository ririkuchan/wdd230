document.addEventListener("DOMContentLoaded", function () {
    // フッターに現在の年を設定
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 最終更新日を設定
    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // ハンバーガーメニューの開閉処理
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    } else {
        console.error("Hamburger button or nav-menu not found.");
    }
});
