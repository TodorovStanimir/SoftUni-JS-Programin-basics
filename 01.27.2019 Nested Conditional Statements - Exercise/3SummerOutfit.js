function SummerOutFit(input) {

    let temperature = Number(input.shift());
    let partOfDay = String(input.shift()).toLowerCase();
    let outfit = '';
    let shoes = '';

    if (10 <= temperature && temperature <= 18) {
        if (partOfDay === 'morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (partOfDay === 'afternoon') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (partOfDay === 'evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (temperature <= 24) {
        if (partOfDay === 'morning') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (partOfDay === 'afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (partOfDay === 'evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (temperature >= 25) {
        if (partOfDay === 'morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (partOfDay === 'afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (partOfDay === 'evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }

    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}
SummerOutFit([28, 'Evening'])