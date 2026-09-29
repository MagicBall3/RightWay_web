// Настройка: включение/выключение визуального экранного управления
const toggle = document.getElementById('toggle-controls');
let controlsOn = true;

try {
  const saved = localStorage.getItem('rw_controls');
  if (saved !== null) controlsOn = saved === '1';
} catch (e) {}

function applyControls() {
  document.body.classList.toggle('controls-on', controlsOn);
  toggle.classList.toggle('on', controlsOn);
  toggle.setAttribute('aria-checked', controlsOn);
}

toggle.onclick = () => {
  controlsOn = !controlsOn;
  try { localStorage.setItem('rw_controls', controlsOn ? '1' : '0'); } catch (e) {}
  applyControls();
};

applyControls();