// script.js
function calculateProfit() {
    // ... (โค้ดเดิมสำหรับคำนวณกำไร) ...
}

// ฟังก์ชันสำหรับบันทึกค่าลงใน LocalStorage
function saveInputValues() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        localStorage.setItem(input.id, input.value);
    });
}

// ฟังก์ชันสำหรับโหลดค่าจาก LocalStorage
function loadInputValues() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const storedValue = localStorage.getItem(input.id);
        if (storedValue) {
            input.value = storedValue;
        }
    });
}

// โหลดค่าจาก LocalStorage เมื่อโหลดหน้าเว็บ
loadInputValues();

// คำนวณทันทีเมื่อโหลดหน้าเว็บ
calculateProfit();

// ยังคง event listener สำหรับปุ่มคำนวณ
document.getElementById('calculateButton').addEventListener('click', calculateProfit);

//  Event listener สำหรับ input fields ทั้งหมด
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        calculateProfit();
        saveInputValues(); // บันทึกค่าเมื่อมีการเปลี่ยนแปลง
    }); 
});
