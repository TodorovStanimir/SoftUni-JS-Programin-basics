function min3Numbers(arg) {
    let num = parseInt(arg[0]);
    let currentMin = 100001;
    let previousMinNum = -100001;
    let counter = 0;
    let y = num;
    let output = new Array;

    for (let y=1;y<=num;y++) {
        for (let i = 1; i <= num; i++) {
            let currentNum = parseInt(arg[i ]);
            if (currentNum >= previousMinNum && currentNum <currentMin) {
                currentMin = currentNum;
            }
        }
        if (currentMin <= 100000) {
            output.push(currentMin);
            counter++;
            previousMinNum = currentMin;
            currentMin = 100001;
        }
        if (counter == 3) {
            break;
        }
    
    }
    if (counter > 3) {
        counter = 3;
    }
    for (let i = 0; i < counter; i++) {
        console.log(output[i]);
    }
}
min3Numbers([3, -6, -6, -5, -3, -4, -5, -6])