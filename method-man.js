function words(text){
    return text.split(' ')
}

function sentence(text){
    return text.join(' ')
}
function yell(text){
    return text.toUpperCase()
}
function whisper(text){
    return '*' + text.toLowerCase() + '*'
}
function capitalize(text){
    return text.slice(0,1).toUpperCase() + text.slice(1,text.length).toLowerCase()
}


