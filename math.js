/* 
   Gary Thornberry 
   Date: 4/02/26 
   Course: CS102 
   Assignment 2.3 
   Project: Golf Ball Sum Challenge logic
*/

// This is the main function that kicks off the game logic when the play button is clicked
function playGolf() {
    // Looks into the HTML and pulls out whatever name the user typed into the text box
    var name = document.getElementById("playerName").value;
    
    // Initializing these variables to hold the random values we're about to generate
    var golfball1;
    var golfball2;
    
    // Uses Math.random to get a decimal, scales it to 20, then rounds up for a whole number 1-20
    golfball1 = Math.ceil(Math.random() * 20);
    // Scales this ball to 10 and rounds up so the number is between 1 and 10
    golfball2 = Math.ceil(Math.random() * 10);
    
    // Updates the HTML paragraph to show exactly what numbers were "rolled" for both balls
    document.getElementById("golfballs").innerHTML = "Golf ball 1: " + golfball1 + "<br>" + "Golf ball 2: " + golfball2;
    
    // Adds both ball values together and stores it in the total variable for comparison
    var total = golfball1 + golfball2;
    
    // Prints the combined sum to the result div so the user can see their score
    document.getElementById("result").innerHTML = "The sum of the two golf balls is: " + total;
    
    // Using an if statement to check if the total matches our winning numbers of 7 or 21
    if (total == 21 || total == 7) {
        // Appends a win message to the result area if they hit the target numbers
        document.getElementById("result").innerHTML += "<br>Congratulations! You have a sum of " + total + "!";
    } 
    // Checks if the score went over 21, which triggers a losing message
    else if (total > 21) {
        // Overwrites the result area to let the user know they busted
        document.getElementById("result").innerHTML = "You lose! The sum of the two golf balls is: " + total;
    } 
    // If the score wasn't a win and wasn't a bust, it defaults to a push/neutral result
    else {
        // Informs the player that they didn't win or lose on this round
        document.getElementById("result").innerHTML = "Push = No win/no lose";
    }
    
    // This part triggers my second function and passes the user's name as an argument
    welcomeUser(name);
}

// A secondary function designed specifically to handle user interaction and greetings
function welcomeUser(player) {
    // Takes the player name parameter and injects it into a thank you message at the bottom
    document.getElementById("greetingArea").innerHTML = "Thanks for playing, " + player + "!";
}