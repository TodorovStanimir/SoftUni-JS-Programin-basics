function Numbersequence(input) {

    let minnum = Number.MAX_SAFE_INTEGER;
    let maxnum = Number.MIN_SAFE_INTEGER;
    let num = input.shift();

    while (num !== 'END') {
        let num1 = Number(num);
        if (num1 < minnum) {
            minnum = num1;
        }
        if (num1 > maxnum) {
            maxnum = num1;
        }
        num = input.shift();
    }
    console.log(`Max number: ${maxnum}`);
    console.log(`Min number: ${minnum}`);
}

Numbersequence([250, 5, 2, 0, 100, 1000, 'END'])