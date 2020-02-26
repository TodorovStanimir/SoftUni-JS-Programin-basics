function SmallShop(args) {
    let product = String(args[0]).toLowerCase();
    let town = String(args[1]).toLowerCase();
    let quantite = Number(args[2]);
    let price = 0;
    if (town === 'sofia') {
        switch (product) {
            case 'coffee':
                price = quantite * 0.50;
                break;
            case 'water':
                price = quantite * 0.80;
                break;
            case 'beer':
                price = quantite * 1.20;
                break;
            case 'sweets':
                price = quantite * 1.45;
                break;
            case 'peanuts':
                price = quantite * 1.60;
                break;
        }
    } else if (town === 'plovdiv') {
        switch (product) {
            case 'coffee':
                price = quantite * 0.40;
                break;
            case 'water':
                price = quantite * 0.70;
                break;
            case 'beer':
                price = quantite * 1.15;
                break;
            case 'sweets':
                price = quantite * 1.30;
                break;
            case 'peanuts':
                price = quantite * 1.50;
                break;
        }
    } else if (town === 'varna') {
        switch (product) {
            case 'coffee':
                price = quantite * 0.45;
                break;
            case 'water':
                price = quantite * 0.70;
                break;
            case 'beer':
                price = quantite * 1.10;
                break;
            case 'sweets':
                price = quantite * 1.35;
                break;
            case 'peanuts':
                price = quantite * 1.55;
                break;
        }
    }

    console.log(price);
}

SmallShop(['coffee', 'Varna', 2]);
SmallShop(['peanuts', 'Plovdiv', 1]);
SmallShop(['beer', 'Sofia', 6]);
SmallShop(['water', 'Plovdiv', 3]);
SmallShop(['sweets', 'Sofia', 2.23]);