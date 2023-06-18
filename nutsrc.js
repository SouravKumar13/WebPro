function submitForm(event) {
    event.preventDefault();

    var exercise = document.getElementById("exercise").value;
    var duration = document.getElementById("duration").value;

    var table = document.getElementById("challengelist");
    var newRow = table.insertRow();

    var exerciseCell = newRow.insertCell();
    var durationCell = newRow.insertCell();
    var actionCell = newRow.insertCell();

    exerciseCell.innerHTML = exercise;
    durationCell.innerHTML = duration;

    alert("confirm!");

    actionCell.innerHTML =  "<span class='delete-button' onclick='deleteRow(this)'>Delete</span>";

    document.getElementById("challenges").reset();
}
function deleteRow(deleteButton) {
    var row = deleteButton.parentNode.parentNode;
    var table = document.getElementById("challengelist");
    table.deleteRow(row.rowIndex);
}