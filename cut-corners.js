function round(num) {
    let intNum = trunc(num)
    let diff = num - intNum

    if (num >= 0) {
        return diff < 0.5 ? intNum : intNum + 1
    } else {
        return diff <= -0.5 ? intNum - 1 : intNum
    }
}

function ceil(num) {
    let intNum = trunc(num);
    return num === intNum ? intNum : intNum + 1;
}

function floor(num) {
    let intNum = trunc(num);
    return num === intNum ? intNum : num < 0 ? intNum - 1 : intNum;
}

function trunc(num) {
    let result = 0;
    let isNegative = num < 0;

    if (isNegative) num = -num;

    while (num >= 1) {
        num -= 1;
        result++;
    }

    return isNegative ? -result : result;
}
console.log(trunc(58.214))
