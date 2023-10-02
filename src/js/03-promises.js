import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const submit = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    
    const shouldResolve = Math.random() > 0.3;
    
      setTimeout(() => {
      if (shouldResolve) {
        
      resolve({ position, delay });
      } else {
        
        reject({ position, delay });
      }
    }, delay);
  });
}


formEl.addEventListener('submit', onclick);

function onclick(event) {
  
  event.preventDefault();

  const amountValue = parseInt(amount.value, 10);
  const initialDelayValue = parseInt(delay.value, 10);
  const stepValue = parseInt(step.value, 10);

  for (let i = 0; i < amountValue; i += 1) {
  
    createPromise(i + 1, initialDelayValue + (i * stepValue))
      .then((result) => {
        
        Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
      })
      .catch((result) => {
        
        Notiflix.Notify.failure(`❌ Rejected promise ${result.position} in ${result.delay}ms`);
      });
  }
}