function AccountBalance(input) {

    let n = Number(input.shift());
    let totalAmount = 0.00;

    while (n > 0) {

        let vnoska = Number(input.shift());

        if (vnoska < 0) {
            console.log('Invalid operation!')
            break;
        }
        console.log(`Increase: ${vnoska.toFixed(2)}`);
        totalAmount += vnoska;
        n--;
    }
    console.log(`Total: ${totalAmount.toFixed(2)}`);
}
AccountBalance([4, 120, 45.55, 1, 50, 120, 150, 170])