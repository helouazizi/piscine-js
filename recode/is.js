const is = {}

is.num = function (num){
   return typeof num === 'number'
}

is.nan = function(nan){
    return Number.isNaN(nan)
}

is.str = function (str){
    return typeof  str === 'string'
}
is.bool = function (str){
    return typeof  str === 'boolean'
}
is.undef = function (str){
    return typeof  str === 'undefined'
}
is.def = function (str){
    return typeof  str === 'defined'
}
is.arr = function (str){
    return Array.isArray(str)
}
is.obj = function (value){
    return value !== null && typeof value === 'object' && !is.arr(value);
}
is.func = function (str){
    return typeof  str === 'function' 
}
is.truthy = function (str){
    return typeof  str === 'truthy' 
}
is.falsy = function (str){
    return typeof  str === 'falsy' 
}


console.log(typeof(Object.is))
