function MultiplyTable(input) {
    let item = parseInt(input.shift());
    let d3 = Math.floor(item / 100);
    let d2 = Math.floor(item / 10 % 10);
    let d1 = item % 10;
    let result = 0;

    for (let i = 1; i <= d1; i++) {
        for (let y = 1; y <= d2; y++) {
            for (let z = 1; z <= d3; z++) {
                if (i > 0 && y > 0 && z > 0) {
                    result = i * y * z;
                    console.log(`${i} * ${y} * ${z} = ${result};`);
                    result = 0;
                }
            }
        }
    }
}
MultiplyTable([222])