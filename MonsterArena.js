/* 
   Gary Thornberry 
   Course: CS102 
   Assignment: Monster Arena - JavaScript Game Logic 
*/

// Global variable that keeps track of the monster's total health points throughout the game session
let monsterHP = 100; 

// The core function that calculates combat results whenever the player submits an attack
function playRound(event) { 
    // This built-in method prevents the browser from refreshing the page, which would reset the game
    event.preventDefault(); 
    
    // Grabbing the hero's name from the input field to personalize the battle messages
    let playerName = document.getElementById("hero-name").value; 
    // Identifying the battle-log div so we can inject text based on the round results
    let log = document.getElementById("battle-log"); 
    // Selecting the specific span element that shows the numerical HP to the player
    let hpDisplay = document.getElementById("hp-number"); 
    
    // Uses Math.random to simulate a 20-sided die roll (1-20) for the attack's accuracy
    let attackPower = Math.floor(Math.random() * 20) + 1; 
    // Initializing the damage variable to zero before we calculate the outcome
    let damageDealt = 0; 
    // Creating an empty string to build our personalized combat narrative
    let attackMessage = ""; 

    // Decision structure to determine damage based on the RNG roll result
    if (attackPower >= 15) { 
        // If the roll is 15 or higher, the player scores a powerful critical strike
        damageDealt = 25; 
        attackMessage = "CRITICAL HIT! " + playerName + " dealt 25 damage!"; 
    } else if (attackPower >= 5) { 
        // If the roll is between 5 and 14, it is a standard successful hit
        damageDealt = 10; 
        attackMessage = playerName + " landed a hit for 10 damage."; 
    } else { 
        // If the roll is below 5, the attack fails completely and deals no damage
        damageDealt = 0; 
        attackMessage = "Oh no! " + playerName + " missed the attack!"; 
    } 

    // Subtracting the calculated damage from the monster's current remaining health points
    monsterHP = monsterHP - damageDealt; 

    // Updating the innerHTML of the log to show the player the story of their attack and their roll
    log.innerHTML = "<p>" + attackMessage + " (Roll: " + attackPower + ")</p>"; 

    // Safety check to ensure the monster's health never displays as a negative number
    if (monsterHP <= 0) { 
        // Locks the health at zero if the damage exceeds the remaining HP
        monsterHP = 0; 
    } 

    // Pushing the updated global health variable back into the HTML display for the user to see
    hpDisplay.innerHTML = monsterHP; 

    // Calling our secondary function and passing the new HP as an argument to update the monster's mood
    reportMonsterStatus(monsterHP); 
} 

// This function checks the monster's current health and provides visual feedback on its condition
function reportMonsterStatus(currentHP) { 
    // Locates the status-update area in the HTML document
    let statusDiv = document.getElementById("status-update"); 

    // Conditional logic to change the flavor text and colors based on how close the monster is to death
    if (currentHP <= 0) { 
        // If the monster is dead, display a green victory message to the player
        statusDiv.innerHTML = "<h2 style='color:green;'>VICTORY! The beast has been slain!</h2>"; 
    } else if (currentHP < 30) { 
        // If the monster is low on health, change the text to orange to signal the final phase
        statusDiv.innerHTML = "<p style='color:orange;'>The monster is wounded and desperate!</p>"; 
    } else { 
        // If the monster still has plenty of health, show a standard aggressive message
        statusDiv.innerHTML = "<p>The monster growls at you...</p>"; 
    } 
}