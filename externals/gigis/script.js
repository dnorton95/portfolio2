const positionedAlert = document.getElementById("posAlert");

function removePositionedAlert() {
    positionedAlert.remove()
}

function affectMulti(clickedButton) {
    // Check the content of the clicked button
    var buttonText = clickedButton.textContent.trim();
    var menuText = clickedButton.textContent.trim();
    
    if (buttonText === "Placeholder 2" || buttonText === "Placeholder 4" || buttonText === "Placeholder 6" || buttonText === "Placeholder 8" || buttonText === "Placeholder 10")  {
        clickedButton.textContent = "Even Number"
    } 
    else if (buttonText === "Alternate Placeholder") {
        clickedButton.textContent = "This is not a number"
    }
    else {
        clickedButton.textContent = "Odd Number"
    }
}