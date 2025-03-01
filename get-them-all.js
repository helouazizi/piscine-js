export const getArchitects = () => {
    let test = document.querySelectorAll('a')
    let test1 = document.querySelectorAll('span')
    return [test,test1]
}

export const getClassical = () => {
    let test = document.querySelectorAll('.classical')
    let non = document.querySelectorAll('a:not(.classical),span:not(.classical)')
    return [test,non]
}

export const getActive = () => {
    let active = document.querySelectorAll('a.classical.active,span.classical.active')
    let non = document.querySelectorAll('a:not(.classical.active),span:not(.classical.active)')
    return [active,non]
}

export const getBonannoPisano = () => {
    let bonn =  document.getElementById('BonannoPisano')
    let active = document.querySelectorAll('a.classical.active,span.classical.active')
    return [bonn,[active]]
}
