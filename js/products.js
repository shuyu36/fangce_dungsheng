
document.addEventListener("DOMContentLoaded", function () {
  const tabContents = document.querySelectorAll(".tab-pane");

  // 檢查 URL 
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get("data-tab");

  // 隱藏所有的內容（排除 #products_1）
  tabContents.forEach((content) => {
    if (content.id !== "products_1") {
      content.style.display = "none";
    }
  });

  if (tabParam) {
    // 如果有 data-tab 參數，則顯示相應的內容
    const targetContent = document.getElementById(tabParam);
    if (targetContent) {
      // 隱藏所有的內容（排除 #products_1）
      tabContents.forEach((content) => {
        if (content.id !== "products_1") {
          content.style.display = "none";
        }
      });

      // 顯示點擊的選項對應的內容
      targetContent.style.display = "block";
    }
  }else {
    // 如果没有 data-tab 參數，顯示 #products_1
    const defaultContent = document.getElementById("products_1");
    if (defaultContent) {
      defaultContent.style.display = "block";
    }
  }
});





function switchTab(event, tabId) {
  // 阻止跳轉
  event.preventDefault();

  
  const tabContents = document.querySelectorAll(".tab-pane");
  const targetContent = document.getElementById(tabId);

  // 隱藏所有的內容
  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  // 顯示點擊的選項對應的內容
  if (targetContent) {
    targetContent.style.display = "block";
    // 顯示點擊的選項對應的內容
    // console.log(tabId + " 內容顯示");
  }
}
