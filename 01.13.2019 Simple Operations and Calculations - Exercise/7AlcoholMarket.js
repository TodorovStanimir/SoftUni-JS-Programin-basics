function AlcoholMarket(input) {
    let cenauiski = Number(input.shift());
    let kolichestvobira = Number(input.shift());
    let kolichestvovino = Number(input.shift());
    let kolichestvorakia = Number(input.shift());
    let kolichestvouiski = Number(input.shift());
    let cenarakia = cenauiski / 2;
    let cenabira = cenarakia * 0.2;
    let cenavino = cenarakia * 0.6;
    console.log((kolichestvouiski * cenauiski + kolichestvorakia * cenarakia + kolichestvobira * cenabira + kolichestvovino * cenavino).toFixed(2));

}
AlcoholMarket([63.44, 3.57, 6.35, 8.15, 2.5]);