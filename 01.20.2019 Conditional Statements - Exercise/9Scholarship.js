function scholarship(input) {

    let dohod = Number(input.shift());
    let sredenUspeh = Number(input.shift());
    let minimalnaZaplata = Number(input.shift());
    let socialnaStipendiya = minimalnaZaplata * 0.35;
    let stipendiyaZaUspeh = sredenUspeh * 25;

    if ((sredenUspeh <= 4.50) ||
        (sredenUspeh > 4.50 && sredenUspeh < 5.5 && dohod >= minimalnaZaplata)) {
        console.log('You cannot get a scholarship!');
    } else {
        if (sredenUspeh >= 5.50 && dohod < minimalnaZaplata && socialnaStipendiya > stipendiyaZaUspeh) {
            console.log(`You get a Social scholarship ${Math.trunc(socialnaStipendiya)} BGN`);
        }
        if ((sredenUspeh >= 5.50 && dohod < minimalnaZaplata && socialnaStipendiya <= stipendiyaZaUspeh) ||
            (sredenUspeh >= 5.50 && dohod >= minimalnaZaplata)) {
            console.log(`You get a scholarship for excellent results ${Math.trunc(stipendiyaZaUspeh)} BGN`);
        }
        if (sredenUspeh > 4.50 && sredenUspeh < 5.50 && dohod < minimalnaZaplata) {
            console.log(`You get a Social scholarship ${Math.trunc(socialnaStipendiya)} BGN`);
        }
    }
}
scholarship([300, 5.65, 360])