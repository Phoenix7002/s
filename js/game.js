const container = document.getElementById('game-container');

const world = {
  width: container.clientWidth,
  height: container.clientHeight,

  checkCollisions: function (playerState) {
    const playerSize = {
      width: playerState.width,
      height: playerState.height,
    };

    // Нижняя граница (пол)
    if (playerState.y < 0) {
      playerState.y = 0;
      playerState.velY = 0;
      playerState.isJumping = false;
    }

    // Верхняя граница (потолок)
    if (playerState.y + playerSize.height > this.height) {
      playerState.y = this.height - playerSize.height;
      playerState.velY = 0;
    }

    // Левая граница
    if (playerState.x < 0) {
      playerState.x = 0;
      playerState.velX = 0;
    }

    // Правая граница
    if (playerState.x + playerSize.width > this.width) {
      playerState.x = this.width - playerSize.width;
      playerState.velX = 0;
    }

    return playerState;
  }
};

console.log("Локация загружена");
