function ShoppingTime(input) {
    let timeForRest = parseInt(input.shift());
    let pricePeriffery = parseFloat(input.shift());
    let priceProgram = parseFloat(input.shift());
    let priceFrappe = parseFloat(input.shift());



    let moneyForPeriffery = 3 * pricePeriffery;
    let moneyForPrograms = 2 * priceProgram;
    let expenses = moneyForPeriffery + moneyForPrograms + priceFrappe;

    let spendTime = 5 + 3 * 2 + 2 * 2;
    restTime = timeForRest - spendTime;


    console.log(expenses.toFixed(2));
    console.log(restTime);
}
ShoppingTime([20, 2, 4, 3])
ShoppingTime([35, 2.50, 1.20, 6.30])
ShoppingTime([40, 16.66, 35, 4.20])