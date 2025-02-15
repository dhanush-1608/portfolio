// Toggle Dark Mode
const toggleDarkMode = document.getElementById("dark-mode-toggle");
const body = document.body;

toggleDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
});

// Maintain Dark Mode Preference
if (localStorage.getItem("dark-mode") === "true") {
    body.classList.add("dark-mode");
}

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Skill Logo Hover Effect
document.querySelectorAll(".skills-container img").forEach(skill => {
    skill.addEventListener("mouseover", () => {
        skill.style.transform = "scale(1.2)";
        skill.style.filter = "brightness(1.2)";
    });
    skill.addEventListener("mouseout", () => {
        skill.style.transform = "scale(1)";
        skill.style.filter = "brightness(1)";
    });
});