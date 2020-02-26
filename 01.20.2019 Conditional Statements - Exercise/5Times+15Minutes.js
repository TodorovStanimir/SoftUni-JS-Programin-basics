function timesminutes(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    minutes = (a * 60 + b + 15);
    hours = Math.trunc(minutes / 60);
    minutes = minutes - hours * 60
    if (minutes <= 9) {
        minutes = '0' + minutes;
    }
    if (hours === 24) {
        hours = 0;
    }
    console.log(hours + ':' + minutes);
}

timesminutes([11, 08])