function sumiranesecundi(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let seconds = a + b + c;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    if (seconds < 10) {
        console.log(minutes + ':0' + seconds)
    } else {
        console.log(minutes + ":" + seconds);
    }

}

sumiranesecundi([14, 12, 10])