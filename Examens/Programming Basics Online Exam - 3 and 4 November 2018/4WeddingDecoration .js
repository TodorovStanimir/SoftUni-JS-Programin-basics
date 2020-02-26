function WeddingDecoration(input) {
    let budget = parseFloat(input.shift());
    let item = '';
    let quantityItem = 0.00;
    let spendMoney = 0.00
    let countBalloons = 0;
    let countFlowers = 0;
    let countCandles = 0;
    let countRibbon = 0;

    while (budget > spendMoney) {
        item = String(input.shift());
        if (item == 'stop') {
            break;
        }
        quantityItem = parseInt(input.shift());
        if (item == 'balloons') {
            countBalloons += quantityItem;
            spendMoney += quantityItem * 0.1;
        } else if (item == 'flowers') {
            countFlowers += quantityItem;
            spendMoney += quantityItem * 1.5;
        } else if (item == 'candles') {
            countCandles += quantityItem;
            spendMoney += quantityItem * 0.5;
        } else if (item == 'ribbon') {
            countRibbon += quantityItem;
            spendMoney += quantityItem * 2;
        }
    }
    if (item == 'stop') {
        console.log('Spend money: ' + spendMoney.toFixed(2));
        console.log('Money left: ' + (budget - spendMoney).toFixed(2));
    }
    if (budget <= spendMoney) {
        console.log('All money is spent!');
    }
    console.log(`Purchased decoration is ${countBalloons} balloons, ${countRibbon} m ribbon, ${countFlowers} flowers and ${countCandles} candles.`);
}
WeddingDecoration([30, 'flowers', 10, 'balloons', 20, 'candles', 10, 'ribbon', 8])
WeddingDecoration([365.50, 'flowers', 15, 'balloons', 10, 'candles', 5, 'ribbon', 6, 'ribbon', 4, 'balloons', 15, 'candles', 9, 'stop', ]);
WeddingDecoration([500, 'balloons', 30, 'candles', 20, 'flowers', 100, 'ribbon', 20, 'stop'])