function submitForm(event) {
    event.preventDefault();

    var foodname = document.getElementById("food-name").value;
    var calories = document.getElementById("calories").value;
    var protein = document.getElementById("protein").value;
    var Carbohydrates = document.getElementById("Carbohydrates").value;
    var fat = document.getElementById("fat").value;
    alert("confirm!");

    var table = document.getElementById("food-list");
    var newRow = table.insertRow();

    var foodnameCell = newRow.insertCell();
    var caloriesCell = newRow.insertCell();
    var proteinCell = newRow.insertCell();
    var CarbohydratesCell = newRow.insertCell();
    var fatCell = newRow.insertCell();
    var actionCell = newRow.insertCell();

    foodnameCell.innerHTML = foodname;
    caloriesCell.innerHTML = calories;
    proteinCell.innerHTML = protein;
    CarbohydratesCell.innerHTML = Carbohydrates;
    fatCell.innerHTML = fat;
    actionCell.innerHTML = "<span class='delete-button' onclick='deleteRow(this)'>Delete</span>";

    document.getElementById("nutrition").reset();
}

function deleteRow(deleteButton) {
    var row = deleteButton.parentNode.parentNode;
    var table = document.getElementById("food-list");
    table.deleteRow(row.rowIndex);
}
