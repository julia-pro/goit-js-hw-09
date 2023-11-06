import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');
const daysEl = timerEl.querySelector('[data-days]');
const hoursEl = timerEl.querySelector('[data-hours]');
const minutesEl = timerEl.querySelector('[data-minutes]');
const secondsEl = timerEl.querySelector('[data-seconds]');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose([selectedDates]) {
        if (selectedDates < Date.now()) {
            //console.log(selectedDates);
            btnEl.disabled = true;
            Notiflix.Notify.warning('Please choose a date in the future');;
            return
        }
        btnEl.disabled = false;
  },
};

function updTimer({ days = 0, hours = 0, minutes = 0, seconds = 0 } = {}) {
    daysEl.textContent = padStart(days);
    hoursEl.textContent = padStart(hours);
    minutesEl.textContent = padStart(minutes);
    secondsEl.textContent = padStart(seconds);
};


flatpickr(inputEl, options);
let intervalID = null;

btnEl.addEventListener(`click`, onClick);


function onClick() {
    let ms = new Date(inputEl.value).getTime() - Date.now();
    intervalID = setInterval(() => {
        ms -= 1000;
        if (ms <= 1000) {
            clearInterval(intervalID);
            updTimer();
        }
        const date = convertMs(ms);
        updTimer(date); 
    }, 1000);
}


function padStart(value) {
    return value.toString().padStart(2, "00")
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}