function getRandomLightColor() {
  const r = Math.floor(Math.random() * 128) + 128;
  const g = Math.floor(Math.random() * 128) + 128;
  const b = Math.floor(Math.random() * 128) + 128;
  return `rgba(${r}, ${g}, ${b},0.2)`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomLightColor();
}

document.addEventListener("DOMContentLoaded", changeBackgroundColor);
