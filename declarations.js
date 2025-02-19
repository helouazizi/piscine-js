const escapeStr = "\"\`\\\/'"
const num = 4
const bool = true
const undef = undefined
const str = "2"
const arr =[num,str]
const obj = {str:str,num:num,bool:bool,undef:undefined}
const nested = {arr:arr,obj:obj}
Object.freeze(arr,obj,nested)
