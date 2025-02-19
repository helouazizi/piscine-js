const escapeStr = "\"\`\\\/'"
const arr =[4,"2"]
const num = 4 , str = "2" , bool = true , undef = undefined
Object.freeze(arr)
const obj = {str:str,num:num,bool:bool,undef:undef}
Object.freeze(obj)
const nested = {arr:[num,undef,str],obj:{str:str,num:num,bool:bool}}
Object.freeze(nested)

