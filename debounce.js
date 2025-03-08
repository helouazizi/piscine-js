function debounce(func, delay) {
    let timer;  // Store the timeout reference
    return function (...args) {
        clearTimeout(timer); // Clear the previous timer
        timer = setTimeout(() => {
            func.apply(this, args); // Execute the function after the delay
        }, delay);
    };
}

function opDebounce(func, delay, leading = false) {
    let timer;
    let invoked = false
    return function (...args) {
        let context = this
        if (leading && !invoked) {
            func.apply(context, args)
            invoked = true
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            if (!leading) {
                func.apply(context, args)
            }
            invoked = false
        }, delay)
    }
}


// Example usage
const logMessage = opDebounce(() => console.log("Debounced!"), 1000,true);

logMessage();  // Will only execute if not called again within 1000ms
setTimeout(logMessage, 500); // Resets the timer
setTimeout(logMessage, 1200); // Will execute after 1000ms