// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    links.forEach((link) => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }
    });
});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .experience-card, .education-card, .about-text, .contact-item"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 80) {
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// UPDATE FOOTER YEAR
// ================================

const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.innerHTML =
        `© ${new Date().getFullYear()} Nida Arshad. All Rights Reserved.`;
}
