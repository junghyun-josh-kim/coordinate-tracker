const body = document.querySelector('body');
const lineX = document.querySelector('.x');
const lineY = document.querySelector('.y');
const target = document.querySelector('i');
const text = document.querySelector('#text');

body.addEventListener('mousemove', (event) => {
  text.innerText = `${event.pageX}px, ${event.pageY}px`;
  text.style.top = `${event.pageY}px`;
  text.style.left = `${`${event.pageX}px`}`;
  lineX.style.top = `${event.pageY}px`;
  lineY.style.left = `${event.pageX}px`;
  target.style.top = `${event.pageY}px`;
  target.style.left = `${event.pageX}px`;
});
