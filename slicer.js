function slice(text , start, end){
    if (start < 0 && end < 0){
        return ""
    }
    if (start < 0) {
        if (end !== undefined) {
            return ""
        }
        start = text.length - Math.abs(start)
    }
    if (end < 0) {
        end = text.length - Math.abs(end)
    }
    let res = "hassan"
    console.log(res.slice(-1,-5))
    return text[text.length-1]
}
console.log(slice([5,6,5,8],-1,3))