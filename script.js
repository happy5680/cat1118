// 初始化：如果 localStorage 有生日 → 自動填入
window.addEventListener("DOMContentLoaded", () => {
  const savedBirthday = localStorage.getItem("catBirthday");
  if (savedBirthday) {
    document.getElementById("birthday").value = savedBirthday;
  }
});

// 主要計算功能
document.getElementById("calcBtn").addEventListener("click", () => {
  const birthdayInput = document.getElementById("birthday").value;

  if (!birthdayInput) {
    alert("請先輸入貓咪生日！");
    return;
  }

  // 儲存生日到 localStorage
  localStorage.setItem("catBirthday", birthdayInput);

  const birthday = new Date(birthdayInput);
  const today = new Date();

  let ageInYears = (today - birthday) / (1000 * 60 * 60 * 24 * 365.25);

  // 人貓換算標準（AVMA/RSPCA）
  let humanAge = 0;
  if (ageInYears <= 1) {
    humanAge = 15 * ageInYears;
  } else if (ageInYears <= 2) {
    humanAge = 15 + (ageInYears - 1) * 9;
  } else {
    humanAge = 24 + (ageInYears - 2) * 4;
  }

  // 顯示於畫面
  document.getElementById("realAge").textContent =
    `🐱 貓咪實際年齡：約 ${ageInYears.toFixed(2)} 歲`;

  document.getElementById("humanAge").textContent =
    `👤 換算成人類約：${humanAge.toFixed(0)} 歲`;

  // 移除 hidden → 顯示結果
  document.getElementById("result").classList.remove("hidden");
});
