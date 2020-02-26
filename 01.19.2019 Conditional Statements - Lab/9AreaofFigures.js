function AreaofFigures([arg1, arg2, arg3]) {
    let type = arg1;
    var area = 0
    if (type === 'square') {
        area = (arg2 * arg2).toFixed(3);
    } else if (type === 'rectangle') {
        area = (arg2 * arg3).toFixed(3);
    } else if (type === 'circle') {
        area = (Math.PI * arg2 * arg2).toFixed(3);
    } else if (type === 'triangle') {
        area = (arg2 * arg3 / 2).toFixed(3)
    }
    console.log(area);
}

AreaofFigures(['triangle', 4.5, 20])