const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
 
  const bodyRef = document.querySelector('body');  
  const startBtnRef = document.querySelector('.start');
  const stopBtnRef = document.querySelector('.stop');

  startBtnRef.addEventListener('click', addColor);     
  
  function addColor() {
const integrId = setInterval(function() {
  let currentIndex = randomIntegerFromInterval(0,5); 
    bodyRef.style.background = colors[currentIndex];    
    stopBtnRef.addEventListener('click',event => {  
    clearInterval(integrId);    
  });    
}, 1000);
  }

  function randomIntegerFromInterval  (min, max)  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
// можно ли в качестве ID использовать this, а не делать переменную из setInterval? C this тоже работает.