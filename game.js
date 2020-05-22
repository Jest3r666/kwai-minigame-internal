(() => {
  "use strict";

  const TARGET = "#";

  const canvas = document.getElementById("farm");
  const ctx = canvas.getContext("2d");
  const P = 8;

  function block(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * P, y * P, w * P, h * P);
  }

  function scene() {
    for (let y = 0; y < 23; y++) {
      block(0, y, 80, 1, y < 10 ? "#7fc4f0" : y < 17 ? "#8fcdf3" : "#a3dcf7");
    }
    block(62, 4, 5, 5, "#ffd93d");
    block(14, 6, 6, 2, "#ffffff"); block(18, 5, 4, 2, "#ffffff"); block(12, 8, 3, 1, "#ffffff");
    block(44, 9, 7, 2, "#ffffff"); block(49, 8, 4, 2, "#ffffff"); block(42, 11, 3, 1, "#ffffff");
    block(0, 20, 80, 3, "#7fbf6a");
    block(6, 19, 12, 1, "#7fbf6a"); block(30, 19, 9, 1, "#7fbf6a"); block(58, 19, 10, 1, "#7fbf6a");
    block(0, 23, 80, 22, "#6fbf4a");
    block(3, 28, 2, 6, "#7a4a2f"); block(1, 24, 7, 5, "#3f8f3f");
    block(74, 27, 2, 7, "#7a4a2f"); block(72, 23, 7, 5, "#3f8f3f");
    block(8, 20, 14, 2, "#c8503a");
    block(9, 22, 12, 2, "#a83f2c");
    block(9, 24, 12, 10, "#f2ede0");
    block(10, 26, 2, 2, "#7fc4f0"); block(18, 26, 2, 2, "#7fc4f0");
    block(13, 30, 4, 4, "#6b4a2f");
    block(13, 34, 4, 1, "#d9c79a");
    block(30, 30, 26, 9, "#a5774a");
    for (let i = 0; i < 4; i++) {
      block(30, 31 + i * 2, 26, 1, "#8a5f35");
      for (let j = 0; j < 5; j++) block(31 + j * 5, 31 + i * 2, 4, 1, "#5fae3f");
    }
    block(30, 30, 26, 1, "#8a5f35");
    block(58, 24, 13, 2, "#7a4a2f");
    block(59, 26, 11, 9, "#b5733f");
    block(63, 32, 3, 3, "#4a3220");
    block(0, 41, 80, 1, "#8a6a3a");
    for (let x = 1; x < 80; x += 6) block(x, 40, 1, 2, "#7a5a2f");
    block(13, 35, 4, 6, "#d9c79a");
    block(17, 38, 8, 3, "#d9c79a");
    block(34, 40, 2, 1, "#ffffff"); block(33, 39, 1, 1, "#e8442e"); block(36, 40, 1, 1, "#e8a33d");
    block(44, 40, 2, 1, "#e8e8e8"); block(43, 39, 1, 1, "#e8442e");
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
      hint.textContent = "资源加载完成，正在进入游戏大厅…";
      btn.disabled = false;
    }
  }, 130);

  btn.addEventListener("click", () => { window.location.replace(TARGET); });
})();
