function throttle(func,delay) {
    let LASTCAL = 0
    return (...args)=>{
        let now = Date.now()
        if (now-LASTCAL >= delay){
            LASTCAL = now
            func(...args)
        }
    }
}

function opThrottle(func, delay, { leading = true, trailing = true } = {}) {
    let lastCall = 0;   // Tracks last execution time
    let timer = null;   // Timeout reference
    let lastArgs = null; // Stores the latest arguments

    return (...args) => {
        const now = Date.now();

        // If leading is enabled and enough time has passed, execute immediately
        if (leading && (now - lastCall >= delay)) {
            lastCall = now;
            func(...args);
        } else {
            lastArgs = args; // Save latest arguments for trailing execution
        }

        // Handle trailing execution
        if (trailing && !timer) {
            timer = setTimeout(() => {
                timer = null;
                if (!leading || now - lastCall >= delay) { 
                    func(...lastArgs);
                    lastCall = Date.now(); // Update lastCall after trailing execution
                    lastArgs = null; // Clear stored arguments
                }
            }, delay);
        }
    };
}


