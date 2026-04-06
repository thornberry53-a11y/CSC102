var numText = "";

function forLoop() {
    numText = "";
    var i;
    for (i = 1; i < 17; i++) {
        numText += i + " ";
    }
    document.getElementById("outputloop").innerHTML = "the updated string is " + numText;
}

function whileLoop() {
    var text2 = "";
    var i = 1;
    while (i < 7) {
        text2 += i + " ";
        i++;
    }
    document.getElementById("outputloop").innerHTML = "while loop output: " + text2;
}

function doLoop() {
    var text3 = "";
    var i = 1;
    do {
        text3 += i + " ";
        i++;
    } while (i < 7);
    document.getElementById("outputloop").innerHTML = "do loop output: " + text3;
}