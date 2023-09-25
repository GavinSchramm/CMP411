function checker1() {
    var result = "";
    var valid = true;
    var string = document.getElementById("wordBox").value;
    for(let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    if (string == result) {
        valid = true;
    } else {
        valid = false;
    }
    var table1 = document.getElementById("table1");
    var row1 = table1.insertRow(-1);
    var newWord1 = row1.insertCell(0);
    newWord1.innerHTML = string + ": " + valid;
    return (newWord1.innerHTML);
}

function checker2() {
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

    
    for (let i = string.length-1; i >=0; i--) {
        if (stringList[i] != reverseList[i]) {
            return(newWord2.innerHTML = string + ": " + false);
        }
    }
    return(newWord2.innerHTML = string + ": " + true);
}

function addToList() {
    var string = document.getElementById("wordBox").value;
    var tableNumber = document.getElementById("tableBox").value;

    if (string == "") {
        alert("Please a word");
    } else if (tableNumber != 1 && tableNumber != 2 && tableNumber != 3) {
        alert("Please enter a 1, 2, or 3");
    } else if (tableNumber == 1) {
        checker1();
    } else if (tableNumber == 2) {
        checker2();
    }
}