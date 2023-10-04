import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const datetimePicker = document.getElementById("datetime-picker");

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      window.alert("Please choose a date in the future");
      datetimePicker.value = ""; 
    } else {
      startButton.disabled = false; 
    }
  },
});

function showAlert(message) {
    Notiflix.Notify.warning(message);
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
  }

  const startButton = document.querySelector('[data-start]');
  const timerFields = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  };
  
  let countdownInterval; 

function updateTimerDisplay(time) {
  timerFields.days.textContent = addLeadingZero(time.days);
  timerFields.hours.textContent = addLeadingZero(time.hours);
  timerFields.minutes.textContent = addLeadingZero(time.minutes);
  timerFields.seconds.textContent = addLeadingZero(time.seconds);
}

startButton.disabled = true;

startButton.addEventListener('click', () => {
  const selectedDate = datetimePicker._flatpickr.selectedDates[0];
  const currentDate = new Date();
  if (selectedDate > currentDate) {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      const timeDifference = selectedDate - currentDate; 
      const timeLeft = convertMs(timeDifference);
      updateTimerDisplay(timeLeft);
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        showAlert("Time's up!");
      }
      currentDate.setSeconds(currentDate.getSeconds() + 1);
    }, 1000);
  }
});