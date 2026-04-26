/* 
   Gary Thornberry - CS102 Assignment 2.3
   This script handles string manipulation, validation, and audio feedback.
*/

// Function to validate the input and check for palindromes
function checkPalindrome(event) {
    // Stops the default page refresh so we can update the page content dynamically
    if (event) event.preventDefault();
    
    // Grabbing the result area to display messages directly on the page
    var display = document.getElementById("msgArea");
    // Capturing user input from the form field
    var input = document.getElementById("palInput").value;
    
    // String Manipulation: Removing spaces and forcing lowercase for accurate comparison
    var cleanStr = input.replace(/\s+/g, "").toLowerCase();
    // String Manipulation: Reversing the cleaned string to test symmetry
    var reversedStr = cleanStr.split("").reverse().join("");
    
    // Decision Logic: Comparing original and reversed strings to identify palindromes
    if (cleanStr === reversedStr && cleanStr.length > 0) {
        // Updating the display area with a success message for the user
        display.innerHTML = "Success! <strong>" + input + "</strong> is a palindrome.";
        // Triggering a specific sound file when a palindrome is found
        var successSound = new Audio('../Audio/Ring of Fire.mp3');
        successSound.play();
    } else {
        // Providing clear feedback if the input does not meet palindrome criteria
        display.innerHTML = "<strong>" + input + "</strong> is NOT a palindrome. Try again!";
    }
    // Cleaning the input field so it's ready for the next test attempt
    document.getElementById("palInput").value = "";
}

// Support functions for navigation and page interaction
function showPopup() { alert("Dr. Jill Has Taught Me So Much"); }
function goToMath() { location.replace("math.html"); }
function refreshPage() { location.reload(); }
function openArena() { window.open("MonsterArena.html"); }

// Script initialization to connect HTML elements to their logic after the DOM is ready
window.onload = function() {
    // Links the form's submit action to our palindrome verification function
    document.getElementById("palinForm").onsubmit = checkPalindrome;
    // Connecting individual buttons to their specific functions via the onclick property
    document.getElementById("pop").onclick = showPopup;
    document.getElementById("replace").onclick = goToMath;
    document.getElementById("reload").onclick = refreshPage;
    document.getElementById("new").onclick = openArena;
}