function Substitute(input) {
    let k = parseInt(input.shift());
    let l = parseInt(input.shift());
    let m = parseInt(input.shift());
    let n = parseInt(input.shift());
    count = 0;

    for (let d1 = k; d1 <= 8; d1++) {
        for (let d2 = 9; d2 >= l; d2--) {
            for (let d3 = m; d3 <= 8; d3++) {
                for (let d4 = 9; d4 >= n; d4--) {
                    if (d1 % 2 == 0 && d2 % 2 != 0 && d3 % 2 == 0 && d4 % 2 != 0) {
                        if (d1 != d3 || d2 != d4) {
                            console.log(`${d1}${d2} - ${d3}${d4}`);
                            count++
                        } else if (d1 == d3 & d2 == d4) {
                            console.log('Cannot change the same player.');
                        }
                        if (count == 6) {
                            return;
                        }
                    }
                }
            }
        }
    }
}
Substitute([6, 7, 5, 6])