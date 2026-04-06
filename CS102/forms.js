function checkCreds() {
    // gotta grab everything they typed into the boxes
    // i made sure these match the fName, lName, etc from the html
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var employeeNum = document.getElementById("empNum").value;
    var pass = document.getElementById("PW").value;

    // sticking the names together for the welcome message later
    var fullName = firstName + " " + lastName;

    // only checking the number and password now
    // this way you can type any name you want in the first two boxes!
    if (employeeNum === "12345" && pass === "password") {
        
        alert("Login successful!");
        
        // update the status line with the name they actually typed in
        document.getElementById("status").innerHTML = "Welcome, " + fullName + "! Your employee number is " + employeeNum + ".";
        
        // send them to the next page
        location.replace("nav1.html");

    } else {
        // what to do if the password or number is wrong
        alert("Invalid credentials. Please try again.");
        document.getElementById("status").innerHTML = "Login failed - try again.";
    }
}