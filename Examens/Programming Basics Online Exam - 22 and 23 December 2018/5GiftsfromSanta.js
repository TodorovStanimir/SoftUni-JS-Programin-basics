function GiftsfromSanta(input) {
    let m = Number(input[0]);
    let n = Number(input[1]);
    let s = Number(input[2]);
    let result = '';

    for (let i = n; i >= m; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i != s) {
                result += i + ' ';
            } else {
                break;
            }
        }
    }
    console.log(result)
}
//GiftsfromSanta([1, 30, 15])
//GiftsfromSanta([1, 36, 12])
GiftsfromSanta([20, 1000, 36])