// script.js
const express = require('express');
const app = express();

app.use(express.static(__dirname)); // Serve static files (HTML, CSS, etc.)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// **JavaScript ในไฟล์ HTML (script.js)**

document.getElementById('calculateButton').addEventListener('click', () => {
    const photographerFee = parseFloat(document.getElementById('photographerFee').value);
    const assistantFee = parseFloat(document.getElementById('assistantFee').value);
    const gasCost = parseFloat(document.getElementById('gasCost').value);
    const foodCost = parseFloat(document.getElementById('foodCost').value);
    const otherCost = parseFloat(document.getElementById('otherCost').value);

    const editingCost = parseFloat(document.getElementById('editingCost').value);
    const printingCost = parseFloat(document.getElementById('printingCost').value);
    const framingCost = parseFloat(document.getElementById('framingCost').value);

    const jobPrice = parseFloat(document.getElementById('jobPrice').value);

    // ตรวจสอบเงื่อนไขค่าตัวผู้ช่วย
    if (assistantFee > photographerFee) {
        alert("ค่าตัวผู้ช่วยไม่สามารถเกินค่าตัวช่างภาพได้");
        return;
    }

    const totalCost1 = photographerFee + assistantFee + gasCost + foodCost + otherCost;
    const totalCost2 = editingCost + printingCost + framingCost;
    const profit = jobPrice - totalCost1 - totalCost2;

    document.getElementById('profit').textContent = profit.toFixed(2);
});
