function multiply(a, b) {
    let result = 0;
    let negative = (a < 0) !== (b < 0);
    a = Math.abs(a);
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result += a;
    }

    return negative ? -result : result;
}

function divide(a, b) {
    if (Object.is(b, -0)) {
        return Number.NEGATIVE_INFINITY;
    }
    if (b === 0) {
        return Number.POSITIVE_INFINITY;
    }

    let count = 0;
    let negative = (a < 0) !== (b < 0);

    a = Math.abs(a);
    b = Math.abs(b);

    while (multiply(b, count) <= a) {
        count++;
    }

    return negative ? -(count - 1) : (count - 1);
}

function modulo(a, b) {
    return a - multiply(divide(a, b), b)
}


