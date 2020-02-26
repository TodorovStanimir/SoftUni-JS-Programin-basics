function Everest(input) {

    let metersForADay = 0.00;
    let currentItem = '';
    let counterDays = 1;
    let counterHeigh = 5364;

    while (counterHeigh < 8848) {
        currentItem = String(input.shift());
        if (currentItem == 'END') {
            break;
        }
        if (currentItem == 'Yes') {
            counterDays++
            if (counterDays <= 5) {
                metersForADay = Number(input.shift())
                counterHeigh += metersForADay;
            } else {
                break;
            }
        } else {
            metersForADay = Number(input.shift())
            counterHeigh += metersForADay;
        }
    }
    if (counterHeigh >= 8848) {
        console.log('Goal reached for ' + counterDays + ' days!');
    } else {
        console.log('Failed!');
        console.log(counterHeigh);
    }

}
//Everest(['Yes', 1254, 'Yes', 1402, 'No', 250, 'Yes', 635])
//Everest(['Yes', 1000, 'Yes', 945, 'No', 1200, 'END'])
//Everest(['Yes', 535, 'Yes', 849, 'Yes', 499, 'Yes', 400, 'Yes', 500])
Everest(['Yes', 700, 'END'])