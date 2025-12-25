// Show welcome message when page loads
window.onload = function () {
    console.log("About Us page loaded");
};

// Change color of team members on hover
const teamMembers = document.querySelectorAll(".team-info li");

teamMembers.forEach(function (member) {
    member.addEventListener("mouseover", function () {
        member.style.color = "#2563eb";
    });

    member.addEventListener("mouseout", function () {
        member.style.color = "#000";
    });
});

// Update footer year
const footer = document.querySelector(".footer-bottom p");
const year = new Date().getFullYear();

footer.innerHTML = "© " + year + " Klick Company. All rights reserved.";
// Hamburger menu toggle - FIXED VERSION
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Make sure menu is hidden on mobile initially
if (window.innerWidth <= 768) {
    navLinks.classList.remove("active");
}

hamburger.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    navLinks.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});

// Close menu when clicking a link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Close menu on window resize if switching to desktop
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
    }
});