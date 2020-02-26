function HotelRoom(input) {

    let month = String(input.shift());
    let evenings = Number(input.shift());
    let apartmentPrice = 0.00;
    let studioPrice = 0.00;

    if (month === 'May' || month === 'October') {
        studioPrice = 50 * evenings;
        apartmentPrice = 65 * evenings;
        if (evenings > 14) {
            studioPrice -= studioPrice * 30 / 100;
            apartmentPrice -= apartmentPrice * 10 / 100;
        } else if (evenings > 7) {
            studioPrice -= studioPrice * 5 / 100;
        }
    }
    if (month === 'June' || month === 'September') {
        studioPrice = 75.20 * evenings;
        apartmentPrice = 68.70 * evenings;
        if (evenings > 14) {
            studioPrice -= studioPrice * 20 / 100;
            apartmentPrice -= apartmentPrice * 10 / 100;
        }
    } else if (month === 'July' || month === 'August') {
        studioPrice = 76.00 * evenings;
        apartmentPrice = 77.00 * evenings;
        if (evenings > 14) {
            apartmentPrice -= apartmentPrice * 10 / 100;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
HotelRoom(['August', 20])