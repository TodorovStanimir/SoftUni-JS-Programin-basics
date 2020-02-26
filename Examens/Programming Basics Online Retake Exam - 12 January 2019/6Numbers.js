function Num(input) {

    let n = parseInt(input[0]);


    let d3 = (n % 10);
    let d2 = ((n - d3) / 10) % 10;
    let d1 = (n - d2 * 10 - d3) / 100;
    let result = '';

    for (let row = 1; row <= (d1 + d2); row++) {
        for (let column = 1; column <= (d1 + d3); column++) {
            if (n % 5 == 0) {
                n -= d1;
            } else if (n % 3 == 0) {
                n -= d2;
            } else {
                n += d3;
            }
            result += n + ' '
        }
        console.log(result);
        result = '';
    }
}
Num([376])