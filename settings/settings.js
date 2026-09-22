// 讀取既有設定
window.addEventListener('DOMContentLoaded', () => {
  const bgm = localStorage.getItem('forest_bgm') || 80;
  const sfx = localStorage.getItem('forest_sfx') || 70;
  const quality = localStorage.getItem('forest_quality') || 'high';

  document.getElementById('bgm').value = bgm;
  document.getElementById('sfx').value = sfx;
  document.getElementById('quality').value = quality;
});

function saveSettings() {
  localStorage.setItem('forest_bgm', document.getElementById('bgm').value);
  localStorage.setItem('forest_sfx', document.getElementById('sfx').value);
  localStorage.setItem('forest_quality', document.getElementById('quality').value);
  alert('設定已儲存！');
}

function goBack() {
  window.location.href = '../index.html';
}
