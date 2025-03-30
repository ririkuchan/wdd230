document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Lazy load 画像が読み込まれたときに .loaded を追加
const images = document.querySelectorAll("img[loading='lazy']");
images.forEach(img => {
    img.addEventListener("load", () => {
        img.classList.add("loaded");
    });
});