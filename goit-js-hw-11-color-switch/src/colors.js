const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const bodyRef = document.querySelector('body');  
  const startBtnRef = document.querySelector('.start');
  const stopBtnRef = document.querySelector('.stop');
  

  const color = colors.forEach(el => 
    console.log(el)); 
//   function addColor() {
//       console.log('ooooo');
//      const inegrId = setInterval(color,1000, color =>
//     body.style.background = color.el
//     );  
//   }  
  const addColor = () => {
    setInterval(() => {
        console.log('uuuuuu');

    }, 1000);
  };
  startBtnRef.addEventListener('click', addColor);
  function ddd(params) {
      
  }
  const color = colors.forEach(el => {
    console.log(color.el);
bodyRef.style.background = color.el;
