const player = document.getElementById('player');

let posX = 100;
let posY = 0;
let velY = 0;
let isJumping = false;
const gravity = 0.5;
const jumpStrength = 12;
const speed = 4;

let keys = {};

document.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

function updatePlayer() {
  // Горизонтальное движение
  if (keys['a']) posX -= speed;
  if (keys['d']) posX += speed;

  // Прыжок
  if (keys[' '] && !isJumping) {
    velY = -jumpStrength;
    isJumping = true;
  }

  // Гравитация
  velY += gravity;
  posY += velY;

  // Столкновение с полом
  if (posY > 0) {
    posY = 0;
    velY = 0;
    isJumping = false;
  }

  player.style.left = `${posX}px`;
  player.style.bottom = `${posY}px`;

  requestAnimationFrame(updatePlayer);
}

updatePlayer();