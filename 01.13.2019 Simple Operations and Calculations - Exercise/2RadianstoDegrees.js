function RadianstoDegrees(input) {
    let radian = Number(input.shift());
    let degrees = radian * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}

RadianstoDegrees([0.5236]);