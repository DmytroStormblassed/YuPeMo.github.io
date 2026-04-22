document.getElementById("confirmFilter").addEventListener("click", function () {

    let selected = document.querySelector('input[name="filter"]:checked');

    if (!selected) {
        alert("Оберіть фільтр!");
        return;
    }

    let type = selected.value;

    let tbody = document.querySelector("#goalTable tbody");
    let rows = Array.from(tbody.querySelectorAll("tr"));

    rows.sort((a, b) => {

        let aDate = a.cells[1].textContent;
        let bDate = b.cells[1].textContent;

        let aSum = parseFloat(a.cells[2].textContent);
        let bSum = parseFloat(b.cells[2].textContent);

        let aProgress = parseFloat(a.cells[3].textContent);
        let bProgress = parseFloat(b.cells[3].textContent);

        switch (type) {
            case "date":
                // формат dd.mm.yyyy → переводимо в Date
                return new Date(aDate.split('.').reverse().join('-')) - 
                       new Date(bDate.split('.').reverse().join('-'));

            case "progress":
                return bProgress - aProgress;

            case "sumDesc":
                return bSum - aSum;

            case "sumAsc":
                return aSum - bSum;
        }
    });

    // очищаємо таблицю
    tbody.innerHTML = "";

    // вставляємо відсортовані рядки
    rows.forEach(row => tbody.appendChild(row));
});