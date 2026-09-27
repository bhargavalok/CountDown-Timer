const targetDate = new Date("2026-10-10T23:59:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const statusElement = document.getElementById("countdownStatus");

let timerId;

const pad = (value) => String(value).padStart(2, "0");

const updateValue = (element, value) => {
    const nextValue = pad(value);

    if (element.textContent === nextValue) {
        return;
    }

    element.textContent = nextValue;
    element.classList.remove("tick");
    void element.offsetWidth;
    element.classList.add("tick");
};

const showZero = () => {
    updateValue(daysElement, 0);
    updateValue(hoursElement, 0);
    updateValue(minutesElement, 0);
    updateValue(secondsElement, 0);
};

const clock = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        showZero();
        statusElement.textContent = "We're back!";
        clearInterval(timerId);
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;

    updateValue(daysElement, days);
    updateValue(hoursElement, hours);
    updateValue(minutesElement, minutes);
    updateValue(secondsElement, seconds);

    statusElement.textContent = "Counting down...";
};

clock();
timerId = setInterval(clock, 1000);
