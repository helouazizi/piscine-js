function interpolation({ step, start, end, callback, duration }) {
    // lets calculate the distance 
    let distance = (end - start) / step
    // let calculate the time
    let timer;
    let delay = duration / step
    let x = start
    let y = 0
    let count = 0
    timer = setInterval(() => {
        if (count === step-1) {
            clearInterval(timer)
        }
        y += delay
        callback([x, y])
        x += distance
        count++
        console.log(count);

    }, delay)
}

// Example usage
const params = {
    step: 5, start: 0, end: 1,
    callback: ([x, y]) => {
        console.log(`Distance: ${x}, Point: ${y}`);
    },
    duration: 10
};

interpolation(params);