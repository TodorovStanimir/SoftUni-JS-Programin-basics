function FruitShop(input) {

    let fruit = String(input.shift()).toLowerCase();
    let dayOfWeek = String(input.shift()).toLowerCase();
    let quantite = Number(input.shift());
    let price = 0.00
    if (dayOfWeek === 'monday' ||
        dayOfWeek === 'tuesday' ||
        dayOfWeek === 'wednesday' ||
        dayOfWeek === 'thursday' ||
        dayOfWeek === 'friday') {
        switch (fruit) {
            case 'banana':
                price = 2.50;
                break;
            case 'apple':
                price = 1.20;
                break;
            case 'orange':
                price = 0.85;
                break;
            case 'grapefruit':
                price = 1.45;
                break;
            case 'kiwi':
                price = 2.70;
                break;
            case 'pineapple':
                price = 5.50;
                break;
            case 'grapes':
                price = 3.85;
                break;
            default:
                price = 'error';
                break;
        }
    } else if (dayOfWeek === 'saturday' ||
        dayOfWeek === 'sunday') {
        switch (fruit) {
            case 'banana':
                price = 2.70;
                break;
            case 'apple':
                price = 1.25;
                break;
            case 'orange':
                price = 0.90;
                break;
            case 'grapefruit':
                price = 1.60;
                break;
            case 'kiwi':
                price = 3.00;
                break;
            case 'pineapple':
                price = 5.60;
                break;
            case 'grapes':
                price = 4.20;
                break;
            default:
                price = 'error';
                break;
        }
    } else price = 'error'
    if (price === 'error') {
        console.log('error')
    } else console.log((price * quantite).toFixed(2));
}

FruitShop(['grapes', 'Saturday', 0.5])