function Histogram(input) {

    let counter = Number(input[0]);
    let currentNumber = 0.00;
    let p1 = 0.00;
    let p2 = 0.00;
    let p3 = 0.00;
    let p4 = 0.00;
    let p5 = 0.00;

    for (let i = 1; i <= counter; i++) {
        currentNumber = Number(input[i]);
        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber < 400) {
            p2++;
        } else if (currentNumber < 600) {
            p3++;
        } else if (currentNumber < 800) {
            p4++
        } else p5++;
    }

    console.log((p1 / counter * 100).toFixed(2) + '%');
    console.log((p2 / counter * 100).toFixed(2) + '%');
    console.log((p3 / counter * 100).toFixed(2) + '%');
    console.log((p4 / counter * 100).toFixed(2) + '%');
    console.log((p5 / counter * 100).toFixed(2) + '%');

}
Histogram([20, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])
Histogram([3, 1, 2, 999])
Histogram([4, 53, 7, 56, 999])
Histogram([7, 800, 801, 250, 199, 399, 599, 799])