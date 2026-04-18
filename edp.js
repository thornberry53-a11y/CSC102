// Gary Thornberry 

// Global variables for movement
var intervalidID = 0; // Timer ID for the meme
var startTop = 350;    // Initial vertical position
var startLeft = 100;   // Initial horizontal position
var dleft = 7;         // Horizontal speed
var dtop = 7;          // Vertical speed

// Function to start the meme movement
function handleStartClick() {
    // Disable the start button to prevent stacking timers
    document.getElementById("startBtn").disabled = true; 
    // Enable the stop button
    document.getElementById("stopBtn").disabled = false; 

    // Only start if a timer isn't already running
    if (intervalidID == 0) {
        // Run the movement logic every 50ms
        intervalidID = setInterval(moveIt, 50); 
    }
}

// Logic for calculating the bouncing image movement
function moveIt() {
    // Find the image element
    var imageMeme = document.getElementById("memeImage"); 
    
    // Update the position on the screen
    imageMeme.style.top = startTop + "px"; 
    imageMeme.style.left = startLeft + "px"; 

    // Bounce horizontally if hitting window edges
    if ((startLeft + imageMeme.width >= window.innerWidth) || (startLeft <= 0)) {
        dleft = -dleft; 
    }

    // Bounce vertically if hitting window edges
    if ((startTop + imageMeme.height >= window.innerHeight) || (startTop <= 0)) {
        dtop = -dtop; 
    }

    // Increment coordinates for the next frame
    startTop += dtop; 
    startLeft += dleft; 
}

// Function to stop the movement
function handleStopClick() {
    // Turn the start button back on
    document.getElementById("startBtn").disabled = false; 
    // Turn the stop button off
    document.getElementById("stopBtn").disabled = true; 
    
    // Stop the interval and reset the ID
    clearInterval(intervalidID); 
    intervalidID = 0; 
}

// Palindrome check logic with recursive loop
function checkPalindrome(event) {
    // Stop the form from refreshing the page
    if (event) event.preventDefault(); 
    
    // Target the div where the message will appear
    var display = document.getElementById("msgArea"); 

    // Prompt the user for input
    var input = prompt("Please enter a word or phrase to check:");

    // Exit if the user clicks Cancel
    if (input === null) return;

    // Requirement: Remove spaces and make lowercase
    var cleanStr = input.replace(/\s+/g, "").toLowerCase();
    
    // Reverse the string for comparison
    var reversedStr = cleanStr.split("").reverse().join("");

    // Check if it's a palindrome and update the page via innerHTML
    if (cleanStr === reversedStr && cleanStr.length > 0) {
        display.innerHTML = "Success! <strong>" + input + "</strong> is a palindrome.";
    } else {
        display.innerHTML = "<strong>" + input + "</strong> is NOT a palindrome. Try again!";
    }

    // Pause briefly so the browser can actually show the innerHTML text 
    // while the next confirmation box is open
    setTimeout(function() {
        // Requirement: Give the user the option of entering another word
        var choice = confirm("Result updated! Check another word?");
        
        // If they click OK, the function calls itself (creating the loop)
        if (choice) {
            checkPalindrome(); 
        }
    }, 100); 
}