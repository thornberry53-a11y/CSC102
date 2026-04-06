// Function to validate all inputs at once upon form submission 
function validateForm() { 
    // Accessing the first name value from the HTML input field
    var firstName = document.getElementById("firstName").value; 
    // Accessing the last name value from the HTML input field
    var lastName = document.getElementById("lastName").value; 
    // Accessing the zip code value from the HTML input field
    var zip = document.getElementById("zipCode").value; 

    // Identifying the div where we will display status updates via innerHTML 
    var status = document.getElementById("statusUpdate"); 

    // Combining first name, a space, and last name into a single variable 
    var fullName = firstName + " " + lastName; 

    // Check 1: Verify if the combined name is longer than 20 characters
    if (fullName.length > 20) { 
        // Display a specific error message using innerHTML 
        status.innerHTML = "Warning: Full name must be 20 characters or less."; 
        // Changing the text color to red for the warning
        status.style.color = "red"; 
        // Returning false to stop the form from refreshing the page
        return false; 
    } 

    // Check 2: Verify if the zip code is exactly 5 digits and is a number
    if (zip.length !== 5 || isNaN(zip)) { 
        // Display a zip code error message using innerHTML 
        status.innerHTML = "Warning: Zip code must be exactly 5 digits."; 
        // Setting the status text color to red
        status.style.color = "red"; 
        // Returning false to stop the form from refreshing the page
        return false; 
    } 

    // If both checks pass, display the secret message to the user
    status.innerHTML = "Success! The secret code is: 'EMERALD FOREST 2026'"; 
    // Setting the success message color to green
    status.style.color = "green"; 

    // Creative Element: Change the page background to a soft success blue 
    document.body.style.backgroundColor = "#E0F7FA"; 

    // Final return false to ensure the page doesn't reload after success
    return false;
}