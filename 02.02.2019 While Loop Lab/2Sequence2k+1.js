function Sequence(input) {
    let n = Number(input.shift());
    let argument = 1;
    while (argument <= n) {
        console.log(argument);
        argument = 2 * argument + 1;
    }
}
Sequence([80])