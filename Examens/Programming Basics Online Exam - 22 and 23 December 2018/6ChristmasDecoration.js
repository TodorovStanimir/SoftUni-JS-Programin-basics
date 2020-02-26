function ChristmasDecoration(input) {
    let budget = parseInt(input.shift());
    let item = String(input.shift())
    let priceOfCurrentItem = 0.00

    while (item != 'Stop') {
        for (let i = 0; i < item.length; i++) {
            priceOfCurrentItem += item.charCodeAt(i);
        }
        if (priceOfCurrentItem <= budget) {
            budget -= priceOfCurrentItem;
            console.log('Item successfully purchased!');
        } else {
            console.log('Not enough money!');
            break;
        }
        priceOfCurrentItem = 0.00;
        item = String(input.shift())
    }
    if (item == 'Stop') {
        console.log('Money left: ' + budget);
    }
}
ChristmasDecoration([3000, 'star', 'Christmas tree', 'tinsel', 'Tree stand'])
ChristmasDecoration([5000, 'Christmas lights', 'wreath', 'Stop'])