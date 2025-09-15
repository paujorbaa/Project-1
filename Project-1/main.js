// VARIABLES

const game = document.getElementById("game");
const enemy = document.querySelector(".enemy");
const COLS = 16;
const ROWS = 9;
// MAPPING

function buildGrid(cols = COLS, rows = ROWS) {
  game.style.setProperty("--cols", cols);
  game.style.setProperty("--rows", rows);

  const frag = document.createDocumentFragment();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.x = x;
      tile.dataset.y = y;
      frag.appendChild(tile);
    }
  }
  game.replaceChildren(frag);
}

buildGrid();

let enemyX = 0;
let enemyY = 0;

let lastTime = performance.now();

function gameLoop(timestamp) {
  const delta = (timestamp - lastTime) / 1000;
  lastTime = timestamp;
  // EDIT 0 TO CHANGE SPEED
  enemyX += 0 * delta;
  enemyY += 0 * delta;
  enemy.style.transform = `translate(${enemyX}px, ${enemyY}px)`;
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
