function insert_Row() {
    // Get the table element
    var table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    var newRow = table.insertRow(0);

    // Insert two new cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the text for the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}

