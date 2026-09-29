// Переключение экранов (меню, о проекте, настройки, игра)
function show(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.toggle('active', s.id === id);
  });
}

document.querySelectorAll('[data-go]').forEach(btn => {
  btn.onclick = () => show(btn.dataset.go);
});