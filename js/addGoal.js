document.getElementById("confirmGoal").addEventListener("click", function () {

    let name = document.getElementById("namegoal").value;
    let sum = document.getElementById("sumgoal").value;

    if (name === "" || sum === "") {
        alert("Заповніть всі поля!");
        return;
    }

    let tableBody = document.querySelector("#goalTable tbody");

    let newRow = document.createElement("tr");

    let cell5 = document.createElement("td");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell6 = document.createElement("td");
    

    let today = new Date().toLocaleDateString();

    let progress = 0;
    let percentprog = 0;

    cell1.innerHTML = name;
    cell2.innerHTML = today;
    cell3.innerHTML = sum;
    cell4.innerHTML = progress;
    cell6.innerHTML = percentprog;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteTable");

    let img = document.createElement("img");
    img.src = "images/delete.svg"; 
    img.width = 40;

    deleteBtn.appendChild(img);
    deleteBtn.title = "Натискніть щоб видалити ціль";

    deleteBtn.addEventListener("click", function () {
        newRow.remove();
    });
    cell5.appendChild(deleteBtn);

    newRow.appendChild(cell5);
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell6);
    

    tableBody.appendChild(newRow);

    document.getElementById("namegoal").value = "";
    document.getElementById("sumgoal").value = "";
});