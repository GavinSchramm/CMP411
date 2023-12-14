"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checker1() {
    var result = "";
    var valid = true;
    var caseBox = document.getElementById("caseBox").value;
    var string = document.getElementById("wordBox").value;
    if (caseBox == "No") {
        var lowerString = string.toLowerCase();
    }
    else if (caseBox == "Yes") {
        var lowerString = string;
    }
    for (var i = string.length - 1; i >= 0; i--) {
        result += lowerString[i];
    }
    if (lowerString == result) {
        valid = true;
    }
    else {
        valid = false;
    }
    var table1 = document.getElementById("table1");
    var row1 = table1.insertRow(-1);
    var newWord1 = row1.insertCell(0);
    newWord1.innerHTML = string + ": " + valid;
    return (newWord1.innerHTML);
}
function checker2() {
    var caseBox = document.getElementById("caseBox").value;
    var string = document.getElementById("wordBox").value;
    var newString = string;
    var newStringList = newString.split("");
    var newStringReverse = newStringList.reverse();
    var reverse = newStringReverse.join("");
    var stringList = string.split("");
    var reverseList = reverse.split("");
    var table2 = document.getElementById("table2");
    var row2 = table2.insertRow(-1);
    var newWord2 = row2.insertCell(0);
    if (caseBox == "No") {
        var tempString = stringList.join("");
        var tempReverse = reverseList.join("");
        var lowTempString = tempString.toLowerCase();
        var lowTempReverse = tempReverse.toLowerCase();
        var lowerStringList = lowTempString.split("");
        var lowerReverseList = lowTempReverse.split("");
    }
    else if (caseBox == "Yes") {
        var lowerStringList = string.split("");
        var lowerReverseList = reverse.split("");
    }
    for (var i = string.length - 1; i >= 0; i--) {
        if (lowerStringList[i] != lowerReverseList[i]) {
            return (newWord2.innerHTML = string + ": " + false);
        }
    }
    return (newWord2.innerHTML = string + ": " + true);
}
function checker3() {
    var string = document.getElementById("wordBox").value;
    var caseBox = document.getElementById("caseBox").value;
    var i = 0;
    var j = string.length - 1;
    var valid = true;
    if (caseBox == "No") {
        var lowerString = string.toLowerCase();
    }
    else if (caseBox == "Yes") {
        var lowerString = string;
    }
    for (var x = string.length; i < j; x++) {
        if (lowerString[i] != lowerString[j]) {
            valid = false;
            break;
        }
        else {
            i++;
            j--;
            valid = true;
        }
    }
    var table3 = document.getElementById("table3");
    var row3 = table3.insertRow(-1);
    var newWord3 = row3.insertCell(0);
    return (newWord3.innerHTML = string + ": " + valid);
}
function deleteTable1() {
    var table1 = document.getElementById("table1");
    var rowCount = table1.rows.length;
    for (var i = 0; i < rowCount; i++) {
        table1.deleterow(0);
    }
}
function deleteTable2() {
    var table2 = document.getElementById("table2");
    var rowCount = table2.rows.length;
    for (var i = 0; i < rowCount; i++) {
        table2.deleterow(0);
    }
}
function deleteTable3() {
    var table3 = document.getElementById("table3");
    var rowCount = table3.rows.length;
    for (var i = 0; i < rowCount; i++) {
        table3.deleterow(0);
    }
}
function addToList() {
    var string = document.getElementById("wordBox").value;
    var tableNumber = document.getElementById("tableBox").value;
    var caseBox = document.getElementById("caseBox").value;
    if (string == "") {
        alert("Please write a word");
    }
    else if (tableNumber != "1" && tableNumber != "2" && tableNumber != "3") {
        alert("Please enter a 1, 2, or 3");
    }
    else if (caseBox != "Yes" && caseBox != "No") {
        alert("Please enter Yes or No");
    }
    else if (tableNumber == "1") {
        checker1();
    }
    else if (tableNumber == "2") {
        checker2();
    }
    else if (tableNumber == "3") {
        checker3();
    }
}
