function registerUser(){
    const username = document.getElementById("regUsername").value;
    if (username.trim() === "") {
        alert("Введіть ім'я!");
        return;
    }

    localStorage.setItem("regUsername", username);

    window.location.href = "mainpage.html";
}
