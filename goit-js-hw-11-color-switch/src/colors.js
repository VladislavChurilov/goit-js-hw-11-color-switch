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
  
}, 1000);
  stopBtnRef.addEventListener('click',event => {  
    clearInterval(integrId);      
  });
}  

  function randomIntegerFromInterval  (min, max)  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
