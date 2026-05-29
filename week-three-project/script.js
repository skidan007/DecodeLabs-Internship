// =========================
// Responsive Navigation Toggle
// =========================

const navigationLinks = document.querySelectorAll(".nav-list a");
const navigationToggle = document.querySelector(".navigation-toggle");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigationToggle.checked = false;
    });
});

// =========================
// Dynamic Hero/Button Interaction
// =========================

const headingText = document.querySelector(".hero-text h2");
const heroButton = document.querySelector(".primary-button");

heroButton.addEventListener("click", () => {
    headingText.textContent = "Thanks for Exploring Our Services!";

    setTimeout(() => {
        headingText.textContent = "Welcome to Modern Web Solutions";
    }, 3000);
});


const paragraph = document.querySelector(".typewriter p");

const texts = [
    "Welcome to our website!",
    "We offer amazing services.",
    "Learn frontend development step by step.",
    "Join us and build real projects.",
    "Keep improving your coding skills!"
];

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    paragraph.textContent = texts[randomIndex];
}, 3000);
// =========================
// Service Card Interaction
// =========================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        const serviceTitle = card.querySelector("h3");
        serviceTitle.style.color = "#007BFF";
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s ease";
        // card.style.fontWeight = "bold";
        // card.style.color = "#007BFF";
    });

    card.addEventListener("mouseleave", () => {
        const serviceTitle = card.querySelector("h3");
        card.style.transform = "translateY(0)";
        // card.style.fontWeight = "normal";
        serviceTitle.style.color = "#111827";
    });


});

// =========================
// Dynamic Footer Year
// =========================

const footerText = document.querySelector(".footer-content p");

const currentYear = new Date().getFullYear();

footerText.textContent =
    `© ${currentYear} Modern Web Solutions. All rights reserved.`;