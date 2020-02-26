function Threebrothers(input) {

    let timeFirstBrother = Number(input.shift());
    let timeSecondBrother = Number(input.shift());
    let timeThirdBrother = Number(input.shift());
    let timeForCleaning = Number(input.shift());
    cleaningTime = 1 / (1 / timeFirstBrother + 1 / timeSecondBrother + 1 / timeThirdBrother);
    let totalTime = cleaningTime * 1.15;
    leftTime = timeForCleaning - totalTime;
    console.log(`Cleaning time: ${totalTime.toFixed(2)}`);
    if (leftTime >= 0) {
        console.log(`Yes, there is a surprise - time left -> ${Math.floor(leftTime)} hours.`);
    } else console.log(`No, there isn't a surprise - shortage of time -> ${Math.ceil(-leftTime)} hours.`);
}
Threebrothers([3.2, 2.5, 1.24, 0.5])