// script.js
function calculateProfit() {
    const photographerFee = parseFloat(document.getElementById('photographerFee').value) || 0;
    const assistantFee = parseFloat(document.getElementById('assistantFee').value) || 0;
    const gasCost = parseFloat(document.getElementById('gasCost').value) || 0;
    const foodCost = parseFloat(document.getElementById('foodCost').value) || 0;
    const otherCost = parseFloat(document.getElementById('otherCost').value) || 0;
    const editingCost = parseFloat(document.getElementById('editingCost').value) || 0;
    const printingCost = parseFloat(document.getElementById('printingCost').value) || 0;
    const framingCost = parseFloat(document.getElementById('framingCost').value) || 0;
    const jobPrice = parseFloat(document.getElementById('jobPrice').value) || 0;

    const totalCost = photographerFee + assistantFee + gasCost + foodCost + otherCost + editingCost + printingCost + framingCost;
    const profit = jobPrice - totalCost;

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

    document.getElementById('profit').textContent = profit.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }) + extraMessage;
    document.getElementById('profit').style.color = color;

    // แสดงผลกำไร ขาดทุน บนหน้าเว็บ
    document.getElementById('page-title').textContent = `กำไรสุทธิ: ${profit.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}`;
    document.getElementById('page-title').style.color = color;
}

// คำนวณทันทีเมื่อโหลดหน้าเว็บ
calculateProfit();

// ยังคง event listener สำหรับปุ่มคำนวณ
document.getElementById('calculateButton').addEventListener('click', calculateProfit);
