function Thesongofthewheels(input) {
    let M = parseInt(input.shift());
    let output = '';
    let counter = 0;
    let result = ''

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d && (a * b + c * d) == M) {
                        output += String(a) + String(b) + String(c) + String(d) + ' ';
                        counter++;
                        if (counter == 4) {
                            result = String(a) + String(b) + String(c) + String(d);
                        }
                    }
                }
            }
        }
    }
    if (counter > 0) {
        console.log(output);
    }
    if (counter >= 4) {
        console.log(`Password: ${result}`);
    } else {
        console.log('No!');
    }
}
Thesongofthewheels([139])