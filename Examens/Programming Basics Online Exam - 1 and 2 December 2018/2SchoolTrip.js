function SchoolTrip(input) {
    let daysMissing = parseInt(input[0]);
    let leftFood = parseInt(input[1]);
    let foodPerDayForFirstDog = parseFloat(input[2]);
    let foodPerDayForSecondDog = parseFloat(input[3]);
    let foodPerDayForThirdDog = parseFloat(input[4]);

    let neededFood = daysMissing * (foodPerDayForFirstDog + foodPerDayForSecondDog + foodPerDayForThirdDog);

    if (leftFood >= neededFood) {
        console.log(Math.trunc(leftFood - neededFood) + ' kilos of food left.')
    } else {
        console.log(Math.ceil(neededFood - leftFood) + ' more kilos of food are needed.');
    }
}
SchoolTrip([2, 10, 1, 1, 2])
SchoolTrip([5, 10, 2.1, 0.8, 11])
SchoolTrip([1, 5, 3, 1, 1])