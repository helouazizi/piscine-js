function reverse(params){
    let isarray = true
    let res= []
    if (!Array.isArray(params)){
        isarray = false
        //params = [params]
    }
    for (let i = params.length-1 ;i >= 0; i--){
        res.push(params[i])
    }
    let text = ""
    if (!isarray){
        for ( let i = 0 ; i < res.length ; i++){
            text+= res[i]
        }
    }

    return isarray ? res : text
}
