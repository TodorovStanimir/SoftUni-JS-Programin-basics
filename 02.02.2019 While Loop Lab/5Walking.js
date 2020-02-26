function Walking(input) {

    let argument = input.shift();
    let distance = 0.00

    while (distance < 10000) {
        if (argument !== 'Going home') {
            distance += Number(argument);
            argument = input.shift();
        } else {
            argument = input.shift();
            distance += Number(argument);
            break;
        }
    }
    if (distance >= 10000) {
        console.log('Goal reached! Good job!');
    } else {
        console.log(`${10000-distance} more steps to reach goal.`);

    }
}
Walking([1500, 3000, 250, 1548, 2000, 'Going home', 1000])