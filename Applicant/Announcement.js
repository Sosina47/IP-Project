const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#navbar__menu');


menu.addEventListener('click', function() {
    // Animates the Hamburger bars
    menu.classList.toggle('is-active');
    // dropdown menu visibility
    menuLinks.classList.toggle('active');
});


// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-bar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});