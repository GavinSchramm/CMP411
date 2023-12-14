export {}
function checker1() {
    var result: string = "";
    var valid: boolean = true;
    var caseBox: string = (<HTMLInputElement>document.getElementById("caseBox")).value;
    var string: string = (<HTMLInputElement>document.getElementById("wordBox")).value;
    if (caseBox == "No") {
        var lowerString: string = string.toLowerCase();
    } else if (caseBox == "Yes") {
        var lowerString: string = string;
    }
    for(let i = string.length - 1; i >= 0; i--) {
        result += lowerString![i];
    }
    if (lowerString! == result) {
        valid = true;
    } else {
        valid = false;
    }
    var table1: any = document.getElementById("table1");
    var row1: any = table1.insertRow(-1);
    var newWord1: any = row1.insertCell(0);
    newWord1.innerHTML = string + ": " + valid;
    return (newWord1.innerHTML);
}

function checker2() {
    var caseBox: string = (<HTMLInputElement>document.getElementById("caseBox")).value;
    var string: string = (<HTMLInputElement>document.getElementById("wordBox")).value;
    var newString: string = string;
    var newStringList: string[] = newString.split("");
    var newStringReverse: string[] = newStringList.reverse();
    var reverse: string = newStringReverse.join("");

    var stringList: string[] = string.split("");
    var reverseList: string[] = reverse.split("");

    var table2: any = document.getElementById("table2");
    var row2: any = table2.insertRow(-1);
    var newWord2 = row2.insertCell(0);

    if (caseBox == "No") {
        var tempString: string = stringList.join("");
        var tempReverse: string = reverseList.join("");
        var lowTempString: string = tempString.toLowerCase();
        var lowTempReverse: string = tempReverse.toLowerCase();
        var lowerStringList: string[] = lowTempString.split("");
        var lowerReverseList: string[] = lowTempReverse.split("");
    } else if (caseBox == "Yes") {
        var lowerStringList: string[] = string.split("");
        var lowerReverseList: string[] = reverse.split("");
    }
    
    for (let i = string.length-1; i >= 0; i--) {
        if (lowerStringList![i] != lowerReverseList![i]) {
            return(newWord2.innerHTML = string + ": " + false);
        }
    }
    return(newWord2.innerHTML = string + ": " + true);
}

function checker3() {
    var string: string = (<HTMLInputElement>document.getElementById("wordBox")).value;
    var caseBox: string = (<HTMLInputElement>document.getElementById("caseBox")).value;
    var i: number = 0;
    var j: number = string.length - 1;
    var valid: boolean = true
    if (caseBox == "No") {
        var lowerString: string = string.toLowerCase();
    } else if (caseBox == "Yes") {
        var lowerString: string = string;
    }
    for (let x = string.length; i < j; x++) {
        if (lowerString![i] != lowerString![j]) {
            valid = false;
            break;
        } else {
            i++;
            j--;
            valid = true;
        }
    }
    var table3: any = document.getElementById("table3");
    var row3: any = table3.insertRow(-1);
    var newWord3: any = row3.insertCell(0);
    return(newWord3.innerHTML = string + ": " + valid);
}

function deleteTable1() {
    var table1: any = (<HTMLInputElement>document.getElementById("table1"));
    let rowCount: number = table1.rows.length;
    for (let i = 0; i < rowCount; i++){
        table1.deleterow(0);
    }
}

function deleteTable2() {
    var table2: any = (<HTMLInputElement>document.getElementById("table2"));
    let rowCount: number = table2.rows.length;
    for (let i = 0; i < rowCount; i++){
        table2.deleterow(0);
    }
}

function deleteTable3() {
    var table3: any = (<HTMLInputElement>document.getElementById("table3"));
    let rowCount: number = table3.rows.length;
    for (let i = 0; i < rowCount; i++){
        table3.deleterow(0);
    }
}

function addToList() {
    var string = (<HTMLInputElement>document.getElementById("wordBox")).value;
    var tableNumber = (<HTMLInputElement>document.getElementById("tableBox")).value;
    var caseBox = (<HTMLInputElement>document.getElementById("caseBox")).value;

    if (string == "") {
        alert("Please write a word");
    } else if (tableNumber != "1" && tableNumber != "2" && tableNumber != "3") {
        alert("Please enter a 1, 2, or 3");
    } else if (caseBox != "Yes" && caseBox != "No") {
        alert("Please enter Yes or No");
    } else if (tableNumber == "1") {
        checker1();
    } else if (tableNumber == "2") {
        checker2();
    } else if (tableNumber == "3") {
        checker3();
    }
}