function MaxNumber (args){

    let y=Number(args[0]);
    let z=Number.NEGATIVE_INFINITY;

    for (i=1; i<=y; i++) {
        z=Math.max(Number(args[i]), z);
    }
    console.log(z);
}
MaxNumber ([4,45,-20,7,99])