const navLinks = document.querySelectorAll(".nav-bar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

const getStartedBtn = document.querySelector(".btn");
const applyBtn = document.querySelector(".apply .btn");
const viewAnnouncementsBtn = document.querySelector(".btn-outline");

getStartedBtn.addEventListener("click", () => {
    window.location.href = "application.html";
});

applyBtn.addEventListener("click", () => {
    window.location.href = "application.html";
});

viewAnnouncementsBtn.addEventListener("click", () => {
    window.location.href = "Announcement.html";
});


const tags = document.querySelectorAll(".tag")

tags.forEach(tag => {
    tag.addEventListener("click", () => {
        window.location.href = "Announcement.html";
    });
});


const menu = document.querySelector(".menu");
const nav_bar = document.querySelector(".menu-bar");

menu.addEventListener("click", () => {
    menu.style.display = "none"; 
    nav_bar.style.display = "block";
    document.querySelector(".hero").style.marginTop = "200px"; 
});