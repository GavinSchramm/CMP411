async function generateQuestion () {
    var cate = document.getElementById("categoryList").value;
    var diff = document.getElementById("difficultyList").value;

    var apiString = "https://opentdb.com/api.php?amount=1&type=multiple";

    if (cate != "") {
        apiString += "&category=" + cate;
    }

    if (diff != "") {
        apiString += "&difficulty=" + diff;
    }

    var response = await fetch(apiString);

    var jsonData = await response.json();

    var results = jsonData["results"];

    var catText = results[0].category;
    var difText = results[0].difficulty;
    var question = results[0].question;
    var corAns = results[0].correct_answer;
    var wroAns = results[0].incorrect_answers;

    document.getElementById("cateText").innerHTML = catText;
    document.getElementById("diffText").innerHTML = difText;
    document.getElementById("quesText").innerHTML = question;
    document.getElementById("cAnsText").innerHTML = corAns;
    document.getElementById("wAnsText").innerHTML = wroAns;
}