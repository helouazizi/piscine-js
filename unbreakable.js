function split(str,dlm){
    let res = []
    let test = ""
    let space  = false
    if (dlm.length > 1){
        dlm = dlm.replace(/\s+/g,'')
        space = true
    }
    
    console.log(dlm.length)
    for (let i = 0 ; i < str.length ; i++){
        let char =  str[i]
        if (char === dlm){
            res.push(test)
            test = ""
            continue
        }
        if (space){
            test+=char.replace(/\s+/g,'')
        }else{
            test += char
        }
        
    }
    res.push(test)
    return res

}

console.log(split('gggg','gg'))