window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("currentUser");
    const profileSpan = document.getElementById("openProfile");

    if (username && profileSpan) {
        profileSpan.textContent = username;
    } else if (profileSpan) {
        profileSpan.textContent = "Ім'я_користувача";
    }
});