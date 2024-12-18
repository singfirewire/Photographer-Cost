@@ -1,45 +1,30 @@
// script.js
function calculateProfit() {
    // ต้นทุนหน้างาน
    const photographerFee = parseFloat(document.getElementById('photographerFee').value) || 0;
    const assistantFee = parseFloat(document.getElementById('assistantFee').value) || 0;
    const gasCost = parseFloat(document.getElementById('gasCost').value) || 0;
    const foodCost = parseFloat(document.getElementById('foodCost').value) || 0;
    const otherCostFront = parseFloat(document.getElementById('otherCostFront').value) || 0; 
    // ต้นทุนหลังถ่าย
    const editingCost = parseFloat(document.getElementById('editingCost').value) || 0;
    const printingCost = parseFloat(document.getElementById('printingCost').value) || 0;
    const framingCost = parseFloat(document.getElementById('framingCost').value) || 0;
    const otherCostBack = parseFloat(document.getElementById('otherCostBack').value) || 0; 
    // ราคารับงาน
    const jobPrice = parseFloat(document.getElementById('jobPrice').value) || 0;
    const tip = parseFloat(document.getElementById('tip').value) || 0; 
    const totalCost = photographerFee + assistantFee + gasCost + foodCost + otherCostFront + editingCost + printingCost + framingCost + otherCostBack;
    const profit = jobPrice + tip - totalCost; 
    // กำหนดสีตัวเลขตามผลกำไร/ขาดทุน
    let color = profit >= 0 ? 'green' : 'red';
    let extraMessage = "";
    if (profit < 0) {
        extraMessage = " เปิดมูลนิธิถ่ายรูปหรอ?";
    } else if (profit < 390) {
        extraMessage = " ถ้ากำไรเท่านี้นอนเล่น Facebook อยู่บ้านเถอะ";
    } else if (profit > 5000) {
        extraMessage = " กำไรดีอยู่นะ มั่นใจว่ากรอบตัวเลขไม่ผิด";
    }
    // ... (โค้ดเดิมสำหรับคำนวณกำไร) ...
}

    document.getElementById('profit').textContent = profit.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }) + extraMessage;
    document.getElementById('profit').style.color = color;
// ฟังก์ชันสำหรับบันทึกค่าลงใน LocalStorage
function saveInputValues() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        localStorage.setItem(input.id, input.value);
    });
}

    // แสดงผลกำไร ขาดทุน บนหน้าเว็บ
    document.getElementById('page-title').textContent = `กำไรสุทธิ: ${profit.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}`;
    document.getElementById('page-title').style.color = color;
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

@@ -49,5 +34,8 @@ document.getElementById('calculateButton').addEventListener('click', calculatePr
//  Event listener สำหรับ input fields ทั้งหมด
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', calculateProfit); 
    input.addEventListener('input', () => {
        calculateProfit();
        saveInputValues(); // บันทึกค่าเมื่อมีการเปลี่ยนแปลง
    }); 
});