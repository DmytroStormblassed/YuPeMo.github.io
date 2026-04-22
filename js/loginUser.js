function loginUser() {
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Введіть ім'я!");
        return;
    }

    localStorage.setItem("username", username);

    window.location.href = "mainpage.html";
}