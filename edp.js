// Gary Thornberry - UAT assignment for interactive web elements
// These global variables manage the persistent state and placement of moving elements
var intervalidID = 0; // Tracks the unique identifier for the movement timer
var startTop = 350;    // Sets the baseline vertical start position in pixels
var startLeft = 100;   // Sets the baseline horizontal start position in pixels
var dleft = 7;         // Defines the horizontal movement increment for each frame
var dtop = 7;          // Defines the vertical movement increment for each frame

// This function initiates the image animation and updates button accessibility
function handleStartClick() {
    // Disable the start button to prevent users from stacking multiple intervals
    document.getElementById("startBtn").disabled = true;
    // Enable the stop button so the user can terminate the movement
    document.getElementById("stopBtn").disabled = false;
    // Condition ensures a new timer only starts if one isn't already active
    if (intervalidID == 0) {
        // Establishes a recurring cycle that calls moveIt every 50 milliseconds
        intervalidID = setInterval(moveIt, 50);
    }
}

// Manages the coordinate calculations and collision detection for the image
function moveIt() {
    // References the specific image element by its unique identifier
    var imageMeme = document.getElementById("memeImage");
    // Dynamically updates the top position of the image in the DOM
    imageMeme.style.top = startTop + "px";
    // Dynamically updates the left position of the image in the DOM
    imageMeme.style.left = startLeft + "px";
    
    // Boundary check: Reverses horizontal direction if the image hits the viewport edges
    if ((startLeft + imageMeme.width >= window.innerWidth) || (startLeft <= 0)) {
        dleft = -dleft;
    }
    // Boundary check: Reverses vertical direction if the image hits the viewport edges
    if ((startTop + imageMeme.height >= window.innerHeight) || (startTop <= 0)) {
        dtop = -dtop;
    }
    
    // Increments the position variables based on the current direction and speed
    startTop += dtop;
    startLeft += dleft;
}

// Halts the active animation and restores the original button availability
function handleStopClick() {
    // Re-enables the start button for future use
    document.getElementById("startBtn").disabled = false;
    // Disables the stop button since the movement has ended
    document.getElementById("stopBtn").disabled = true;
    // Terminates the recurring execution of the moveIt function
    clearInterval(intervalidID);
    // Resets the interval tracker to its null state
    intervalidID = 0;
}

// Evaluates whether user input reads the same forward and backward
function checkPalindrome(event) {
    // Prevents the standard form submission from refreshing the entire page
    if (event) event.preventDefault();
    // Identifies the area where results will be visually displayed to the user
    var display = document.getElementById("msgArea");
    // Captures the current text value from the input field
    var input = document.getElementById("palInput").value;
    // Validates that the input is not empty before proceeding
    if (!input || input.trim() === "") return;
    
    // Normalizes the string by removing spaces and converting to lowercase for comparison
    var cleanStr = input.replace(/\s+/g, "").toLowerCase();
    // Creates a reversed version of the string using array transformation methods
    var reversedStr = cleanStr.split("").reverse().join("");
    
    // Core comparison to determine if the input qualifies as a palindrome
    if (cleanStr === reversedStr && cleanStr.length > 0) {
        // Updates the UI with a positive feedback message
        display.innerHTML = "Success! <strong>" + input + "</strong> is a palindrome.";
        // Creates a new Audio instance using a relative path to the sound file
        var successSound = new Audio('../Audio/Ring of Fire.mp3');
        // Triggers the playback of the success audio
        successSound.play();
    } else {
        // Updates the UI with failure feedback if the strings do not match
        display.innerHTML = "<strong>" + input + "</strong> is NOT a palindrome. Try again!";
    }
    // Resets the input field to an empty state for the next user attempt
    document.getElementById("palInput").value = "";
}

// Master event registration that triggers once the document is fully loaded
window.onload = function() {
    // Links the animation start logic to the start button's click event
    document.getElementById("startBtn").onclick = handleStartClick;
    // Links the animation termination logic to the stop button's click event
    document.getElementById("stopBtn").onclick = handleStopClick;
    // Links the palindrome evaluation logic to the form's submission event
    document.getElementById("palinForm").onsubmit = checkPalindrome;
};