async function generateQuestion () {
    var cate = document.getElementById("categoryList").value;
    var diff = document.getElementById("difficultyList").value;

    document.getElementById("cateText").innerHTML = cate;
    document.getElementById("diffText").innerHTML = diff;
}