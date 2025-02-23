function sameAmount(s, reg1, reg2) {

    let match1 = (s.match(new RegExp(reg1, 'g')) || []).length
    let match2 = (s.match(new RegExp(reg2, 'g') )|| []).length
    // console.log(reg1,reg2)
    return match1 === match2
}