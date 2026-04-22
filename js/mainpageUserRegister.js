window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("regUsername");

    if (username) {
        document.getElementById("openProfile").textContent = username;
    }
});