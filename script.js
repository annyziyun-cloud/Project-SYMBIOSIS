// 頁面轉跳邏輯（導引到各自獨立資料夾）
function navigateTo(folder) {
  // 模擬點擊聲或淡出動畫後跳轉
  document.body.style.transition = 'opacity 0.6s ease';
  document.body.style.opacity = '0';
  
  setTimeout(() => {
    window.location.href = `./${folder}/index.html`;
  }, 500);
}
