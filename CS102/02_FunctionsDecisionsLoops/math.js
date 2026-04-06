/*Gary Thornberry, 4/02/26, CS102, Assignment 2.3,*/
// this is the main function for the golf game
function playGolf() {
  // getting the name from the input box
  var name = document.getElementById("playerName").value;
  
  var golfball1;
  var golfball2;

  // picking my random numbers for the balls
  golfball1 = Math.ceil(Math.random() * 20); 
  golfball2 = Math.ceil(Math.random() * 10);

  // putting the balls on the screen
  document.getElementById("golfballs").innerHTML = "Golf ball 1: " + golfball1 + "<br>" + "Golf ball 2: " + golfball2;

  // showing the final sum
  var total = golfball1 + golfball2;
  document.getElementById("result").innerHTML = "The sum of the two golf balls is: " + total;

  // checking if the player won or lost
  if (total == 21 || total == 7) {
    document.getElementById("result").innerHTML += "<br>Congratulations! You have a sum of " + total + "!";
  } 
  else if (total > 21) {
    document.getElementById("result").innerHTML = "You lose! The sum of the two golf balls is: " + total;
  } 
  else {
    document.getElementById("result").innerHTML = "Push =No win/no lose";
  }

  // this calls the second function with the name parameter
  welcomeUser(name);
}

// this function says hi to the player
function welcomeUser(player) {
  // showing the name at the bottom of the page
  document.getElementById("greetingArea").innerHTML = "Thanks for playing, " + player + "!";
}