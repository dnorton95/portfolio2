function getSecondsSinceStartOfDay(timezone) {
    const now = new Date(new Date().toLocaleString("en-US", {timeZone: timezone}));
    return now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600;
}

function updateClockHands() {
    const seconds = document.getElementById("seconds");
    const minutes = document.getElementById("minutes");
    const hour = document.getElementById("hour");

    const timezone = document.getElementById("timezone").value;
    const secondsSinceStartOfDay = getSecondsSinceStartOfDay(timezone);

    const secondsRotation = (secondsSinceStartOfDay % 60) * 6;
    const minutesRotation = (secondsSinceStartOfDay / 60) * 6;
    const hourRotation = (secondsSinceStartOfDay / 3600 % 12) * 30;

    seconds.style.transform = `rotate(${secondsRotation}deg)`;
    minutes.style.transform = `rotate(${minutesRotation}deg)`;
    hour.style.transform = `rotate(${hourRotation}deg)`;
}

setInterval(updateClockHands, 1000);


function updateDigitalClock(timezone) {
    const now = new Date(new Date().toLocaleString("en-US", {timeZone: timezone}));
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const digitalClock = document.getElementById("digital-clock");
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Call updateDigitalClock initially to set the initial time
const initialTimezone = document.getElementById("timezone").value;
updateDigitalClock(initialTimezone);

// Update digital clock every second
setInterval(() => {
    const timezone = document.getElementById("timezone").value;
    updateDigitalClock(timezone);
}, 1000);

