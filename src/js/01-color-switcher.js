function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  const body = document.body;
  
  let intervalId;
  
  function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
  }
  
  function handleButtonClick(event) {
    if (event.target === startButton) {
      startButton.disabled = true;
      stopButton.disabled = false;
      intervalId = setInterval(changeBackgroundColor, 1000);
    } else if (event.target === stopButton) {
      startButton.disabled = false;
      stopButton.disabled = true;
      clearInterval(intervalId);
    }
  }
  
  stopButton.disabled = true;

  startButton.addEventListener('click', handleButtonClick);
  stopButton.addEventListener('click', handleButtonClick);