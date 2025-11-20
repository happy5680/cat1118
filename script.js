const birthdayInput = document.getElementById("birthday");
const calculateBtn = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

// 讀取 localStorage 並自動填回
const savedBirthday = localStorage.getItem("catBirthday");
if (savedBirthday) {
  birthdayInput.value = savedBirthday;
  calculateAge(savedBirthday);
}

// 點擊按鈕計算
calculateBtn.addEventListener("click", () => {
  const birthday = birthdayInput.value;
  if (!birthday) {
    resultDiv.innerHTML = "請先輸入貓咪生日 🐾";
    return;
  }

  localStorage.setItem("catBirthday", birthday);
  calculateAge(birthday);
});

function calculateAge(birthday) {
  const birthDate = new Date(birthday);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) ageYears--;

  let humanAge;
  if (ageYears <= 0) {
    humanAge = 0;
  } else if (ageYears === 1) {
    humanAge = 15;
  } else if (ageYears === 2) {
    humanAge = 24;
  } else {
    humanAge = 24 + (ageYears - 2) * 4;
  }

  resultDiv.innerHTML = `
    🐾 貓咪實際歲數：<strong>${ageYears}</strong> 歲 <br>
    🐾 換算成人類歲數：約 <strong>${humanAge}</strong> 歲
  `;
}
