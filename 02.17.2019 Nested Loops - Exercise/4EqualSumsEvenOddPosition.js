function EqualSumsEvenOddPosition(input) {
    let num1 = parseInt(input.shift());
    let num2 = parseInt(input.shift());

    let item = 0;
    let sumOdd = 0;
    let sumEven = 0;
    let output = '';

    for (let i = num1; i <= num2; i++) {
        item = String(i);
        for (let odd = 0; odd <= 4; odd += 2) {
            sumOdd += Number(item.substr(odd, 1));
        }
        for (let even = 1; even <= 5; even += 2) {
            sumEven += Number(item.substr(even, 1));
        }
        if (sumOdd == sumEven) {
            output += item + ' ';
        }
        sumOdd = 0;
        sumEven = 0;
    }
    console.log(output);
}
EqualSumsEvenOddPosition([123456, 124000])