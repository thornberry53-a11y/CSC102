function changeWidth()
{
    // Rubber Ducking: I'm telling the computer to find the button named "wide" 
    // and save it as a variable so I don't have to keep typing it out.
    var Wbutton = document.getElementById("wide");
    
    // Backtracking: If this doesn't move, I check if "500px" has quotes. 
    // Without quotes, the computer doesn't know the unit!
    Wbutton.style.width = 500 + "px";
    Wbutton.style.color = "white";
    Wbutton.style.backgroundColor = "teal";

}