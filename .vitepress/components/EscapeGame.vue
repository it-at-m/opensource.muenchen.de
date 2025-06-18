<script setup>
import { useData } from "vitepress";
import { computed, onMounted, onUnmounted, ref } from "vue";

const { lang } = useData();
const gameActive = ref(false);
const gameWon = ref(false);
const score = ref(0);
const lives = ref(3);
const message = ref("");
const currentLevel = ref(1);
const isMobile = ref(false);

// Translations
const translations = {
  en: {
    title: "You've wandered into our data center!",
    intro:
      "Fortunately, there's a way back. Our admins have secured it on antiquated data storage💾. Collect all the floppy disks and avoid the enemies! Only then will you find your way back to the home page!",
    startButton: "🏴‍☠️ Find your way back",
    controls: "Use the arrow keys to move and the space bar to jump!",
    level: "Level",
    points: "Points",
    lives: "Lives",
    disks: "Floppy disks",
    endGame: "End game",
    playAgain: "Play again",
    gameOver: "Game over! 💀",
    congrats:
      "🏆 Congratulations! You've collected all the dusty floppy disks! The way is clear!",
    levelComplete: "Level {level} completed! +500 bonus points",
    levelMessage:
      "Level {level}: Use the ARROW KEYS to move and SPACE to jump!",
    levelDifficult: "Level {level}: Really Difficult!",
  },
  de: {
    title: "Du hast dich in unser Rechenzentrum verirrt!",
    intro:
      "Glücklicherweise gibt es einen Weg zurück. Unsere Admins haben ihn auf altertümlichen Datenspeichern💾 gesichert. Sammle alle Disketten und weiche den Gegnern aus! Nur dann wirst du zurück auf die Startseite finden!",
    startButton: "🏴‍☠️ Finde den Weg zurück",
    controls:
      "Verwende die Pfeiltasten zum Bewegen und die Leertaste zum Springen!",
    level: "Level",
    points: "Punkte",
    lives: "Leben",
    disks: "Disketten",
    endGame: "Spiel beenden",
    playAgain: "Nochmal spielen",
    gameOver: "Spiel vorbei! 💀",
    congrats:
      "🏆 Glückwunsch! Du hast alle angestaubten Disketten eingesammelt! Der Weg ist frei!",
    levelComplete: "Level {level} geschafft! +500 Bonus Punkte",
    levelMessage:
      "Level {level}: Verwende die PFEILTASTEN zum Bewegen und LEERTASTE zum Springen!",
    levelDifficult: "Level {level}: Richtig Schwierig!",
  },
};

// Get current language translations
const t = computed(() => {
  return translations[lang.value] || translations.de;
});

// Player state
const player = ref({
  x: 50,
  y: 350,
  width: 30,
  height: 30,
  velocityY: 0,
  isJumping: false,
  facingRight: true,
});

// Level configurations
const levels = [
  // Level 1 - Easy
  {
    platforms: [
      { x: 0, y: 400, width: 800, height: 20 },
      { x: 200, y: 300, width: 150, height: 20 },
      { x: 450, y: 250, width: 150, height: 20 },
      { x: 650, y: 150, width: 150, height: 20 },
    ],
    coins: [
      { x: 220, y: 270, collected: false },
      { x: 470, y: 220, collected: false },
      { x: 670, y: 120, collected: false },
      { x: 500, y: 370, collected: false },
    ],
    enemies: [
      {
        x: 300,
        y: 375,
        width: 25,
        height: 25,
        direction: 1,
        minX: 200,
        maxX: 400,
      },
    ],
  },
  // Level 2 - Easy-Medium difficulty
  {
    platforms: [
      { x: 0, y: 400, width: 200, height: 20 },
      { x: 250, y: 350, width: 150, height: 20 },
      { x: 450, y: 300, width: 150, height: 20 },
      { x: 650, y: 250, width: 150, height: 20 },
      { x: 300, y: 180, width: 200, height: 20 },
      { x: 550, y: 120, width: 150, height: 20 },
    ],
    coins: [
      { x: 270, y: 320, collected: false },
      { x: 470, y: 270, collected: false },
      { x: 670, y: 220, collected: false },
      { x: 350, y: 150, collected: false },
      { x: 570, y: 90, collected: false },
    ],
    enemies: [
      {
        x: 260,
        y: 325,
        width: 25,
        height: 25,
        direction: 1,
        minX: 250,
        maxX: 380,
      },
      {
        x: 560,
        y: 95,
        width: 25,
        height: 25,
        direction: -1,
        minX: 550,
        maxX: 680,
      },
    ],
  },
];

// Game objects (will be set from current level)
const platforms = ref([]);
const coins = ref([]);
const enemies = ref([]);

// Game constants
const GRAVITY = 0.8;
const JUMP_FORCE = -15;
const MOVE_SPEED = 5;

let gameLoop;
const keys = ref({});

const startGame = () => {
  gameActive.value = true;
  gameWon.value = false;
  score.value = 0;
  lives.value = 3;
  currentLevel.value = 1;
  message.value = t.value.levelMessage.replace("{level}", currentLevel.value);

  // Reset player position
  player.value = {
    x: 50,
    y: 350,
    width: 30,
    height: 30,
    velocityY: 0,
    isJumping: false,
    facingRight: true,
  };

  loadLevel(currentLevel.value);

  // Start game loop
  gameLoop = setInterval(updateGame, 1000 / 60); // 60 FPS
};

const loadLevel = (levelNum) => {
  const level = levels[levelNum - 1];
  platforms.value = [...level.platforms];
  coins.value = level.coins.map((coin) => ({ ...coin, collected: false }));
  enemies.value = level.enemies.map((enemy) => ({ ...enemy }));
};

const nextLevel = () => {
  currentLevel.value++;
  if (currentLevel.value <= levels.length) {
    loadLevel(currentLevel.value);
    message.value = t.value.levelDifficult.replace(
      "{level}",
      currentLevel.value
    );

    // Reset player position
    player.value.x = 50;
    player.value.y = 350;
    player.value.velocityY = 0;
  } else {
    endGame(t.value.congrats);
  }
};

const updateGame = () => {
  // Handle input
  if (keys.value["ArrowLeft"]) {
    player.value.x -= MOVE_SPEED;
    player.value.facingRight = false;
  }
  if (keys.value["ArrowRight"]) {
    player.value.x += MOVE_SPEED;
    player.value.facingRight = true;
  }
  if (keys.value[" "] && !player.value.isJumping) {
    player.value.velocityY = JUMP_FORCE;
    player.value.isJumping = true;
  }

  // Apply gravity
  player.value.velocityY += GRAVITY;
  player.value.y += player.value.velocityY;

  // Platform collision
  player.value.isJumping = true;
  platforms.value.forEach((platform) => {
    if (
      player.value.x < platform.x + platform.width &&
      player.value.x + player.value.width > platform.x &&
      player.value.y + player.value.height > platform.y &&
      player.value.y + player.value.height <
        platform.y + platform.height + 10 &&
      player.value.velocityY > 0
    ) {
      player.value.y = platform.y - player.value.height;
      player.value.velocityY = 0;
      player.value.isJumping = false;
    }
  });

  // Boundary checks
  if (player.value.x < 0) player.value.x = 0;
  if (player.value.x > 770) player.value.x = 770;

  // Fall off screen
  if (player.value.y > 500) {
    lives.value--;
    if (lives.value <= 0) {
      endGame(t.value.gameOver);
    } else {
      player.value.x = 50;
      player.value.y = 350;
      player.value.velocityY = 0;
    }
  }

  // Coin collection
  coins.value.forEach((coin) => {
    if (
      !coin.collected &&
      Math.abs(player.value.x - coin.x) < 30 &&
      Math.abs(player.value.y - coin.y) < 30
    ) {
      coin.collected = true;
      score.value += 100;
    }
  });

  // Enemy movement and collision
  enemies.value.forEach((enemy) => {
    enemy.x += enemy.direction * 2;
    if (enemy.x <= enemy.minX || enemy.x >= enemy.maxX) {
      enemy.direction *= -1;
    }

    // Enemy collision
    if (
      player.value.x < enemy.x + enemy.width &&
      player.value.x + player.value.width > enemy.x &&
      player.value.y < enemy.y + enemy.height &&
      player.value.y + player.value.height > enemy.y
    ) {
      lives.value--;
      if (lives.value <= 0) {
        endGame(t.value.gameOver);
      } else {
        player.value.x = 50;
        player.value.y = 350;
        player.value.velocityY = 0;
      }
    }
  });

  // Win condition
  if (coins.value.every((coin) => coin.collected)) {
    if (currentLevel.value < levels.length) {
      score.value += 500; // Bonus for completing level
      message.value = t.value.levelComplete.replace(
        "{level}",
        currentLevel.value
      );
      nextLevel();
    } else {
      // Only show final win message and navigate when completing the last level
      score.value += 500; // Bonus for completing final level
      endGame(t.value.congrats);
    }
  }
};

const endGame = (msg) => {
  message.value = msg;
  gameWon.value = true;
  clearInterval(gameLoop);
  setTimeout(() => {
    window.location.href = "/";
  }, 2000); // 2 second delay to show win message
};

const resetGame = () => {
  gameActive.value = false;
  clearInterval(gameLoop);
  message.value = "";
};

const handleKeyDown = (e) => {
  keys.value[e.key] = true;
  e.preventDefault();
};

const handleKeyUp = (e) => {
  keys.value[e.key] = false;
  e.preventDefault();
};

onMounted(() => {
  // Check if device is mobile
  isMobile.value =
    window.innerWidth <= 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  window.removeEventListener("keyup", handleKeyUp);
  clearInterval(gameLoop);
});
</script>

<template>
  <div class="escape">
    <!-- Mobile 404 Message -->
    <div v-if="isMobile">
      <h1>404</h1>
      <h2>{{ lang === "en" ? "Page not found" : "Seite nicht gefunden" }}</h2>
    </div>

    <!-- Desktop Game -->
    <div v-else>
      <h1>{{ t.title }}</h1>
      <p>
        {{ t.intro }}
      </p>

      <div
        v-if="!gameActive"
        class="game-start"
      >
        <button
          @click="startGame"
          class="game-button"
        >
          {{ t.startButton }}
        </button>
        <p class="game-description">
          {{ t.controls }}
        </p>
      </div>

      <div
        v-else
        class="game-active"
      >
        <div class="game-hud">
          <div>{{ t.level }}: {{ currentLevel }}/{{ levels.length }}</div>
          <div>{{ t.points }}: {{ score }}</div>
          <div>{{ t.lives }}: {{ "❤️".repeat(lives) }}</div>
          <div>
            {{ t.disks }}: {{ coins.filter((c) => c.collected).length }}/{{
              coins.length
            }}
          </div>
        </div>

        <div class="game-canvas">
          <!-- Platforms -->
          <div
            v-for="(platform, index) in platforms"
            :key="'platform-' + index"
            class="platform"
            :style="{
              left: platform.x + 'px',
              top: platform.y + 'px',
              width: platform.width + 'px',
              height: platform.height + 'px',
            }"
          ></div>

          <!-- Coins -->
          <div
            v-for="(coin, index) in coins"
            :key="'coin-' + index"
            v-show="!coin.collected"
            class="coin"
            :style="{
              left: coin.x + 'px',
              top: coin.y + 'px',
            }"
          >
            💾
          </div>

          <!-- Enemies -->
          <div
            v-for="(enemy, index) in enemies"
            :key="'enemy-' + index"
            class="enemy"
            :style="{
              left: enemy.x + 'px',
              top: enemy.y + 'px',
              width: enemy.width + 'px',
              height: enemy.height + 'px',
            }"
          >
            👾
          </div>

          <!-- Player -->
          <div
            class="player"
            :style="{
              left: player.x + 'px',
              top: player.y + 'px',
              width: player.width + 'px',
              height: player.height + 'px',
              transform: player.facingRight ? 'scaleX(1)' : 'scaleX(-1)',
            }"
          >
            🦸‍♀️
          </div>
        </div>

        <div
          v-if="message"
          class="game-message"
        >
          {{ message }}
        </div>

        <div class="game-controls">
          <button
            @click="resetGame"
            class="game-button secondary"
          >
            {{ gameWon ? t.playAgain : t.endGame }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.escape {
  text-align: center;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  font-family: "Orbitron", sans-serif; /* Sci-fi font */
}

.escape h1 {
  color: var(--vp-c-text-1);
  text-shadow:
    0 0 5px var(--vp-c-brand-1),
    0 0 10px var(--vp-c-brand-1);
  margin-bottom: 1rem;
}

.escape p {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.game-description {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  margin-top: 1rem;
}

.game-button {
  background: linear-gradient(145deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-brand-1);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;
  transition: all 0.3s ease;
  box-shadow:
    0 0 5px var(--vp-c-brand-1),
    0 0 10px var(--vp-c-brand-2) inset;
  font-weight: bold;
}

.game-button:hover {
  background: linear-gradient(145deg, var(--vp-c-brand-2), var(--vp-c-brand-3));
  box-shadow:
    0 0 10px var(--vp-c-brand-1),
    0 0 15px var(--vp-c-brand-2) inset,
    0 0 5px var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.game-button.secondary {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-2);
}

.game-button.secondary:hover {
  background-color: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-1);
}

.game-hud {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: var(--vp-c-bg-alt);
  border-radius: 6px;
  font-weight: bold;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-brand-2);
  box-shadow: 0 0 10px var(--vp-c-brand-2) inset;
}

.game-canvas {
  position: relative;
  width: 800px;
  height: 420px;
  border: 2px solid var(--vp-c-brand-1);
  margin: 0 auto 1rem;
  background: var(--vp-c-bg)
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill-opacity="0.1" fill="%2300ffff"><circle cx="20" cy="20" r="1"/><circle cx="80" cy="20" r="1"/><circle cx="50" cy="50" r="2"/><circle cx="20" cy="80" r="1"/><circle cx="80" cy="80" r="1"/></g></svg>');
  overflow: hidden;
  box-shadow: 0 0 15px var(--vp-c-brand-1);
}

.platform {
  position: absolute;
  background: linear-gradient(
    to bottom,
    var(--vp-c-bg-soft),
    var(--vp-c-bg-alt)
  );
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 0 5px var(--vp-c-brand-1);
}

.player {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: transform 0.1s;
  filter: drop-shadow(0 0 3px var(--vp-c-brand-1));
}

.coin {
  position: absolute;
  font-size: 20px;
  animation: pulse-glow 1s infinite alternate;
  color: #ffd700;
}

.enemy {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--vp-c-danger-1);
  filter: drop-shadow(0 0 3px var(--vp-c-danger-1));
}

@keyframes pulse-glow {
  from {
    transform: translateY(0px) scale(1);
    text-shadow:
      0 0 5px #ffd700,
      0 0 10px #ffd700;
  }
  to {
    transform: translateY(-5px) scale(1.1);
    text-shadow:
      0 0 10px #fff000,
      0 0 15px #fff000;
  }
}

.game-message {
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 6px;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
  box-shadow: 0 0 8px var(--vp-c-brand-1);
}

@media (max-width: 900px) {
  .game-canvas {
    width: 100%;
    max-width: 800px;
    /* Consider adjusting scale or keeping it for smaller screens */
    /* transform: scale(0.8); */
    /* transform-origin: center; */
  }

  .game-hud {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
