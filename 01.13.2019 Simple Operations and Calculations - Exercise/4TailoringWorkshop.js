function TailoringWorkshop(input) {
    let numbertables = Number(input.shift());
    let lenghttables = Number(input.shift());
    let wighttables = Number(input.shift());
    let areatailor1 = numbertables * ((lenghttables + 2 * 0.3) * (wighttables + 2 * 0.3));
    let areatailor2 = numbertables * ((lenghttables / 2) * (lenghttables / 2));
    let priceusd = areatailor1 * 7.00 + areatailor2 * 9.00;
    let pricebgn = priceusd * 1.85;
    console.log(`${priceusd.toFixed(2)} USD`);
    console.log(`${pricebgn.toFixed(2)} BGN`);
}

TailoringWorkshop([10, 1.20, 0.65])