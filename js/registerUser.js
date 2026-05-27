function registerUser() {
    const username = document.getElementById("regUsername").value.trim();

    if (username === "") {
        alert("Введіть ім'я!");
        return;
    }

    localStorage.setItem("currentUser", username);

    window.location.href = "mainpage.html";
}