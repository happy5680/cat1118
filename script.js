// ----------------------------------------------
// 🐱 貓咪歲數計算主功能
// ----------------------------------------------
function calculateCatAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();

    const diffTime = today - birthDate;
    const realAge = diffTime / (1000 * 60 * 60 * 24 * 365.25); 
    const realAgeFixed = realAge.toFixed(2);

    let humanAge;

    // 📚 文獻換算：
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
// 🐱 頁面載入時：讀取 localStorage
// ----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const savedBirthday = localStorage.getItem("catBirthday");
    const savedRealAge = localStorage.getItem("realAge");
    const savedHumanAge = localStorage.getItem("humanAge");

    if (savedBirthday) {
        document.getElementById("birthday").value = savedBirthday;
    }
    if (savedRealAge || savedHumanAge) {
        // 有資料 → 顯示結果區塊
        document.getElementById("result").classList.remove("hidden");

        if (savedRealAge) {
            document.getElementById("realAge").textContent = savedRealAge;
        }
        if (savedHumanAge) {
            document.getElementById("humanAge").textContent = savedHumanAge;
        }
    }
});

// ----------------------------------------------
// 🐱 點擊「開始計算」
// ----------------------------------------------
document.getElementById("calcBtn").addEventListener("click", () => {
    const birthday = document.getElementById("birthday").value;

    if (!birthday) {
        alert("請先輸入貓咪的生日！");
        return;
    }

    // 儲存生日
    localStorage.setItem("catBirthday", birthday);

    // 計算
    const { realAge, humanAge } = calculateCatAge(birthday);

    const realAgeText = `🐾 貓咪實際歲數：${realAge} 歲`;
    const humanAgeText = `👨‍🦳 換算成人類歲數：約 ${humanAge} 歲`;

    // 顯示結果
    document.getElementById("realAge").textContent = realAgeText;
    document.getElementById("humanAge").textContent = humanAgeText;

    // ⭐ 讓結果區塊顯示
    document.getElementById("result").classList.remove("hidden");

    // 儲存結果
    localStorage.setItem("realAge", realAgeText);
    localStorage.setItem("humanAge", humanAgeText);
});
