function FamilyHouse(input) {
    let countMonths = parseInt(input[0]);
    let montlyMoneyForElectricity = 0.0;
    let montlyMoneyForWater = 20.00;
    let montluMoneyForInternet = 15.00;
    let montlyMoneyForOtherExpenses = 0.00;
    let moneyForElectricity = 0.00;
    let moneyForWater = countMonths * montlyMoneyForWater;
    let moneyForInternet = countMonths * montluMoneyForInternet;
    let moneyForOtherExpenses = 0.00;


    for (let i = 1; i <= countMonths; i++) {
        montlyMoneyForElectricity = parseFloat(input[i]);
        moneyForElectricity += montlyMoneyForElectricity
        montlyMoneyForOtherExpenses = 1.20 * (montlyMoneyForElectricity + montlyMoneyForWater + montluMoneyForInternet)
        moneyForOtherExpenses += montlyMoneyForOtherExpenses;
    }

    let totalMoney = (moneyForElectricity + moneyForWater + moneyForInternet + moneyForOtherExpenses) / countMonths
    console.log('Electricity: ' + moneyForElectricity.toFixed(2) + ' lv');
    console.log('Water: ' + moneyForWater.toFixed(2) + ' lv');
    console.log('Internet: ' + moneyForInternet.toFixed(2) + ' lv');
    console.log('Other: ' + moneyForOtherExpenses.toFixed(2) + ' lv');
    console.log('Average: ' + totalMoney.toFixed(2) + ' lv');
}
FamilyHouse([5, 68.63, 89.25, 132.53, 93.53, 63.22])