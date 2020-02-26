function InchesToCentimeters(input) {
    let inches = Number(input.shift());
    let centimetres = inches * 2.54;
    console.log(centimetres.toFixed(2));
}

InchesToCentimeters([5])