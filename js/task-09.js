
const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorBaground = document.querySelector('.color');
btn.addEventListener('click', change_color);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function change_color() {
  const colorspan = getRandomHexColor();
  bodyEl.style.backgroundColor = colorspan;
  colorBaground.textContent = colorspan;
}
