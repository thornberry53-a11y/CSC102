/* Gary Thornberry - Event Driven Programming */

// Initialize global variables and DOM elements
const palinForm = document.getElementById('palinForm');
const msgArea = document.getElementById('msgArea');
const memeImage = document.getElementById('memeImage');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let intervalId = null;
let posX = 0;
let posY = 400;
let dirX = 5;
let dirY = 5;

// Handle palindrome form submission
palinForm.onsubmit = function(event) {
    event.preventDefault(); 
    
    // Clean input and compare to its reversed version
    const input = document.getElementById('palInput').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = input.split('').reverse().join('');
    
    // Output result to the message area
    if (input === "") {
        msgArea.innerHTML = "Please enter a word.";
    } else if (input === reversed) {
        msgArea.innerHTML = `<span class="success">"${input}" is a palindrome!</span>`;
    } else {
        msgArea.innerHTML = `<span class="error">Not a palindrome.</span>`;
    }
};

// Start image movement on click
startBtn.onclick = function() {
    startBtn.disabled = true;
    
    intervalId = setInterval(function() {
        // Update X and Y coordinates
        posX += dirX;
        posY += dirY;

        // Bounce horizontally at screen edges
        if (posX + memeImage.clientWidth >= window.innerWidth || posX <= 0) {
            dirX *= -1;
        }

        // Bounce vertically at screen edges
        if (posY + memeImage.clientHeight >= window.innerHeight || posY <= 0) {
            dirY *= -1;
        }

        // Apply position styles to the image
        memeImage.style.left = posX + "px";
        memeImage.style.top = posY + "px";
        
    }, 30);
};

// Stop image movement on click
stopBtn.onclick = function() {
    clearInterval(intervalId);
    startBtn.disabled = false;
};