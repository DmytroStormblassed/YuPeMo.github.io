window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");

    if (username) {
        document.getElementById("openProfile").textContent = username;
    }
});