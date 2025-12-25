function checkStatus() {
  const input = document.getElementById("statusInput").value.trim();
  const result = document.getElementById("result");

  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  if (!input) {
    result.style.color = "red";
    result.innerText = "Please enter Email or Application ID.";
    return;
  }

  const found = applications.find(app =>
    app.id === input || app.email === input
  );

  if (!found) {
    result.style.color = "red";
    result.innerText = "No application found.";
    return;
  }

  result.style.color = "green";
  result.innerHTML = `
    Status: <b>Pending</b><br>
    Application ID: ${found.id}
  `;
}
