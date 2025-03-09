function throttle(func,wait) {
    let timeer ;
    return function(...args){
        if(!timeer){
            func(...args)
            timeer = setTimeout(()=>{timeer = null},wait)
        }
    }
}

function opThrottle(func, wait=0, options = { }) {
    let timer = false;
    return function (...args) {
        if (!timer){
            if (options.leading){
                func(...args)
            }
            timer = true
            setTimeout(()=>{
                if(!options.leading){
                    func(...args)
                }
                timer = false; // Reset timer after wait
            },wait)
        }
       
    }
}




