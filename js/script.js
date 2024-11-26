/*
 * Write your own scripts in this file
 */




/*Checklist side*/
function toggleCheck(circle) {
    circle.classList.toggle("checked"); // Tilføjer eller fjerner klassen "checked"
}

let isStarted = false;
const FULL_DASH_ARRAY = 314; // Perimeteren af cirklen
const TIMER_DURATION = 10; // Timerens varighed i sekunder
let timeLeft = TIMER_DURATION;

const timerContainer = document.querySelector(".timer-container");
const timerText = document.querySelector(".timer-text");
const progressCircle = document.querySelector(".progress-ring__circle");

// Funktion til at opdatere cirklen
function setProgress(percent) {
    const offset = FULL_DASH_ARRAY - (percent / 100) * FULL_DASH_ARRAY;
    progressCircle.style.strokeDashoffset = offset;
}

// Funktion til at formatere tid (mm:ss)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Start timer
function startTimer() {
    const interval = setInterval(() => {
        if (timeLeft <= 0) {
            timerContainer.classList.remove('is-started');
            clearInterval(interval);
            timerText.textContent = "Done!";
            resetTimer();
        } else {
            timerContainer.classList.add('is-started');
            timeLeft--;
            timerText.textContent = formatTime(timeLeft);
            setProgress((timeLeft / TIMER_DURATION) * 100);
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = TIMER_DURATION;
    timerText.textContent = formatTime(TIMER_DURATION);
    setProgress(100); // Sæt progress til 100% fra starten
}

timerContainer.addEventListener('click', function () {
    resetTimer();
    startTimer();
})


