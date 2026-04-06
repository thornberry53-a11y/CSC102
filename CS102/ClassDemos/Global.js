// These variables live out here so they don't reset every time a function runs
let count = 0; 
let trueOrFalse = true; 

// Adds one to our tally and updates the screen
function plusOne() {
  count++; 
  document.getElementById("counter").innerHTML = "Count = " + count;
}

// Bumps the total up by two; using += is just a cleaner way to write it
function plusTwo() {
  count += 2; 
  document.getElementById("counter").innerHTML = "Count after 2+ " + count;
}

// Simple switches to flip our toggle variable
function booloff() {
  trueOrFalse = false;
}

function boolon() {
  trueOrFalse = true;
}

// Reports the current true/false state to the user
function boolstatus() {
  document.getElementById("counter").innerHTML = "The boolean is currently: " + trueOrFalse;
}