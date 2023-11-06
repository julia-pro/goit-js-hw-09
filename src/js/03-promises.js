const formEl = document.querySelector('.form')


function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        res({ position, delay });
      } else {
        // Reject
        rej({ position, delay });
      }
    }, delay);
    })
}

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { amount, step, delay } = evt.target.elements;
  let amountVal = Number(amount.value);
  let stepVal = Number(step.value);
  let delayVal = Number(delay.value);
  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, delayVal).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}