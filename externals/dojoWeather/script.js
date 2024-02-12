function weatherAlert() {
    alert("We're sorry, this function is currently unavailable.")
}

const cookieAlert = document.getElementById("cookie-alert");
const agreeButton = document.getElementById("agree-button");

function removeCookie() {
    cookieAlert.remove()
}

var temps = document.querySelectorAll(".temp");

console.log(highTemp)
console.log(lowTemp)

function convert() {
    var dropDown = document.getElementById("measurement")
    console.log(dropDown.value);
    console.log(temps.length);

    if (dropDown.value === 'Fahrenheit') {
        for (var i = 0; i < temps.length; i++) {
            console.log(temps[i].textContent);
            // Plug the number into the formula
            var low = temps[i].textContent;
            low = (low * 9 / 5) + 32;
            temps[i].textContent = Math.round(low);
        }
    }
    else {
        for (var i = 0; i < temps.length; i++) {
            console.log(temps[i].textContent);
            // Plug the number into the formula
            var low = temps[i].textContent;
            low = (low - 32) * (5 / 9);
            temps[i].textContent = Math.round(low);
        }
    }
}

