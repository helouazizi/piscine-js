const num = 4 , str = "2" , bool = true , undef = undefined
const escapeStr = "\"\`\\\/'"
const arr =[num,str]
Object.freeze(arr)
const obj = {str:str,num:num,bool:bool,undef:undef}
Object.freeze(obj)
const nested = {arr:[num,undef,str],obj:{str:str,num:num,bool:bool}}
Object.freeze(nested)
Object.freeze(nested.obj)

