function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box: ${saveCoins}`);
}

moneyBox(5);
moneyBox(5);

function moneyBox2() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Money Box: ${saveCoins}`); 
    }
    return countCoins;
}

const myMoneyBox = moneyBox2();
myMoneyBox(5); // 5
myMoneyBox(5); // 10
myMoneyBox(15); // 25

const moneyBoxShare = moneyBox2();
moneyBoxShare(10); // 10
moneyBoxShare(20); // 30
moneyBoxShare(5); // 35