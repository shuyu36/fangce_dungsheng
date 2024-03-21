document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 設置每次顯示幾張幻燈片
    loop: true, // 啟用循環
    autoplay: {
      delay: 3000, // 自動播放的間隔時間，以毫秒為單位
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      // 螢幕寬度小於等於 768px 時，顯示 1 張幻燈片
      576: {
        slidesPerView: 2,
      },
      // 螢幕寬度小於等於 1024px 時，顯示 2 張幻燈片
      1024: {
        slidesPerView: 3,
      },
      // 螢幕寬度小於等於 1440px 時，顯示 3 張幻燈片（與原始設定相同）
      1440: {
        slidesPerView: 3,
      },
    },
  });
});
