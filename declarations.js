const str = "\"\'\\\/'"
const num = 21
const bool = true
const undef = undefined
const arr =[num,str]
const obj = {str:str,num:num,bool:bool,undef:undefined}
const nested = {arr:arr,obj:obj}
Object.freeze(arr,obj,nested)
