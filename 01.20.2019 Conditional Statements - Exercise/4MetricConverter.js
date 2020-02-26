function MetricConverrter(input) {
    let razstoyanie = Number(input.shift());
    let inputMetric = String(input.shift()).toLowerCase();
    let outputMetric = String(input.shift()).toLowerCase();

    if (inputMetric === 'mm') {
        razstoyanie = razstoyanie / 1000;
    } else if (inputMetric === 'cm') {
        razstoyanie = razstoyanie / 100;
    }

    if (outputMetric === 'mm') {
        razstoyanie = razstoyanie * 1000;
    } else if (outputMetric === 'cm') {
        razstoyanie = razstoyanie * 100
    }
    console.log(razstoyanie.toFixed(3));
}

MetricConverrter([12, 'mm', 'm'])
MetricConverrter([150, 'm', 'cm'])
MetricConverrter([45, 'cm', 'mm'])