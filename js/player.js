const player = document.getElementById('player');

let posX = 100;
let posY = 0;

let velX = 0;
let velY = 0;

let isJumping = false;

const gravity = 0.5;
const jumpStrength = 12;
const acceleration = 0.5;
const friction = 0.85;
const maxSpeed = 5;

let keys = {};

document.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

function updatePlayer() {
  // Горизонтальное управление с инерцией
  if (keys['a']) {
    velX -= acceleration;
  }
  if (keys['d']) {
    velX += acceleration;
  }

  velX *= friction;

  // Ограничим максимальную скорость
  velX = Math.max(-maxSpeed, Math.min(maxSpeed, velX));

  if (keys[' '] && !isJumping) {
    velY = jumpStrength;
    isJumping = true;
  }

  velY -= gravity;

  posX += velX;
  posY += velY;

  if (posY < 0) {
    posY = 0;
    velY = 0;
    isJumping = false;
  }

  player.style.left = `${posX}px`;
  player.style.bottom = `${posY}px`;

  requestAnimationFrame(updatePlayer);
}

updatePlayer();
