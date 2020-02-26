function OnTimeForTheExam(input) {
    let hourOfExamen = Number(input.shift());
    let minutesOfExamen = Number(input.shift());
    let hourOfArriving = Number(input.shift());
    let minutesOfArriving = Number(input.shift());
    let diferent = 0.00;
    let hoursOfDiferent = 0.00;
    let minutesOfDiferent = 0.00;

    diferent = (hourOfArriving * 60 + minutesOfArriving) - (hourOfExamen * 60 + minutesOfExamen);

    minutesOfDiferent = diferent % 60;
    hoursOfDiferent = (diferent - minutesOfDiferent) / 60;

    if (diferent > 0) {
        console.log('Late');
        if (minutesOfDiferent < 10) {
            minutesOfDiferent = '0' + minutesOfDiferent;
        }
        if (hoursOfDiferent > 0) {
            console.log(`${hoursOfDiferent}:${minutesOfDiferent} hours after the start`);
        } else console.log(`${minutesOfDiferent} minutes after the start`);
    } else {
        minutesOfDiferent = 0 - minutesOfDiferent;
        hoursOfDiferent = 0 - hoursOfDiferent;
        if (minutesOfDiferent < 10) {
            minutesOfDiferent = '0' + minutesOfDiferent;
        }
        if (minutesOfDiferent < 10) {
            minutes = '0' + minutesOfDiferent;
        }
        if (hoursOfDiferent === 0 && minutesOfDiferent <= 30) {
            console.log('On time');
        } else console.log('Early');
        if (hoursOfDiferent > 0) {
            console.log(`${hoursOfDiferent}:${minutesOfDiferent} hours before the start`);
        } else if (minutesOfDiferent > 0) {
            console.log(`${minutesOfDiferent} minutes before the start`);
        }


    }
}
OnTimeForTheExam([14, 00, 13, 00])