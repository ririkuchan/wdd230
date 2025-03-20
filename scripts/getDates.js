document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // Set last modified date
    const lastModifiedSpan = document.getElementById("lastModified");
    const lastModified = document.lastModified;
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = lastModified;
    }
});
