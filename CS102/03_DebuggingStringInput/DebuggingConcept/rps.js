function RPS() {
    // get random numbers 1-3 for the players
    var player1 = Math.ceil(Math.random() * 3);
    var player2 = Math.ceil(Math.random() * 3);

    // image files from my folder
    var rockImage = "rock.png";
    var paperImage = "paper.png";
    var scissorsImage = "scissors.png";

    // logic for player 1 images
    if (player1 == 1) {
        document.getElementById("player1Image").src = rockImage;
    } else if (player1 == 2) {
        document.getElementById("player1Image").src = paperImage;
    } else {
        document.getElementById("player1Image").src = scissorsImage;
    }

    // logic for player 2 images
    if (player2 == 1) {
        document.getElementById("player2Image").src = rockImage;
    } else if (player2 == 2) {
        document.getElementById("player2Image").src = paperImage;
    } else {
        document.getElementById("player2Image").src = scissorsImage;
    }

    // check to see who won the round
    if (player1 == player2) {
        document.getElementById("result").innerHTML = "DRAW";
    } else if ((player1 == 1 && player2 == 3) || (player1 == 2 && player2 == 1) || (player1 == 3 && player2 == 2)) {
        document.getElementById("result").innerHTML = "player 1 wins!";
    } else {
        document.getElementById("result").innerHTML = "player 2 is the winner!";
    }
}