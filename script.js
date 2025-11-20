// ----------------------------------------------
// 🐱 貓咪歲數計算主功能
// ----------------------------------------------
function calculateCatAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();

    const diffTime = today - birthDate;
    const realAge = diffTime / (1000 * 60 * 60 * 24 * 365.25); // 取年齡（含小數）
    const realAgeFixed = realAge.toFixed(2);

    let humanAge;

    // 📚 人貓換算標準（文獻：AAFP、UC Davis Vet）：
    // 第 1 年 = 15 人類歲
    // 第 2 年 = 24 人類歲
    // 之後每年 + 4
    if (realAge <= 1) {
        humanAge = 15;
    } else if (realAge <= 2) {
        humanAge = 24;
    } else {
        humanAge = 24 + (realAge - 2) * 4;
    }

    return {
        realAge: realAgeFixed,
        humanAge: Math.round(humanAge)
    };
}

// ----------------------------------------------
// 🐱 Page 加載時：載入 localStorage
// ----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const savedBirthday = localStorage.getItem("catBirthday");
    const savedRealAge = localStorage.getItem("realAge");
    const savedHumanAge = localStorage.getItem("humanAge");

    // 1️⃣ 載入生日
    if (savedBirthday) {
        document.getElementById("birthday").value = savedBirthday;
    }

    // 2️⃣ 載入上次的運算結果
    if (savedRealAge) {
        document.getElementById("realAge").textContent = savedRealAge;
    }
    if (savedHumanAge) {
        document.getElementById("humanAge").textContent = savedHumanAge;
    }
});

// ----------------------------------------------
// 🐱 點擊計算按鈕後的行為
// ----------------------------------------------
document.getElementById("calcBtn").addEventListener("click", () => {
    const birthday = document.getElementById("birthday").value;

    if (!birthday) {
        alert("請先輸入貓咪的生日喔！");
        return;
    }

    // 儲存生日
    localStorage.setItem("catBirthday", birthday);

    // 計算歲數
    const { realAge, humanAge } = calculateCatAge(birthday);

    const realAgeText = `🐾 貓咪實際歲數：${realAge} 歲`;
    const humanAgeText = `👨‍🦳 換算成人類歲數：約 ${humanAge} 歲`;

    // 顯示在畫面
    document.getElementById("realAge").textContent = realAgeText;
    document.getElementById("humanAge").textContent = humanAgeText;

    // 儲存結果
    localStorage.setItem("realAge", realAgeText);
    localStorage.setItem("humanAge", humanAgeText);
});
