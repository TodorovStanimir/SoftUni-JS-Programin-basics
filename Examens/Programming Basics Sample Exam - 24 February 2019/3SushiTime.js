function SushiTime(input) {
    let kindSushi = String(input.shift());
    let nameRestourant = String(input.shift());
    let quantityorders = parseInt(input.shift());
    let kindOrder = String(input.shift());
    let bool = true;
    let priceSishi = 0;
    let totalPrice = 0;

    if (nameRestourant == 'Sushi Zone') {
        if (kindSushi == 'sashimi') {
            priceSishi = 4.99;
        } else if (kindSushi == 'maki') {
            priceSishi = 5.29;
        } else if (kindSushi == 'uramaki') {
            priceSishi = 5.99;
        } else if (kindSushi == 'temaki') {
            priceSishi = 4.29;
        }
    } else if (nameRestourant == 'Sushi Time') {
        if (kindSushi == 'sashimi') {
            priceSishi = 5.49;
        } else if (kindSushi == 'maki') {
            priceSishi = 4.69;
        } else if (kindSushi == 'uramaki') {
            priceSishi = 4.49;
        } else if (kindSushi == 'temaki') {
            priceSishi = 5.19;
        }
    } else if (nameRestourant == 'Sushi Bar') {
        if (kindSushi == 'sashimi') {
            priceSishi = 5.25;
        } else if (kindSushi == 'maki') {
            priceSishi = 5.55;
        } else if (kindSushi == 'uramaki') {
            priceSishi = 6.25;
        } else if (kindSushi == 'temaki') {
            priceSishi = 4.75;
        }
    } else if (nameRestourant == 'Asian Pub') {
        if (kindSushi == 'sashimi') {
            priceSishi = 4.50;
        } else if (kindSushi == 'maki') {
            priceSishi = 4.80;
        } else if (kindSushi == 'uramaki') {
            priceSishi = 5.50;
        } else if (kindSushi == 'temaki') {
            priceSishi = 5.50;
        }
    } else {
        //console.log(`${nameRestourant} is invalid restaurant!`);
        bool = false;
    }
    if (kindOrder == 'Y') {
        totalPrice = 1.20 * priceSishi * quantityorders;
    } else {
        totalPrice = priceSishi * quantityorders;
    }

    if (bool) {
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
    } else {
        console.log(`${nameRestourant} is invalid restaurant!`);
    }
}
//SushiTime(['maki', 'Sushi Zone', 4, 'Y'])
//SushiTime(['temaki', 'Asian Pub', 5, 'N'])
//SushiTime(['sashimi ', 'SASA', 3, 'Y'])
//SushiTime(['maki', 'Asian Pub', 10, 'Y'])
SushiTime(['sashimi', 'Sushi Time', 3, ' N'])