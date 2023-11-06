function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  const bodyEl = document.body;
  const btnStartEl = document.querySelector('[data-start]');
  const btnStopEl = document.querySelector('[data-stop]');
  
  let intervalID = null;
  
  btnStartEl.addEventListener('click', () => {
      toggleBTN(true)
      intervalID = setInterval(() => {
          bodyEl.style.background = getRandomHexColor()
      }, 1000)
  });
  
  btnStopEl.addEventListener('click', () => {
      toggleBTN(false);
      clearInterval(intervalID);
  });
  
  function toggleBTN(bool) {
      btnStartEl.disabled = bool;
      btnStopEl.disabled = !bool;
  }
