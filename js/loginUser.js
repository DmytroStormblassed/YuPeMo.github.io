function loginUser() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Введіть ім'я!");
        return;
    }

    localStorage.setItem("currentUser", username);

    window.location.href = "mainpage.html";
}