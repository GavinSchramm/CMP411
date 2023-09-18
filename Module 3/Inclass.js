function check(){
    //if id of text not empty 
    let x = document.forms["formy"]["addText"].value;
    if(x == ""){
        alert("Input must be filled out")
    }
    //add x to table
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell = row.insertCell
    
}

