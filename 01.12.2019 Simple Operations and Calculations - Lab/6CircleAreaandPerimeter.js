function CircleAreaAndPerimeter(input) {
    let radius = Number(input.shift());
    console.log((Math.PI * radius * radius).toFixed(2));
    console.log((2 * Math.PI * radius).toFixed(2));
}

CircleAreaAndPerimeter([4.5]);