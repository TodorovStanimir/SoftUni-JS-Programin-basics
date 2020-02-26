function Choreography(input) {
    let broiStapki = Number(input.shift());
    let broiTanciori = Number(input.shift());
    let broiDniZaUchene = Number(input.shift());
    let obshtProcentStapkiNaDen = (broiStapki / broiDniZaUchene) / broiStapki * 100;
    obshtProcentStapkiNaDen = Math.ceil(obshtProcentStapkiNaDen);
    let procentStapkiNaVsekiTancior = obshtProcentStapkiNaDen / broiTanciori;

    if (obshtProcentStapkiNaDen <= 13) {
        console.log(`Yes, they will succeed in that goal! ${procentStapkiNaVsekiTancior.toFixed(2)}%.`);
    } else console.log(`No, they will not succeed in that goal! Required ${procentStapkiNaVsekiTancior.toFixed(2)}% steps to be learned per day.`);
}

Choreography([10464, 20, 20]);
Choreography([55555, 30, 7]);