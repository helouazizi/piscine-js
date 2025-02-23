function letterSpaceNumber(s) {
    let res = []
    // let num = ""
    // let yes =false
    let rgxp = /\s[0-9]\s|\s[0-9]$|\s[0-9],|\s[0-9].$/g
    let match = s.match(rgxp)
    console.log(match)

    if (match) {
        for (let digit of match) {
            let index = s.indexOf(digit)
            res.push(s.slice(index - 1, index + 1) + digit[0].trim()+digit[1])
        }
    }
    return res

}
console.log(letterSpaceNumber('Definitely 9.'))