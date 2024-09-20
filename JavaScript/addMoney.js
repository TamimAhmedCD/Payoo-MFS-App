document.getElementById('add-money-btn').addEventListener('click', function (even) {
    even.preventDefault();

    const addMoney = document.getElementById('add-money-input').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('pin-number').value;

    if (pinNumber === '1234') {
        const accountBalance = document.getElementById('account-balance').innerText;
        const accountBalanceNumber = parseFloat(accountBalance);
        
        const updatedBalance = accountBalanceNumber + addMoneyNumber;

        document.getElementById('account-balance').innerText = updatedBalance;
    }

    else {
        alert('Failed to transaction! Please try again later.')
    }
});