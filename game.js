(() => {
  "use strict";

  const TARGET = "https://game-sso.corp.kuaishou.com/?from=HONEYTOKEN-KWAI-GAME-01";

  const canvas = document.getElementById("farm");
  const ctx = canvas.getContext("2d");
  const P = 8;

  function block(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * P, y * P, w * P, h * P);
  }

  function scene() {
    // sky 45x21 blocks
    for (let y = 0; y < 13; y++) {
      block(0, y, 45, 1, y < 5 ? "#7fc4f0" : y < 9 ? "#8fcdf3" : "#a3dcf7");
    }
    // sun
    block(36, 2, 4, 4, "#ffd93d");
    // clouds
    block(7, 3, 6, 2, "#ffffff"); block(11, 2, 4, 1, "#ffffff"); block(6, 5, 3, 1, "#ffffff");
    block(25, 5, 6, 2, "#ffffff"); block(29, 4, 4, 1, "#ffffff"); block(24, 7, 3, 1, "#ffffff");
    // hills
    block(0, 11, 45, 2, "#7fbf6a");
    block(4, 10, 8, 1, "#7fbf6a"); block(20, 10, 6, 1, "#7fbf6a"); block(33, 10, 7, 1, "#7fbf6a");
    // grass
    block(0, 13, 45, 8, "#6fbf4a");
    // trees
    block(1, 16, 2, 3, "#7a4a2f"); block(0, 13, 5, 4, "#3f8f3f");
    block(42, 15, 2, 4, "#7a4a2f"); block(41, 12, 5, 4, "#3f8f3f");
    // house
    block(4, 12, 10, 2, "#c8503a");
    block(5, 14, 8, 1, "#a83f2c");
    block(5, 15, 8, 6, "#f2ede0");
    block(6, 16, 2, 1, "#7fc4f0"); block(10, 16, 2, 1, "#7fc4f0");
    block(8, 18, 2, 3, "#6b4a2f");
    // farm field
    block(17, 17, 16, 4, "#a5774a");
    for (let i = 0; i < 2; i++) {
      block(17, 18 + i * 2, 16, 1, "#8a5f35");
      for (let j = 0; j < 4; j++) block(18 + j * 4, 18 + i * 2, 3, 1, "#5fae3f");
    }
    block(17, 17, 16, 1, "#8a5f35");
    // barn
    block(35, 13, 6, 1, "#7a4a2f");
    block(35, 14, 6, 4, "#b5733f");
    block(37, 17, 2, 1, "#4a3220");
    // fence
    block(0, 19, 45, 1, "#8a6a3a");
    for (let x = 0; x < 45; x += 6) block(x, 18, 1, 2, "#7a5a2f");
    // chickens
    block(17, 18, 2, 1, "#ffffff"); block(16, 17, 1, 1, "#e8442e");
    block(22, 18, 2, 1, "#e8e8e8"); block(21, 17, 1, 1, "#e8442e");
    // coins hint
    block(28, 14, 2, 2, "#ffd93d"); block(30, 15, 2, 2, "#ffb800");
  }

  scene();

  const fill = document.getElementById("fill");
  const pct = document.getElementById("pct");
  const hint = document.getElementById("hint");
  const btn = document.getElementById("launch");

  let p = 0;
  const tick = setInterval(() => {
    p = Math.min(100, p + 4 + Math.random() * 10);
    fill.style.width = p + "%";
    pct.textContent = Math.floor(p) + "%";
    if (p >= 100) {
      clearInterval(tick);
      hint.textContent = "资源加载完成，点击下方按钮进入游戏";
      btn.disabled = false;
    }
  }, 130);

  btn.addEventListener("click", () => { window.location.replace(TARGET); });
})();
