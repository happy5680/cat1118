// ========= 自動帶入 localStorage =========
window.addEventListener("load", () => {
  const savedDate = localStorage.getItem("catBirthday");
  if (savedDate) {
    document.getElementById("birthday").value = savedDate;
  }
});

// ========= 主計算邏輯 =========
document.getElementById("calcBtn").addEventListener("click", () => {
  const birthday = document.getElementById("birthday").value;

  if (!birthday) {
    alert("請先輸入貓咪生日！");
    return;
  }

  // 儲存到 localStorage
  localStorage.setItem("catBirthday", birthday);

  const birth = new Date(birthday);
  const now = new Date();

  const diffDays = (now - birth) / (1000 * 60 * 60 * 24);
  const realAge = (diffDays / 365).toFixed(1);

  // ===== 人貓換算 =====
  let humanAge;
  if (realAge < 1) {
    humanAge = (realAge * 15).toFixed(1);
  } else if (realAge < 2) {
    humanAge = (15 + (realAge - 1) * 9).toFixed(1);
  } else {
    humanAge = (24 + (realAge - 2) * 4).toFixed(1);
  }

  // ===== 顯示 =====
  document.getElementById("realAge").innerHTML =
    `🐱 貓咪實際年齡：約 <strong>${realAge}</strong> 歲`;

  document.getElementById("humanAge").innerHTML =
    `👤 換算成人年齡：約 <strong>${humanAge}</strong> 歲`;

  document.getElementById("result").classList.remove("hidden");
});
