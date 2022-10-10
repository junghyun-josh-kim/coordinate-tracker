const verticalLine = document.querySelector('.vertical');
const horizontalLine = document.querySelector('.horizontal');
const targetImg = document.querySelector('.img');
const coordinate = document.querySelector('span');

window.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  verticalLine.style.left = `${x}px`;
  horizontalLine.style.top = `${y}px`;
  targetImg.style.top = `${y}px`;
  targetImg.style.left = `${x}px`;
  coordinate.innerText = `${x}px, ${y}px`;
  coordinate.style.top = `${y}px`;
  coordinate.style.left = `${x}px`;
});
