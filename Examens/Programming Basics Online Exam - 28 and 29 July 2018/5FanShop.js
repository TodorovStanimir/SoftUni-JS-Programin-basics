function FanShop(input) {
    let budget = parseInt(input.shift());
    let n = parseInt(input.shift());
    let item = '';
    let neededMoney = 0;

    for (let i = 0; i < n; i++) {
        item = String(input.shift());
        if (item == 'hoodie') {
            neededMoney += 30;
        } else if (item == 'keychain') {
            neededMoney += 4;
        } else if (item == 'T-shirt') {
            neededMoney += 20;
        } else if (item == 'flag') {
            neededMoney += 15;
        } else if (item == 'sticker') {
            neededMoney += 1;
        }
    }
    if (budget >= neededMoney) {
        console.log('You bought ' + n + ' items and left with ' + (budget - neededMoney) + ' lv.');
    } else {
        console.log('Not enough money, you need ' + (neededMoney - budget) + ' more lv.');
    }
}
FanShop([25, 3, 'flag', 'keychain', 'sticker'])
FanShop([5, 2, 'hoodie', 'hoodie'])