export{}
async function getBaconipsum() {
    // first build the API call string by starting with the URL
    var apiString: string = "https://baconipsum.com/api/";
    // next add the parameters to the string using the drop down lists
    var theNewParagraphs = (<HTMLInputElement>document.getElementById("newParagraphs")).value;
    // asks the user for either all meat or meat and filler
    var allMeat = (<HTMLInputElement>document.getElementById("allMeat")).value;
    apiString = apiString + "?type=" + allMeat + "&paras=" + theNewParagraphs;

    // now make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);

    // finally, print the response in the various formats
    (<HTMLInputElement>document.getElementById("myRawData")).innerHTML = ""; //clear what was previously shown
    (<HTMLInputElement>document.getElementById("myFormattedData")).innerHTML = ""; //clear what was previously shown

    var jsonData = await response.json(); // read the response as JSON

    // stringify and print out the JSON object in the RawData section
    (<HTMLInputElement>document.getElementById("myRawData")).innerHTML = JSON.stringify(jsonData);

    // looop through the JSON object one paragraph at a time and print each in the FormattedData section
    for (var para in jsonData) {
        (<HTMLInputElement>document.getElementById("myFormattedData")).innerHTML += "<p>" + jsonData[para] + "</p>";
    }

    caesar();

    return true;
}

// Function for encription
function caesar() {
    var plainText = (<HTMLInputElement>document.getElementById("myFormattedData")).innerHTML;
    var encrText = "";
    var alpha = "abcdefghijklmnopqrstuvwxyz .";
    var newText = "";
    
    var lowerText = plainText.toLowerCase(); // set the string to lowercase
    
        // check each letter in the plain text to see if its in the alphabet and adds it to a new string
    for (var i = 0; i < lowerText.length; i++){
        for (var j = 0; j < alpha.length; j++){
            if(lowerText[i].includes(alpha[j])) {
                newText += lowerText[i];
            }
        }
    }

        // takes the new string and does the ceaser encryption
    for (var ch = 0; ch < newText.length; ch++) {
        var newLetter = newText.charCodeAt(ch) + 15;
        if(newLetter - 15 == 32){ // checks to see if the character is a space
            encrText += " ";
        } else if(newLetter - 15 == 46){
            encrText += ".";
        } else if(newLetter > 122) {
            newLetter = newLetter - 26;
            var encrLetter = String.fromCharCode(newLetter);
            encrText += encrLetter;
        } else if(newLetter < 122) {
            var encrLetter = String.fromCharCode(newLetter);
            encrText += encrLetter;
        }
    }
        (<HTMLInputElement>document.getElementById("spicyText")).innerHTML = encrText;
}