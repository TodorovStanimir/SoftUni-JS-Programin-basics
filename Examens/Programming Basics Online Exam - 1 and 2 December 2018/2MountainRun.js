function MountainRun(input) {

    let recordInSeconds = parseFloat(input[0]);
    let distanceInMeters = parseFloat(input[1]);
    let timeInSecondsForMeter = parseFloat(input[2]);
    let timeOfGeorgi = 0.00;

    timeOfGeorgi = distanceInMeters * timeInSecondsForMeter + Math.floor(distanceInMeters / 50) * 30;

    if (timeOfGeorgi < recordInSeconds) {
        console.log('Yes! The new record is ' + timeOfGeorgi.toFixed(2) + ' seconds.');
    } else {
        console.log('No! He was ' + (timeOfGeorgi - recordInSeconds).toFixed(2) + ' seconds slower.');
    }
}
MountainRun([10164, 1400, 25])
MountainRun([5554.36, 1340, 3.23])
MountainRun([1377, 389, 3])