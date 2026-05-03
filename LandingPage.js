/* 
   Gary W Thornberry
*/



// 1. USER VALIDATION HANDLER
const validationForm = document.getElementById('validationForm');
if (validationForm) {
    validationForm.onsubmit = function(event) {
        // Prevent the default form submission to handle logic with JS
        event.preventDefault(); 
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const zipCode = document.getElementById('zipCode').value;
        const resultDisplay = document.getElementById('validationResult');
        
        const fullName = firstName + " " + lastName;

        // Validation Logic: Full name must be <= 20 characters, Zip must be exactly 5 digits
        if (fullName.length <= 20 && zipCode.length === 5 && !isNaN(zipCode)) {
            // Using innerHTML for the success message (no alerts allowed)
            resultDisplay.innerHTML = `<p class="success">Access Granted. Welcome, ${fullName}!</p>`;
        } else {
            // Using innerHTML for the error message
            resultDisplay.innerHTML = `<p class="error">Invalid input. Ensure name is under 20 chars and Zip is 5 digits.</p>`;
        }
        
        return false; // Secondary backup to prevent form submission
    };
}

// 2. MEME GENERATOR HANDLER
const memeForm = document.getElementById('memeForm');
if (memeForm) {
    memeForm.onsubmit = function(event) {
        event.preventDefault();

        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const memeDisplay = document.getElementById('memeDisplay');

        // Dynamically building the meme structure using innerHTML
        memeDisplay.innerHTML = `
            <div class="meme-container">
                <img src="${imageUrl}" alt="Meme Image" style="width:100%">
                <h2 class="top-text">${topText}</h2>
                <h2 class="bottom-text">${bottomText}</h2>
            </div>
        `;
        
        return false;
    };
}