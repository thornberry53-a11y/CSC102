// Gary Thornberry
var intervalidID = 0; // Stores the interval timer ID
var startTop = 350;   // Initial vertical coordinate
var startLeft = 100;  // Initial horizontal coordinate
var dleft = 7;        // Horizontal speed/direction
var dtop = 7;         // Vertical speed/direction

// Requirement: No inline JS in HTML and No addEventListeners (using DOM Level 0)
window.onload = function() {
    // This sets the image position IMMEDIATELY when the page opens
    var imageMeme = document.getElementById("memeImage");
    imageMeme.style.top = startTop + "px";
    imageMeme.style.left = startLeft + "px";
    
    // Assigns function to the start button click event
    document.getElementById("startBtn").onclick = handleStartClick;
    // Assigns function to the stop button click event
    document.getElementById("stopBtn").onclick = handleStopClick;
    // Assigns function to the form submit event
    document.getElementById("palinForm").onsubmit = checkPalindrome;
};

// Logic for starting the movement
function handleStartClick() {
    document.getElementById("startBtn").disabled = true; // Disable start to prevent multiple timers
    document.getElementById("stopBtn").disabled = false; // Enable stop button
    if (intervalidID == 0) { // Only start if not already running
        intervalidID = setInterval(moveIt, 50); // Set interval for 50ms
    }
}

// Logic for moving the image
function moveIt() {
    var imageMeme = document.getElementById("memeImage"); // Get image element
    imageMeme.style.top = startTop + "px"; // Update top position
    imageMeme.style.left = startLeft + "px"; // Update left position

    // Reverse horizontal direction if hitting window edges
    if ((startLeft + imageMeme.width >= window.innerWidth) || (startLeft <= 0)) {
        dleft = -dleft;
    }
    // Reverse vertical direction if hitting window edges
    if ((startTop + imageMeme.height >= window.innerHeight) || (startTop <= 0)) {
        dtop = -dtop;
    }
    startTop += dtop; // Increment top coordinate
    startLeft += dleft; // Increment left coordinate
}

// Logic for stopping the movement
function handleStopClick() {
    document.getElementById("startBtn").disabled = false; // Enable start button
    document.getElementById("stopBtn").disabled = true; // Disable stop button
    clearInterval(intervalidID); // Clear the interval timer
    intervalidID = 0; // Reset timer ID
}

// Logic for palindrome validation
function checkPalindrome(event) {
    event.preventDefault(); // Requirement: use form submit without page reload
    var input = document.getElementById("palinInput").value; // Get text from input
    var display = document.getElementById("msgArea"); // Reference the display area

    // Requirement: use innerHTML for user validation (no alerts)
    if (input.length === 0) {
        display.innerHTML = "Please enter a word!"; // Error message if empty
        return;
    }

    var reversed = input.split("").reverse().join(""); // Reverse the string
    if (input.toLowerCase() === reversed.toLowerCase()) {
        display.innerHTML = input + " is a palindrome!"; // Success message
    } else {
        display.innerHTML = input + " is NOT a palindrome."; // Failure message
    }
}