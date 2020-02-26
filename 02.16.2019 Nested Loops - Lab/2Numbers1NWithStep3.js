function Numbers1NWithStep3(input) {
    let n = Number(input.shift())
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}
Numbers1NWithStep3([10])
Numbers1NWithStep3([7])
Numbers1NWithStep3([15])