function TrapezoidArea(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let h = Number(input.shift());
    let area = (a + b) * h / 2
    console.log(area.toFixed(2));
}

TrapezoidArea([8, 13, 7]);