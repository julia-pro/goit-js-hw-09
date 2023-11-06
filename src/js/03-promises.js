import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { amount, step, delay } = evt.target.elements;
  let amountVal = Number(amount.value);
  let stepVal = Number(step.value);
  let delayVal = Number(delay.value);
  
  let currentDelay = delayVal;
  
  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, currentDelay).then(({ position, delay }) => {
      Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    currentDelay += stepVal;
  }
}