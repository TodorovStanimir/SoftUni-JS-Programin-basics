function FoodOrder(input) {
    let budget = Number(input.shift());
    let currentItems = String(input.shift());
    let price = 2.50;
    let currentPrice = 0.00;
    let counter = 0;

    while (currentItems != 'Order') {
        currentPrice = Number(input.shift());
        if ((currentPrice + price) > budget) {
            console.log('You will exceed the budget if you order this!');
        } else {
            price += currentPrice;
            counter++;
        }
        currentItems = String(input.shift());
    }

    console.log('You ordered ' + counter + ' items!');
    console.log('Total: ' + price.toFixed(2));
}
FoodOrder([25.00, 'Soup', 3.50, 'Salad', 7.80, 'Fish', 9.00, 'Cake', 5.00, 'Ice cream', 2.00, 'Order'])
FoodOrder([30, 'Salad', 5.50, 'Steak', 7.90, 'Potatoes', 4.50, 'Order'])
FoodOrder([15, 'Salad', 7.50, 'Pizza', 10.00, 'Soup', 3.00, 'Cheesecake', 5.60, 'Ice cream', 1.00, 'Order'])