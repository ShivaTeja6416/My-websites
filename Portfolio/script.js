// Change navbar color on scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.style.backgroundColor = window.scrollY > 50 ? "#444" : "#222";
});

// Back to Top Button
let backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle
let darkModeBtn = document.getElementById("darkModeToggle");
let isDarkMode = false;

darkModeBtn.addEventListener("click", function () {
    if (!isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "☀ Light Mode";
        isDarkMode = true;
    } else {
        document.body.classList.remove("dark-mode");
        darkModeBtn.textContent = "🌙 Dark Mode";
        isDarkMode = false;
    }
});
