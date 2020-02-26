function Bus(input) {
    let currentPassengersInTheBus = parseInt(input.shift());
    let countStops = parseInt(input.shift());
    let uploadingPassengers = 0;
    let comingDownPassengers = 0;

    for (let i = 1; i <= countStops; i++) {
        comingDownPassengers = parseInt(input.shift());
        uploadingPassengers = parseInt(input.shift());
        currentPassengersInTheBus += uploadingPassengers - comingDownPassengers
        if (i % 2 != 0) {
            currentPassengersInTheBus += 2;
        }
        if (i % 2 == 0) {
            currentPassengersInTheBus -= 2;
        }
    }
    console.log(`The final number of passengers is : ${currentPassengersInTheBus} `);
}
//Bus([20, 2, 10, 5, 5, 3])
//Bus([25, 5, 14, 15, 9, 11, 10, 13, 6, 7, 10, 8])
Bus([17, 3, 6, 7, 8, 9, 3, 4])