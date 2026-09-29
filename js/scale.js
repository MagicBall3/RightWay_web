// Подгоняет #stage под размер экрана, сохраняя пропорции 960x540
const stage = document.getElementById('stage');

function fit() {
  const s = Math.min(innerWidth / 960, innerHeight / 540);
  const x = (innerWidth - 960 * s) / 2;
  const y = (innerHeight - 540 * s) / 2;
  stage.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
}

addEventListener('resize', fit);
addEventListener('orientationchange', fit);
fit();