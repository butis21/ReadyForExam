function calculateExchange() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0 || fromCurrency === toCurrency) {
        alert('Пожалуйста, введите корректные значения для конвертации.');
        return;
    }

    let exchangeRate = getExchangeRate(fromCurrency, toCurrency);

    document.getElementById('exchangeRate').value = exchangeRate.toFixed(2);

    const result = amount * exchangeRate;
    document.getElementById('result').value = result.toFixed(2);
}

function clearFields() {
    document.getElementById('amount').value = '';
    document.getElementById('exchangeRate').value = '';
    document.getElementById('result').value = '';
}

// с сайта https://bankiros.ru/convert
function getExchangeRate(fromCurrency, toCurrency) {
    switch (fromCurrency) {
        case 'USD':
            switch (toCurrency) {
                case 'EUR':
                    return 0.91;
                case 'RUB':
                    return 88.61;
            }
            break;
        case 'EUR':
            switch (toCurrency) {
                case 'USD':
                    return 1.1;
                case 'RUB':
                    return 97.07;
            }
            break;
        case 'RUB':
            switch (toCurrency) {
                case 'USD':
                    return 0.01;
                case 'EUR':
                    return 0.01;
            }
            break;
        default:
            alert('Неподдерживаемая валюта.');
            return 0;
    }
}

document.getElementById('fromCurrency').addEventListener('change', updateExchangeRate);
document.getElementById('toCurrency').addEventListener('change', updateExchangeRate);

function updateExchangeRate() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    let exchangeRate = getExchangeRate(fromCurrency, toCurrency);

    document.getElementById('exchangeRate').value = exchangeRate.toFixed(2);
}