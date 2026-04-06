function chckpattern()
{
    var people = document.getElementById("people").value;
    if ( (people.length < 3) || (people.length > 20) )
    {
        document.getElementById("status").innerHTML = "Invalid # of people.";
        
    }
    location.assign("forms1.html");
}