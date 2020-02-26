function VowelsSum([arg1]) {

    let alphabetic = arg1;
    let sum1 = 0

    for (let i = 0; i < alphabetic.length; i++) {
        if (alphabetic[i] == 'a') {
            sum1 += 1;
        } else if (alphabetic[i] == 'e') {
            sum1 += 2;
        } else if (alphabetic[i] == 'i') {
            sum1 += 3;
        } else if (alphabetic[i] == 'o') {
            sum1 += 4;
        } else if (alphabetic[i] == 'u') {
            sum1 += 5;
        }
    }
    console.log(sum1);
}
VowelsSum(['beer']);