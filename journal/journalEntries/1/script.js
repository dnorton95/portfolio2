const haydenImage = document.getElementById('hayden');
const chrisImage = document.getElementById('chris');
const jesseImage = document.getElementById('jesse');

// Get reference to custom alert elements
const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeAlertButton = document.getElementById('closeAlert');

// Add event listeners for click on each image
haydenImage.addEventListener('click', function () {
    showAlert('Hayden is an excellent builder! They know that all buildings are just small boxes built into big boxes!');
});

chrisImage.addEventListener('click', function () {
    showAlert('Chris is the best painter and interior designer in town! But... because of Chris is so good at their job, they need extra special instructions so that they can know exactly what you want them to do!');
});

jesseImage.addEventListener('click', function () {
    showAlert('Jesse is very smart and can make anything that Hayden and Chris create into a something that actually works!');
});

// Function to show custom alert
function showAlert(message) {
    alertMessage.textContent = message;
    customAlert.style.display = 'block';
}

// Close the custom alert when the close button is clicked
closeAlertButton.addEventListener('click', function () {
    customAlert.style.display = 'none';
});

// room selector 
function showImage() {
    var inputText = document.getElementById("roomInput").value.toLowerCase();
    var imageContainer = document.getElementById("roomImage");
    var imagePath = "";

    switch (inputText) {
        case "kitchen":
            imagePath = "assets/hKitchen.png";
            break;
        case "living room":
            imagePath = "assets/hLivingRoom.png";
            break;
        case "bathroom":
            imagePath = "assets/hBathroom.png";
            break;
        case "bedroom":
            imagePath = "assets/hBedroom.png";
            break;
        default:
            imageContainer.innerHTML = "Hmm, I'm not sure you're ready to build this yet! Let's try one of the choices from above first!";
            return;
    }

    imageContainer.innerHTML = "<img src='" + imagePath + "' alt='" + inputText + "'>";
}
// room selector

function checkProtection() {
    var protection = document.querySelector('input[name="protection"]:checked');

    if (!protection) {
        alert("Please select an option.");
        return;
    }

    if (protection.value === "pepto" || protection.value === "putin") {
        alert("Oh boy... Well, some people just don't know how to use deductive reasoning, and that's okay too I guess. But you're definitely very wrong!");
    } else if (protection.value === "padding") {
        alert("CorrectoMundo dude!");
    }
}


const boxes = document.querySelectorAll('.boxcontainer');
const marginSelector = document.getElementById('marginSelector');

marginSelector.addEventListener('change', function(event) {
    const selectedMargin = event.target.value;
    boxes.forEach(box => {
        box.style.margin = `${selectedMargin}px`;
    });
});


function showImage2(roomType) {
    var imageContainer = document.getElementById("roomImage2");
    var imagePath = "";

    switch (roomType) {
        case "kitchen":
            imagePath = "assets/kitchen.jpg"
            break;
        case "livingroom":
            imagePath = "assets/living_room.jpg";
            break;
        case "bathroom":
            imagePath = "assets/bathroom.jpg";
            break;
        case "bedroom":
            imagePath = "assets/bedroom.jpg";
            break;
        case "house":
            imagePath = "assets/house.png";
            break;
        default:
            imageContainer.innerHTML = "Hmm, I'm not sure you're ready to build this yet! Let's try one of the choices from above first!";
            return;
    }

    imageContainer.innerHTML = "<img src='" + imagePath + "' alt='" + roomType + "'>";
}
console.log(showImage2(roomType))
