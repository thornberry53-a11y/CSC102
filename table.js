/* 
   Gary W. Thornberry
   Equipment Maintenance Log
*/

// Wait for the document to fully load before attaching logic
document.addEventListener('DOMContentLoaded', function() {
    
    // Target the form element to capture the submission event
    const entryForm = document.getElementById('newRow');

    // Attach a listener to handle data when the user clicks the submit button
    entryForm.addEventListener('submit', function(event) {
        
        // Stop the browser from refreshing the page so we can see the new data
        event.preventDefault();

        // Access the specific input fields to grab the user's data
        var when = document.getElementById("date").value;
        var number = document.getElementById("number").value;
        var type = document.getElementById("type").value;

        // Find the main log table where the new information belongs
        var table = document.getElementById("runLog");

        // Create a fresh row and append it to the very bottom of the table (-1)
        var newRow = table.insertRow(-1);

        // Prepare three new cells within this row for our log details
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        // Populate the cells with the captured form values using innerHTML
        cell1.innerHTML = when;
        cell2.innerHTML = number;
        cell3.innerHTML = type;

        // Clear out the form fields so the user can easily enter the next piece of equipment
        entryForm.reset();
    });
});