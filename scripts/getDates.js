document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // ハンバーガーメニューの開閉処理
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            console.log("Hamburger button clicked!"); // デバッグ用
            navMenu.classList.toggle("active");
            console.log("Nav menu class list:", navMenu.classList); // デバッグ用
        });
    } else {
        console.error("Hamburger button or nav-menu not found.");
    }
});
