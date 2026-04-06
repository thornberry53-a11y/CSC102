// Keeps track of the monster's total health across the game
let monsterHP = 100;

// Runs the combat logic when the player clicks the attack button
function playRound(event) {
  // Stops the page from refreshing when the form submits
  event.preventDefault();

  // Pulling values and elements from the HTML
  let playerName = document.getElementById("hero-name").value;
  let log = document.getElementById("battle-log");
  let hpDisplay = document.getElementById("hp-number");

  // Rolling a random number between 1 and 20 to determine the hit
  let attackPower = Math.floor(Math.random() * 20) + 1;

  let damageDealt = 0;
  let attackMessage = "";

  // Calculating damage based on how high the roll was
  if (attackPower >= 15) {
    damageDealt = 25;
    attackMessage = "CRITICAL HIT! " + playerName + " dealt 25 damage!";
  } else if (attackPower >= 5) {
    damageDealt = 10;
    attackMessage = playerName + " landed a hit for 10 damage.";
  } else {
    damageDealt = 0;
    attackMessage = "Oh no! " + playerName + " missed the attack!";
  }

  // Subtracting the damage from the global health total
  monsterHP = monsterHP - damageDealt;

  // Showing the attack result and the roll value in the log
  log.innerHTML = "<p>" + attackMessage + " (Roll: " + attackPower + ")</p>";

  // Making sure health doesn't display as a negative number
  if (monsterHP <= 0) {
    monsterHP = 0;
  }

  // Updating the health number on the screen
  hpDisplay.innerHTML = monsterHP;

  // Passing the current health to the status checker function
  reportMonsterStatus(monsterHP);
}

// Checks the health level and updates the flavor text on the page
function reportMonsterStatus(currentHP) {
  let statusDiv = document.getElementById("status-update");

  // Logic for different health stages
  if (currentHP <= 0) {
    statusDiv.innerHTML = "<h2 style='color:green;'>VICTORY! The beast has been slain!</h2>";
  } else if (currentHP < 30) {
    statusDiv.innerHTML = "<p style='color:orange;'>The monster is wounded and desperate!</p>";
  } else {
    statusDiv.innerHTML = "<p>The monster growls at you...</p>";
  }
}