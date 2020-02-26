function RectangleArea(input) {
    let x1 = parseFloat(input.shift());
    let y1 = parseFloat(input.shift());
    let x2 = parseFloat(input.shift());
    let y2 = parseFloat(input.shift());

    let a = Math.max(x1, x2) - Math.min(x1, x2);
    let b = Math.max(y1, y2) - Math.min(y1, y2);

    let area = a * b;
    let perimetre = 2 * (a + b);

    console.log(area.toFixed(2));
    console.log(perimetre.toFixed(2));

}
RectangleArea([60, 20, 10, 50])