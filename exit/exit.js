function closeGame() {
  // 嘗試關閉瀏覽器分頁
  window.close();
  // 若瀏覽器安全性限制無法直接關閉（非 window.open 開啟的分頁），則呈現全黑閉幕特效
  document.body.style.opacity = '0';
  setTimeout(() => {
    alert("遊戲已結束，請手動關閉此瀏覽器分頁。");
  }, 1000);
}

function cancelExit() {
  window.location.href = '../index.html';
}
