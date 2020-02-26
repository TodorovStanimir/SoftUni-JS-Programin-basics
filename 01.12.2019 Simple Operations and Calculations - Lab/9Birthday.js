function Birthday(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());
    let obemakvarium = a * b * c;
    let totallitres = obemakvarium * 0.001;
    let procent = d * 0.01
    let freelitres = totallitres * (1 - procent);
    console.log((freelitres).toFixed(3));

}

Birthday([105, 77, 89, 18.5]);