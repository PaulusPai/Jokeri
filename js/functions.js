
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    const table = document.querySelector("table");
    const countParagraph = document.querySelector("p");

    let rowCount = 0;

    button.addEventListener("click", function () {
        addNewRowToTable();
        updateRowCount();
    });

    function addNewRowToTable() {
        const newRow = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            const cell = document.createElement("td");
            cell.textContent = randomNumber;
            newRow.appendChild(cell);
        }
        table.appendChild(newRow);
    }

    function updateRowCount() {
        rowCount++;
        countParagraph.textContent = `Valmiita rivejä: ${rowCount}`;
    }
});
