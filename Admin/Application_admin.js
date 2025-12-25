const table = document.getElementById("applicationsTable");
const applications = JSON.parse(localStorage.getItem("applications")) || [];

applications.forEach(app => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${app.name}</td>
        <td>${app.email}</td>
        <td>${app.phone}</td>
        <td>${app.position}</td>
        <td>${app.skills}</td>
        <td>${app.date}</td>
    `;
    table.appendChild(row);
});

 // --- MOBILE MENU LOGIC ---
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('#navbar__menu');

        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });

