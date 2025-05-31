let clickCount = 0;
let lastClickTime = null;

const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.addEventListener('click', () => {
  
  clickCount++;
  counter.textContent = clickCount;

  
  if (cookie.width === 200) {
    cookie.width = 180;
  } else {
    cookie.width = 200;
  }

  
});
