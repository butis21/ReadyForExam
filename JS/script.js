function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
    const paymentType = document.getElementById('paymentType').value;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        alert('Пожалуйста, введите корректные значения для всех полей.');
        return;
    }

    let monthlyPayment;

    if (paymentType === 'annuity') {
        monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    } else {
        monthlyPayment = loanAmount / loanTerm + loanAmount * (1 - (loanTerm - 1) / loanTerm) * interestRate;
    }

    document.getElementById('monthlyPayment').value = Math.round(monthlyPayment);
}

function clearFields() {
    document.getElementById('loanAmount').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('loanTerm').value = '';
    document.getElementById('paymentType').value = 'annuity';
    document.getElementById('monthlyPayment').value = '';
}