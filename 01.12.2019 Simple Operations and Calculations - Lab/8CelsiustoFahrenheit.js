function CelsiustoFahrenheit(input) {
    let Celsius = Number(input.shift());
    let Fahrenheit = (Celsius * 1.8 + 32);
    console.log(Fahrenheit.toFixed(2));
}

CelsiustoFahrenheit([0, 3, 5]);