async function getQuote() {
    var minLength = 0;
    var maxLength = 1000;
    var myString = "https://api.quotable.io/random?";

    var length = document.getElementById("paraLength").value;

    if (length == 1) {
        maxLength = 70;
        myString = myString + "maxLength=70";
    } else if (length == 2) {
        minLength = 70;
        maxLength = 110;
        myString = myString + "minLength=70&maxLength=110";
    } else if (length == 3) {
        minLength = 110;
        myString = myString + "minLength=100";
    }

        var response = await fetch(myString);

        var jsonData = await response.json();

        var quote = jsonData["content"];
        var author = jsonData["author"];

    alert(myString);

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;
}