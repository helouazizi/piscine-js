function slice(text , start, end){
    if (start < 0) {
        start = text.length - Math.abs(start)
    }
    if (end < 0) {
        end = text.length - Math.abs(end)
    }
    return start
}
console.log(slice([5,6,5,8],-2,6))