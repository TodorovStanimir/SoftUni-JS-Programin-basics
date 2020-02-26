function Skeleton(input) {
    let controlMinutes = parseInt(input.shift());
    let controlSeconds = parseInt(input.shift());
    let lenghtUlei = parseFloat(input.shift());
    let secondsFor100Metres = parseInt(input.shift());

    let totalControlTime = controlMinutes * 60 + controlSeconds;
    let timeMarin = lenghtUlei / 100 * secondsFor100Metres;
    let timeZabavyane = lenghtUlei / 120 * 2.5;
    let totalTime = timeMarin -timeZabavyane;

    if (totalTime <= totalControlTime) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${totalTime.toFixed(3)}.`)
    } else {
        let slower = totalTime - totalControlTime;
        console.log(`No, Marin failed! He was ${slower.toFixed(3)} second slower.`);
    }
}
Skeleton([2, 12, 1200, 10])
Skeleton([1, 20, 1546, 12])