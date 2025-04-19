const playerElement = document.getElementById('player');

let playerState = {
  x: 100,
  y: 0,
  velX: 0,
  velY: 0,
  isJumping: false,
  width: playerElement.offsetWidth,
  height: playerElement.offsetHeight
};

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
  // Управление
  if (keys['a']) playerState.velX -= acceleration;
  if (keys['d']) playerState.velX += acceleration;

  playerState.velX *= friction;
  playerState.velX = Math.max(-maxSpeed, Math.min(maxSpeed, playerState.velX));

  if (keys[' '] && !playerState.isJumping) {
    playerState.velY = jumpStrength;
    playerState.isJumping = true;
  }

  // Гравитация
  playerState.velY -= gravity;

  // Обновляем позицию
  playerState.x += playerState.velX;
  playerState.y += playerState.velY;

  // Коллизии от мира
  playerState = world.checkCollisions(playerState);

  // Отображение
  playerElement.style.left = `${playerState.x}px`;
  playerElement.style.bottom = `${playerState.y}px`;

  requestAnimationFrame(updatePlayer);
}

updatePlayer();
