function WorldSwimmingRecord(input) {

    let record = Number(input.shift());
    let distance = Number(input.shift());
    let timeForMeter = Number(input.shift());

    let timeOfIvan = distance * timeForMeter + (Math.floor(distance / 15)) * 12.5;

    if (timeOfIvan < record) {
        console.log(`Yes, he succeeded! The new world record is ${timeOfIvan.toFixed(2)} seconds.`)
    } else if (timeOfIvan >= record) {
        let difference = (timeOfIvan - record).toFixed(2);
        console.log(`No, he failed! He was ${difference} seconds slower.`)
    }
}

WorldSwimmingRecord([55555.67, 3017, 5.03])