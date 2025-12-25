const form = document.getElementById("jobForm");
const successBox = document.getElementById("successBox");
const appIdText = document.getElementById("appId");
form.addEventListener("submit", function (e) {
    e.preventDefault();
const appId = "KLICK-" + Date.now();

    const application = {
        id: appId,
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        position: document.getElementById("position").value,
        skills: document.getElementById("skills").value,
        date: new Date().toLocaleString()
    };

        let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push(application);
    localStorage.setItem("applications", JSON.stringify(applications));
    appIdText.textContent = appId;
    successBox.style.display = "block";
    form.reset();
});
function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}
