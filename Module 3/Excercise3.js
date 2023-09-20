function addToTable1() {
    var name = document.getElementById("wordBox").value;
    var tableNumber = document.getElementById("numberBox").value;
    var table1 = document.getElementById("table1");
    var row1 = table1.insertRow(-1);
    var newWord1 = row1.insertCell(0);
    newWord1.innerHTML = name;
    return (name);
}

function addToTable2() {
    var name = document.getElementById("wordBox").value;
    var tableNumber = document.getElementById("numberBox").value;
    var table2 = document.getElementById("table2");
    var row2 = table2.insertRow(-1);
    var newWord2 = row2.insertCell(0);
    newWord2.innerHTML = name;
    return (name);
}

function deleteTable1() {
    let rowCount = table1.rows.length;
    for (let i = 0; i < rowCount; i++){
        document.getElementById("table1").deleteRow(0);
    }
}

function deleteTable2() {
    let rowCount = table2.rows.length;
    for (let i = 0; i < rowCount; i++){
        document.getElementById("table2").deleteRow(0);
    }
}

function addToList(){
    var name = document.getElementById("wordBox").value;
    var tableNumber = document.getElementById("numberBox").value;

    if (name == "") {
        alert("Need a valid word.")
    } else if (tableNumber != "1" && tableNumber != "2") {
        alert("Need a 1 or 2 for the table")
    } else if (tableNumber == "1") {
        addToTable1();
    } else if (tableNumber == "2") {
        addToTable2();
    }
}