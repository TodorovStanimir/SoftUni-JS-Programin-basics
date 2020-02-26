function SmartLilly(args) {

    let age = Number(args[0]);
    let washingMashinePrice = Number(args[1]);
    let toyPrice = Number(args[2]);
    let toyCount = 0.00;
    let moneyFromBurthdays = 0.00;
    let money = 0.00;

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            toyCount++;
        } else {
            moneyFromBurthdays += 10.00 * i / 2;
            moneyFromBurthdays--;
        }
    }

    money = moneyFromBurthdays + toyCount * toyPrice;


    if (money >= washingMashinePrice) {
        console.log(`Yes! ${(money-washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashinePrice-money).toFixed(2)}`);
    }
}
SmartLilly([10, 170, 6])