function DanceHall(input) {
    let lenghtzala = Number(input.shift());
    let wightzala = Number(input.shift());
    let lenghtgarderob = Number(input.shift());
    let freeplace = lenghtzala * wightzala - lenghtgarderob * lenghtgarderob - lenghtzala * wightzala / 10;
    let numberofdancers = freeplace / 0.704;
    console.log(Math.trunc(numberofdancers));
}

DanceHall([3.5, 3.5, 2])