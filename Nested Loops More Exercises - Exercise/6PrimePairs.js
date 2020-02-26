function PrimePairs(input) {
    let firstPearStart = parseInt(input.shift());
    let secondPearStart = parseInt(input.shift());
    let firstPearFinich = parseInt(input.shift());
    let secondPearFinich = parseInt(input.shift());
    let boolFirstPear = true;
    let boolSecondPear = true;

    for (let firstPear = firstPearStart; firstPear <= firstPearStart + firstPearFinich; firstPear++) {
        for (let secondPear = secondPearStart; secondPear <= secondPearStart + secondPearFinich; secondPear++) {

            for (let i = 2; i <= Math.sqrt(firstPear); i++) {
                if (firstPear % i == 0) {
                    boolFirstPear = false;
                }
            }

            for (let y = 2; y <= Math.sqrt(secondPear); y++) {
                if (secondPear % y == 0) {
                    boolSecondPear = false;
                }
            }
            if (boolFirstPear && boolSecondPear) {
                console.log(`${firstPear}${secondPear}`);
            }
            boolFirstPear = true;
            boolSecondPear = true;
        }
    }
}
//PrimePairs([10, 20, 5, 5])
PrimePairs([10, 30, 9, 6])