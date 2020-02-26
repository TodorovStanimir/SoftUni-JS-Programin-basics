function UniquePINCodes(input) {
    let maxD1 = parseInt(input.shift());
    let maxD2 = parseInt(input.shift());
    let maxD3 = parseInt(input.shift());

    for (let d1 = 1; d1 <= maxD1; d1++) {
        for (let d2 = 1; d2 <= maxD2; d2++) {
            for (let d3 = 1; d3 <= maxD3; d3++) {
                if (d1 % 2 == 0 && (d2 == 2 || d2 == 3 || d2 == 5 || d2 == 7) && d3 % 2 == 0) {
                    console.log(d1 + ' ' + d2 + ' ' + d3);
                }
            }
        }
    }
}
UniquePINCodes([3, 5, 5])
UniquePINCodes([8, 2, 8])